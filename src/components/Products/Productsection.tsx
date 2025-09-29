/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import { apiGet } from "@/lib/api";
import type { Product } from "@/types";

const Productsection: React.FC = () => {
  const [items, setItems] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // UI state
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(7);
  const [filterOpen, setFilterOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // local form state
  const [formName, setFormName] = useState("");
  const [formPrice, setFormPrice] = useState<number | string>("");
  const [formStock, setFormStock] = useState<number | string>("");
  const [formCategory, setFormCategory] = useState("");
  const [formImage, setFormImage] = useState("");

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    apiGet<{ items: Product[] }>("/api/products")
      .then((res) => {
        if (!mounted) return;
        setItems(res.items || []);
        setError(null);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err?.message || "Failed to load products");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!dropdownRef.current) return;
      if (e.target instanceof Node && dropdownRef.current.contains(e.target))
        return;
      setFilterOpen(false);
    }

    if (filterOpen) document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [filterOpen]);

  // close per-row menu when clicking outside
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (menuOpenId == null) return;
      if (
        menuRef.current &&
        e.target instanceof Node &&
        menuRef.current.contains(e.target)
      )
        return;
      setMenuOpenId(null);
    }
    if (menuOpenId != null) document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [menuOpenId]);

  const filtered = useMemo(() => {
    if (!items) return [];
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((p) => {
      return (
        p.name.toLowerCase().includes(q) ||
        (p.category || "").toLowerCase().includes(q) ||
        String(p.price).toLowerCase().includes(q)
      );
    });
  }, [items, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  function changePage(p: number) {
    if (p < 1) p = 1;
    if (p > totalPages) p = totalPages;
    setPage(p);
    // small UX: scroll section into view
    document
      .querySelector("main")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function statusFromStock(stock?: number) {
    if (typeof stock !== "number") return "Pending";
    if (stock === 0) return "Cancelled";
    if (stock <= 5) return "Pending";
    return "Delivered";
  }

  // CRUD helpers
  async function createProduct() {
    try {
      const body = {
        name: formName,
        price: Number(formPrice) || 0,
        stock: Number(formStock) || 0,
        category: formCategory,
        image: formImage || "/images/product-1.jpg",
      };
      const res = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to create");
      // append
      setItems((prev) => (prev ? [...prev, json.item] : [json.item]));
      setShowForm(false);
      resetForm();
      toast.success("Product created");
    } catch (err: unknown) {
      toast.error(String(err || "Failed to create product"));
    }
  }

  async function updateProduct() {
    if (!editing) return;
    try {
      const body = {
        id: editing.id,
        name: formName,
        price: Number(formPrice) || 0,
        stock: Number(formStock) || 0,
        category: formCategory,
        image: formImage || "/images/product-1.jpg",
      };
      const res = await fetch("/api/products", {
        method: "PUT",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to update");
      setItems((prev) =>
        prev
          ? prev.map((p) => (p.id === json.item.id ? json.item : p))
          : [json.item]
      );
      setShowForm(false);
      setEditing(null);
      resetForm();
      toast.success("Product updated");
    } catch (err: any) {
      toast.error(err?.message || String(err || "Failed to update product"));
    }
  }

  async function deleteProduct(id: number) {
    if (!confirm("Delete this product?")) return;
    try {
      const url = `/api/products?id=${id}`;
      const res = await fetch(url, { method: "DELETE" });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to delete");
      setItems((prev) => (prev ? prev.filter((p) => p.id !== id) : []));
      toast.success("Product deleted");
    } catch (err: any) {
      toast.error(err?.message || String(err || "Failed to delete product"));
    }
  }

  function openCreate() {
    setEditing(null);
    resetForm();
    setShowForm(true);
  }

  function openEdit(p: Product) {
    setEditing(p);
    setFormName(p.name || "");
    setFormPrice(p.price ?? "");
    setFormStock(p.stock ?? "");
    setFormCategory(p.category || "");
    setFormImage(p.image || "");
    setShowForm(true);
  }

  function resetForm() {
    setFormName("");
    setFormPrice("");
    setFormStock("");
    setFormCategory("");
    setFormImage("");
  }

  function performSave() {
    if (editing) {
      updateProduct();
    } else {
      createProduct();
    }
  }

  if (loading) {
    return (
      <section className="w-full bg-white px-4 sm:px-6 py-4 rounded-2xl shadow-sm flex items-center justify-center">
        <div className="text-sm text-gray-500">Loading products…</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full bg-white px-4 sm:px-6 py-4 rounded-2xl shadow-sm flex items-center justify-center">
        <div className="text-sm text-red-600">
          Error loading products: {error}
        </div>
      </section>
    );
  }

  // current page items
  const start = (page - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);

  return (
    <section className="w-full bg-white px-4 sm:px-6 py-4 rounded-2xl shadow-sm">
      <Toaster />
      <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4">
        <h2 className="text-lg font-semibold p-2">All products</h2>

        <div className="flex items-center gap-3">
          <button
            onClick={openCreate}
            className="inline-flex items-center gap-2 h-11 px-4 rounded-lg border border-primary-400 bg-[#3758F9] text-white text-sm hover:brightness-95"
          >
            + Add product
          </button>
          <div className="relative w-[420px]">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search..."
              className="block w-full pl-10 pr-4 h-11 rounded-lg border border-gray-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-400"
            />
          </div>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="inline-flex items-center gap-2 h-11 px-4 rounded-lg border border-gray-200 bg-white text-sm text-slate-700 hover:bg-gray-50"
            >
              <svg
                className="w-4 h-4 text-slate-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>05 Feb – 06 March</span>
            </button>

            {filterOpen && (
              <div className="absolute right-0 mt-2 z-50 p-3 bg-white rounded-md shadow-sm border w-56">
                <div className="text-sm text-slate-700">
                  Filters (placeholder)
                </div>
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="text-sm text-[#667085] px-2 py-1 rounded hover:bg-gray-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="w-full table-auto">
          <thead className="text-left text-xs text-[#667085]">
            <tr>
              <th className="min-w-[220px] px-3 py-3 font-medium">Products</th>
              <th className="px-3 py-3 font-medium">Category</th>
              <th className="px-3 py-3 font-medium text-right">Price</th>
              <th className="px-3 py-3 font-medium text-right">Status</th>
              <th className="px-3 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {pageItems.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-3 py-10 text-center text-sm text-slate-500"
                >
                  No products found.
                </td>
              </tr>
            ) : (
              pageItems.map((p) => {
                const status = statusFromStock(p.stock);
                return (
                  <tr
                    key={p.id}
                    className="border-t border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="font-medium flex items-center gap-3 px-3 py-3">
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={48}
                        height={48}
                        className="rounded-md object-cover"
                      />
                      <div>
                        <div className="text-sm font-medium text-slate-900">
                          {p.name}
                        </div>
                        <div className="text-xs text-slate-400">
                          {p.stock} in stock
                        </div>
                      </div>
                    </td>
                    <td className="text-sm text-[#667085] px-3 py-3">
                      {p.category}
                    </td>
                    <td className="text-sm text-[#667085] px-3 py-3 text-right">
                      ${p.price.toLocaleString()}
                    </td>
                    <td className="px-3 py-3 text-right">
                      {status === "Delivered" ? (
                        <span className="inline-flex items-center justify-center text-xs font-medium rounded-full px-2 py-0.5 bg-emerald-50 text-emerald-700">
                          Delivered
                        </span>
                      ) : status === "Pending" ? (
                        <span className="inline-flex items-center justify-center text-xs font-medium rounded-full px-2 py-0.5 bg-amber-50 text-amber-700">
                          Pending
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center text-xs font-medium rounded-full px-2 py-0.5 bg-red-50 text-red-700">
                          Cancelled
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-3 text-right">
                      <div className="relative flex items-center justify-end">
                        <button
                          aria-haspopup="true"
                          aria-expanded={menuOpenId === p.id}
                          onClick={() =>
                            setMenuOpenId(menuOpenId === p.id ? null : p.id)
                          }
                          className="w-8 h-8 inline-flex items-center justify-center rounded-md border border-gray-100 bg-white text-slate-600 hover:bg-gray-50"
                          title="Actions"
                        >
                          {/* three dots vertical */}
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                          >
                            <circle cx="12" cy="6" r="1.5"></circle>
                            <circle cx="12" cy="12" r="1.5"></circle>
                            <circle cx="12" cy="18" r="1.5"></circle>
                          </svg>
                        </button>

                        {menuOpenId === p.id && (
                          <div
                            ref={menuRef}
                            className="absolute right-0 mt-2 w-56 z-50"
                          >
                            <div className="bg-white rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-2">
                              <button
                                onClick={() => {
                                  setMenuOpenId(null);
                                  openEdit(p);
                                }}
                                className="w-full flex items-center gap-3 px-3 py-2 rounded-[8px] hover:bg-[#F3F4F6] text-[#344054] text-sm"
                              >
                                <svg
                                  className="w-4 h-4 text-slate-600"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden
                                >
                                  <path d="M12 20h9" />
                                  <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                                </svg>
                                <span className="font-medium">
                                  Edit product
                                </span>
                              </button>

                              <button
                                onClick={() => {
                                  setMenuOpenId(null);
                                  deleteProduct(p.id);
                                }}
                                className="w-full flex items-center gap-3 px-3 py-2 mt-2 rounded-[8px] hover:bg-[#FEF3F2] text-[#344054] text-sm"
                              >
                                <svg
                                  className="w-4 h-4 text-red-600"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden
                                >
                                  <polyline points="3 6 5 6 21 6" />
                                  <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                                  <path d="M10 11v6M14 11v6" />
                                </svg>
                                <span className="text-red-600 font-medium">
                                  Delete
                                </span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 border-t border-gray-100 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => changePage(page - 1)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm ${
              page <= 1 ? "opacity-50" : ""
            }`}
            disabled={page <= 1}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33325 9.99715L16.6677 9.99715M8.32991 5L3.33325 9.99984L8.32991 15"
                stroke="#344054"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Previous
          </button>
        </div>

        <nav className="flex-1 flex items-center justify-center">
          <ul className="inline-flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
              const isActive = p === page;
              return (
                <li key={p}>
                  <button
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => changePage(p)}
                    className={`w-10 h-10 inline-flex items-center justify-center rounded-lg text-sm ${
                      isActive
                        ? "bg-[#3758F9] text-white shadow"
                        : "bg-white ring-1 ring-inset ring-gray-100 text-slate-700 hover:bg-gray-50"
                    }`}
                  >
                    {p}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => changePage(page + 1)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm ${
              page >= totalPages ? "opacity-50" : ""
            }`}
            disabled={page >= totalPages}
          >
            Next
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6677 5.99715L1.33325 5.99715M9.67106 1L14.6677 5.99984L9.67106 11"
                stroke="#344054"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Add / Edit modal (simple) */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              {editing ? "Edit product" : "Add product"}
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <label className="text-sm font-medium">Product name</label>
              <input
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder="Name"
                className="w-full border rounded px-3 py-2"
              />
              <label className="text-sm font-medium">Price</label>
              <input
                value={String(formPrice)}
                onChange={(e) => setFormPrice(e.target.value)}
                placeholder="Price"
                className="w-full border rounded px-3 py-2"
              />
              <label className="text-sm font-medium">Stock</label>
              <input
                value={String(formStock)}
                onChange={(e) => setFormStock(e.target.value)}
                placeholder="Stock"
                className="w-full border rounded px-3 py-2"
              />
              <label className="text-sm font-medium">Category</label>
              <input
                value={formCategory}
                onChange={(e) => setFormCategory(e.target.value)}
                placeholder="Category"
                className="w-full border rounded px-3 py-2"
              />
              <label className="text-sm font-medium">Image local path</label>
              <input
                value={formImage}
                onChange={(e) => setFormImage(e.target.value)}
                placeholder="Image path"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditing(null);
                  resetForm();
                }}
                className="px-3 py-2 rounded bg-white border"
              >
                Cancel
              </button>
              <button
                onClick={() => performSave()}
                className="px-3 py-2 rounded bg-[#3758F9] text-white"
              >
                {editing ? "Save" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Productsection;

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { apiGet } from "@/lib/api";
import type { Order } from "@/types";

const OrderTable = () => {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const toggleStatus = (s: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(s) ? prev.filter((p) => p !== s) : [...prev, s]
    );
  };

  const filtered =
    selectedStatuses.length > 0
      ? (orders || []).filter((o) => selectedStatuses.includes(o.status))
      : orders || [];

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    apiGet<{ items: Order[] }>("/api/orders")
      .then((res) => {
        if (!mounted) return;
        setOrders(res.items);
        setError(null);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Failed to load orders");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!dropdownRef.current) return;
      if (e.target instanceof Node && dropdownRef.current.contains(e.target)) {
        return;
      }
      setFilterOpen(false);
    }

    if (filterOpen) {
      document.addEventListener("mousedown", onDoc);
    }
    return () => document.removeEventListener("mousedown", onDoc);
  }, [filterOpen]);

  if (loading) {
    return (
      <section className="max-w-[665px] md:w-[665px] w-full h-[200px] bg-white px-4 sm:px-6 py-4 rounded-2xl shadow-sm flex items-center justify-center">
        <div className="text-sm text-gray-500">Loading orders…</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-[665px] md:w-[665px] w-full h-[200px] bg-white px-4 sm:px-6 py-4 rounded-2xl shadow-sm flex items-center justify-center">
        <div className="text-sm text-red-600">
          Error loading orders: {error}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-[665px] md:w-[665px] w-full h-[463px] bg-white px-4 sm:px-6 py-4 rounded-2xl shadow-sm">
      <div className="flex items-center h-[76px] justify-between border-b border-gray-200">
        <h2 className="text-lg font-semibold p-6">Recent Orders</h2>
        <div className="flex items-center gap-5 justify-center">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="inline-flex items-center h-11 gap-2 px-3 py-1 rounded-[8px] border border-[#D0D5DD] text-sm text-gray-700 hover:bg-gray-50 ml-6 mb-4"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6533 5.90421C14.6533 4.48439 13.5023 3.33337 12.0825 3.33337C10.6627 3.33337 9.5117 4.48439 9.51168 5.90421M14.6533 5.90421C14.6533 7.32404 13.5023 8.47504 12.0825 8.47504C10.6627 8.47504 9.51168 7.32404 9.51168 5.90421M14.6533 5.90421L17.7083 5.90417M9.51168 5.90421L2.29163 5.90417M5.34658 14.0959C5.34658 12.676 6.49758 11.525 7.91741 11.525C9.33724 11.525 10.4882 12.676 10.4882 14.0959M5.34658 14.0959C5.34658 15.5157 6.49758 16.6667 7.91741 16.6667C9.33724 16.6667 10.4882 15.5157 10.4882 14.0959M5.34658 14.0959L2.29163 14.0958M10.4882 14.0959L17.7083 14.0958"
                  stroke="#344054"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Filter
            </button>

            {filterOpen && (
              <div className="absolute right-0 mt-2 z-50 p-3 bg-white rounded-md shadow-sm border w-40">
                <div className="flex flex-col gap-2">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedStatuses.includes("Delivered")}
                      onChange={() => toggleStatus("Delivered")}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">Delivered</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedStatuses.includes("Pending")}
                      onChange={() => toggleStatus("Pending")}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">Pending</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedStatuses.includes("Cancelled")}
                      onChange={() => toggleStatus("Cancelled")}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">Cancelled</span>
                  </label>
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => {
                        setSelectedStatuses([]);
                        setFilterOpen(false);
                      }}
                      className="text-sm text-[#667085] px-2 py-1 rounded hover:bg-gray-50"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button className="inline-flex items-center h-11 gap-2 px-3 py-1 rounded-[8px] border border-[#D0D5DD] text-sm text-gray-700 hover:bg-gray-50 ml-2 mb-4">
            See all
          </button>
        </div>
      </div>

      <div className=" overflow-x-auto">
        <table className="w-full  table-auto">
          <thead className="my-2">
            <tr>
              <th className="min-w-[100px] text-left text-xs text-[#667085] font-medium px-3 py-2">
                Product
              </th>
              <th className="text-left text-xs text-[#667085] font-medium px-3 py-2">
                Category
              </th>
              <th className="text-left text-xs text-[#667085] font-medium px-3 py-2">
                Price
              </th>
              <th className="text-left text-xs text-[#667085] font-medium px-3 py-2">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((order) => (
              <tr key={order.id} className="border-t border-gray-100">
                <td className="font-medium flex items-center gap-3 px-3 py-2">
                  <Image
                    src={order.image}
                    alt={order.product}
                    width={50}
                    height={50}
                  />
                  <div>
                    <div>{order.product}</div>
                    <p className="text-xs font-normal leading-6 text-gray-500">
                      2 Variants
                    </p>
                  </div>
                </td>
                <td className="text-sm text-[#667085] px-3 py-2">
                  {order.category}
                </td>
                <td className="text-sm text-[#667085] px-3 py-2">
                  {order.price}
                </td>
                <td className="px-3 py-2">
                  {order.status === "Delivered" ? (
                    <div className="w-[70px] h-[22px] flex items-center justify-center">
                      <svg
                        width="70"
                        height="22"
                        viewBox="0 0 70 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                        focusable={false}
                      >
                        <path
                          d="M0 11C0 4.92487 4.92487 0 11 0H59C65.0751 0 70 4.92487 70 11C70 17.0751 65.0751 22 59 22H11C4.92487 22 0 17.0751 0 11Z"
                          fill="#ECFDF3"
                        />
                        <path
                          d="M9.25714 15V6.6H11.7171C12.6931 6.6 13.4971 6.772 14.1291 7.116C14.7691 7.46 15.2411 7.948 15.5451 8.58C15.8571 9.204 16.0131 9.948 16.0131 10.812C16.0131 11.676 15.8571 12.42 15.5451 13.044C15.2411 13.668 14.7691 14.152 14.1291 14.496C13.4971 14.832 12.6931 15 11.7171 15H9.25714ZM10.4571 13.992H11.6691C12.4451 13.992 13.0571 13.864 13.5051 13.608C13.9611 13.352 14.2851 12.988 14.4771 12.516C14.6771 12.036 14.7771 11.468 14.7771 10.812C14.7771 10.148 14.6771 9.576 14.4771 9.096C14.2851 8.616 13.9611 8.248 13.5051 7.992C13.0571 7.736 12.4451 7.608 11.6691 7.608H10.4571V13.992ZM20.136 15.144C19.552 15.144 19.036 15.012 18.588 14.748C18.148 14.476 17.804 14.1 17.556 13.62C17.308 13.14 17.184 12.58 17.184 11.94C17.184 11.292 17.308 10.728 17.556 10.248C17.804 9.76 18.152 9.38 18.6 9.108C19.048 8.836 19.564 8.7 20.148 8.7C20.748 8.7 21.26 8.836 21.684 9.108C22.108 9.372 22.432 9.728 22.656 10.176C22.88 10.616 22.992 11.108 22.992 11.652C22.992 11.732 22.988 11.816 22.98 11.904C22.98 11.992 22.976 12.092 22.968 12.204H18.06V11.364H21.792C21.776 10.836 21.612 10.428 21.3 10.14C20.988 9.844 20.6 9.696 20.136 9.696C19.816 9.696 19.52 9.772 19.248 9.924C18.984 10.076 18.768 10.3 18.6 10.596C18.44 10.884 18.36 11.252 18.36 11.7V12.036C18.36 12.492 18.44 12.88 18.6 13.2C18.76 13.512 18.972 13.748 19.236 13.908C19.508 14.068 19.804 14.148 20.124 14.148C20.524 14.148 20.844 14.068 21.084 13.908C21.324 13.74 21.5 13.516 21.612 13.236H22.824C22.72 13.596 22.544 13.92 22.296 14.208C22.048 14.496 21.74 14.724 21.372 14.892C21.012 15.06 20.6 15.144 20.136 15.144ZM24.3495 15V6.36H25.5495V15H24.3495ZM27.2929 15V8.844H28.4929V15H27.2929ZM27.8929 7.74C27.6609 7.74 27.4689 7.668 27.3169 7.524C27.1729 7.38 27.1009 7.196 27.1009 6.972C27.1009 6.756 27.1729 6.58 27.3169 6.444C27.4689 6.3 27.6609 6.228 27.8929 6.228C28.1169 6.228 28.3049 6.3 28.4569 6.444C28.6089 6.58 28.6849 6.756 28.6849 6.972C28.6849 7.196 28.6089 7.38 28.4569 7.524C28.3049 7.668 28.1169 7.74 27.8929 7.74ZM31.9606 15L29.6566 8.844H30.9166L32.6806 13.848L34.4446 8.844H35.6806L33.3766 15H31.9606ZM39.2024 15.144C38.6184 15.144 38.1024 15.012 37.6544 14.748C37.2144 14.476 36.8704 14.1 36.6224 13.62C36.3744 13.14 36.2504 12.58 36.2504 11.94C36.2504 11.292 36.3744 10.728 36.6224 10.248C36.8704 9.76 37.2184 9.38 37.6664 9.108C38.1144 8.836 38.6304 8.7 39.2144 8.7C39.8144 8.7 40.3264 8.836 40.7504 9.108C41.1744 9.372 41.4984 9.728 41.7224 10.176C41.9464 10.616 42.0584 11.108 42.0584 11.652C42.0584 11.732 42.0544 11.816 42.0464 11.904C42.0464 11.992 42.0424 12.092 42.0344 12.204H37.1264V11.364H40.8584C40.8424 10.836 40.6784 10.428 40.3664 10.14C40.0544 9.844 39.6664 9.696 39.2024 9.696C38.8824 9.696 38.5864 9.772 38.3144 9.924C38.0504 10.076 37.8344 10.3 37.6664 10.596C37.5064 10.884 37.4264 11.252 37.4264 11.7V12.036C37.4264 12.492 37.5064 12.88 37.6664 13.2C37.8264 13.512 38.0384 13.748 38.3024 13.908C38.5744 14.068 38.8704 14.148 39.1904 14.148C39.5904 14.148 39.9104 14.068 40.1504 13.908C40.3904 13.74 40.5664 13.516 40.6784 13.236H41.8904C41.7864 13.596 41.6104 13.92 41.3624 14.208C41.1144 14.496 40.8064 14.724 40.4384 14.892C40.0784 15.06 39.6664 15.144 39.2024 15.144ZM43.4159 15V8.844H44.4959L44.5919 9.984C44.7359 9.712 44.9199 9.48 45.1439 9.288C45.3679 9.096 45.6319 8.952 45.9359 8.856C46.2479 8.752 46.5959 8.7 46.9799 8.7V9.972H46.4399C46.1999 9.972 45.9679 10.004 45.7439 10.068C45.5279 10.124 45.3319 10.224 45.1559 10.368C44.9879 10.504 44.8559 10.692 44.7599 10.932C44.6639 11.172 44.6159 11.476 44.6159 11.844V15H43.4159ZM50.6516 15.144C50.0676 15.144 49.5516 15.012 49.1036 14.748C48.6636 14.476 48.3196 14.1 48.0716 13.62C47.8236 13.14 47.6996 12.58 47.6996 11.94C47.6996 11.292 47.8236 10.728 48.0716 10.248C48.3196 9.76 48.6676 9.38 49.1156 9.108C49.5636 8.836 50.0796 8.7 50.6636 8.7C51.2636 8.7 51.7756 8.836 52.1996 9.108C52.6236 9.372 52.9476 9.728 53.1716 10.176C53.3956 10.616 53.5076 11.108 53.5076 11.652C53.5076 11.732 53.5036 11.816 53.4956 11.904C53.4956 11.992 53.4916 12.092 53.4836 12.204H48.5756V11.364H52.3076C52.2916 10.836 52.1276 10.428 51.8156 10.14C51.5036 9.844 51.1156 9.696 50.6516 9.696C50.3316 9.696 50.0356 9.772 49.7636 9.924C49.4996 10.076 49.2836 10.3 49.1156 10.596C48.9556 10.884 48.8756 11.252 48.8756 11.7V12.036C48.8756 12.492 48.9556 12.88 49.1156 13.2C49.2756 13.512 49.4876 13.748 49.7516 13.908C50.0236 14.068 50.3196 14.148 50.6396 14.148C51.0396 14.148 51.3596 14.068 51.5996 13.908C51.8396 13.74 52.0156 13.516 52.1276 13.236H53.3396C53.2356 13.596 53.0596 13.92 52.8116 14.208C52.5636 14.496 52.2556 14.724 51.8876 14.892C51.5276 15.06 51.1156 15.144 50.6516 15.144ZM57.5051 15.144C56.9451 15.144 56.4451 15.004 56.0051 14.724C55.5731 14.444 55.2371 14.064 54.9971 13.584C54.7571 13.096 54.6371 12.544 54.6371 11.928C54.6371 11.304 54.7571 10.752 54.9971 10.272C55.2451 9.784 55.5851 9.4 56.0171 9.12C56.4571 8.84 56.9651 8.7 57.5411 8.7C58.0131 8.7 58.4251 8.796 58.7771 8.988C59.1291 9.172 59.4051 9.432 59.6051 9.768V6.36H60.8051V15H59.7371L59.6171 14.052C59.4891 14.244 59.3291 14.424 59.1371 14.592C58.9531 14.752 58.7251 14.884 58.4531 14.988C58.1811 15.092 57.8651 15.144 57.5051 15.144ZM57.7211 14.1C58.0971 14.1 58.4251 14.012 58.7051 13.836C58.9931 13.652 59.2131 13.4 59.3651 13.08C59.5171 12.752 59.5931 12.368 59.5931 11.928C59.5931 11.488 59.5171 11.104 59.3651 10.776C59.2131 10.448 58.9931 10.196 58.7051 10.02C58.4251 9.836 58.0971 9.744 57.7211 9.744C57.3611 9.744 57.0411 9.836 56.7611 10.02C56.4811 10.196 56.2611 10.448 56.1011 10.776C55.9411 11.104 55.8611 11.488 55.8611 11.928C55.8611 12.36 55.9411 12.74 56.1011 13.068C56.2611 13.396 56.4811 13.652 56.7611 13.836C57.0411 14.012 57.3611 14.1 57.7211 14.1Z"
                          fill="#039855"
                        />
                      </svg>
                    </div>
                  ) : order.status === "Pending" ? (
                    <div className="w-[70px] h-[22px] flex items-center justify-center text-xs font-medium rounded-full bg-[#FFFAEB] text-[#DC6803]">
                      Pending
                    </div>
                  ) : (
                    <div className="w-[70px] h-[22px] flex items-center justify-center text-xs font-medium rounded-full bg-[#FEF3F2] text-[#DC2626]">
                      Cancelled
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrderTable;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { apiGet } from "@/lib/api";
import type { Category } from "@/types";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const CategorySection = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    apiGet<{ items: Category[] }>("/api/categories")
      .then((res) => {
        if (!mounted) return;
        setCategories(res.items);
        setError(null);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Failed to load categories");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="flex items-center bg-[#F3F4F6] w-full justify-center mx-auto min-h-[700px]">
        <div className="max-w-[1280px] w-full mx-auto p-4 md:p-8 flex items-center justify-center">
          <LoadingSpinner label="Loading categories…" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex items-center bg-[#F3F4F6] w-full justify-center mx-auto min-h-[700px]">
        <div className="max-w-[1280px] w-full mx-auto p-4 md:p-8 flex items-center justify-center">
          <div className="text-sm text-red-600">
            Error loading categories: {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex items-center bg-[#F3F4F6] w-full justify-center  mx-auto min-h-[700px]">
      <div className="max-w-[1280px] w-full mx-auto p-4 md:p-8">
        <div className="max-w-[570px]">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-left leading-12 text-[#1F2937]">
            Shop by Category
          </h2>

          <p className="text-[16px] text-left leading-7 text-[#6B7280] ">
            Explore our curated selection of products across premium categories,
            from everyday essentials to exclusive limited collections.
          </p>
        </div>

        {/* categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
          {categories?.map((cat) => (
            <div
              key={cat.id}
              className="bg-white p-2 rounded-2xl max-w-[328px] md:max-w-[224px] min-h-[292px]"
            >
              <div className="relative w-full h-[282px] md:h-[188px] mb-4">
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  className="object-cover rounded-[8px]"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <h3 className="text-[16px] font-semibold text-[#111827] leading-6">
                  {cat.title}
                </h3>
                <p className="text-[16px] text-[#6B7280] font-medium">
                  {cat.count} Products
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

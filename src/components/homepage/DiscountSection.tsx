"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { apiGet } from "@/lib/api";
import type { DiscountCard } from "@/types";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const DiscountSection = () => {
  const [discountCards, setDiscountCards] = useState<DiscountCard[] | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    apiGet<{ items: DiscountCard[] }>("/api/discounts")
      .then((res) => {
        if (!mounted) return;
        setDiscountCards(res.items);
        setError(null);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Failed to load discount cards");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="bg-white w-full min-h-[555px] flex items-center justify-center">
        <div className="max-w-[1440px] mx-auto p-4 flex items-center justify-center">
          <LoadingSpinner label="Loading discount section…" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white w-full min-h-[555px] flex items-center justify-center">
        <div className="max-w-[1440px] mx-auto p-4 flex items-center justify-center">
          <div className="text-sm text-red-600">
            Error loading discount section: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white w-full min-h-[555px] flex items-center justify-center">
      <div className="max-w-[1440px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto p-4">
        {discountCards?.map((card) => (
          <div key={card.id}>
            {card.type === "image" ? (
              <div className="relative w-full max-w-[328px] md:max-w-[440px] h-[328px] md:h-[470px] mx-auto">
                <Image
                  src={card.image!}
                  alt={card.alt!}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ) : (
              <div className="w-full md:w-[440px]  h-[328px] md:h-[470px] bg-[#F3F4F6] flex flex-col items-center justify-center text-center p-8 md:p-10 rounded-lg mx-auto">
                <h2 className="text-4xl font-semibold  mb-4 leading-10 text-[#1F2937]">
                  Don&apos;t Miss Out <br /> 50% OFF
                </h2>
                <p className="text-sm  text-[#6B7280] font-normal leading-5">
                  {card.description}
                </p>
                <button
                  type="button"
                  className="bg-[#3758F9] w-full md:w-[121px] text-white py-3 px-5 rounded-lg mt-4 md:mt-14 text-sm font-normal leading-5"
                >
                  {card.buttonText}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountSection;

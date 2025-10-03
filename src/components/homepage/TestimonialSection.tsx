"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { apiGet } from "@/lib/api";
import type { Testimonial } from "@/types";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    apiGet<{ items: Testimonial[] }>("/api/testimonials")
      .then((res) => {
        if (!mounted) return;
        setTestimonials(res.items);
        setError(null);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Failed to load testimonials");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="flex items-center bg-[#F3F4F6] w-full justify-center mx-auto min-h-[700px]">
        <div className="max-w-[1280px] w-full px-4 py-8 md:p-8 flex items-center justify-center">
          <LoadingSpinner label="Loading testimonials…" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex items-center bg-[#F3F4F6] w-full justify-center mx-auto min-h-[700px]">
        <div className="max-w-[1280px] w-full px-4 py-8 md:p-8 flex items-center justify-center">
          <div className="text-sm text-red-600">
            Error loading testimonials: {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex items-center bg-[#F3F4F6] w-full justify-center  mx-auto min-h-[700px]">
      <div className="max-w-[1280px] w-full px-4 py-8 md:p-8">
        <div className="max-w-[112px] px-3 py-1 bg-[#3758F90D] text-[#3758F9] rounded-[16px] flex items-center justify-center text-[16px] font-medium z-20 mx-auto md:mx-0">
          Testimonials
        </div>
        <div className="max-w-[600px] mt-6">
          <h2 className="text-4xl md:text-5xl text-center md:text-left font-semibold mb-6 leading-10 md:leading-12 text-[#1F2937]">
            Hear from Our Happy Customers
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials?.map((item) => (
            <div
              key={item.id}
              className="bg-white w-full max-w-[328px] md:max-w-[392px] min-h-[288px] md:h-[264px] p-6 rounded-2xl flex flex-col items-start text-left mx-auto"
            >
              {/* reviewer stars */}
              <div className="flex items-center mb-6">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.235 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#6B7280] font-normal leading-6 mb-6">
                {item.testimonial}
              </p>

              <div className="flex items-center gap-2">
                {/* reviewer image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="w-12 h-12 rounded-full"
                />
                <div className="">
                  <h3 className="text-md font-medium text-[#374151] leading-6">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#6B7280] font-normal leading-5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

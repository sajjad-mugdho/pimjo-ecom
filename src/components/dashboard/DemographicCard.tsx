import Image from "next/image";
import React from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

type Props = {
  loading?: boolean;
};

type CustomerItem = {
  country: string;
  flagEmoji: React.ReactNode;
  customers: number;
  percentage: number; // 0-100
  color?: string;
};

const customerData: CustomerItem[] = [
  {
    country: "USA",
    flagEmoji: (
      <svg
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_728_2441)">
          <path
            d="M16 32.5C24.8366 32.5 32 25.3366 32 16.5C32 7.66344 24.8366 0.5 16 0.5C7.16344 0.5 0 7.66344 0 16.5C0 25.3366 7.16344 32.5 16 32.5Z"
            fill="#F0F0F0"
          />
          <path
            d="M15.3039 16.5H31.9995C31.9995 15.0559 31.807 13.6569 31.4484 12.326H15.3039V16.5Z"
            fill="#D80027"
          />
          <path
            d="M15.3039 8.15135H29.6512C28.6717 6.5531 27.4194 5.14042 25.9593 3.97742H15.3039V8.15135Z"
            fill="#D80027"
          />
          <path
            d="M15.9996 32.5C19.7652 32.5 23.2262 31.1985 25.9594 29.0217H6.03986C8.77298 31.1985 12.234 32.5 15.9996 32.5Z"
            fill="#D80027"
          />
          <path
            d="M2.34806 24.8465H29.6513C30.4376 23.5635 31.0474 22.161 31.4485 20.6726H0.550873C0.951935 22.161 1.56175 23.5635 2.34806 24.8465Z"
            fill="#D80027"
          />
          <path
            d="M7.4115 2.99863H8.86956L7.51331 3.98394L8.03137 5.57825L6.67519 4.59294L5.319 5.57825L5.7665 4.20094C4.57237 5.19562 3.52575 6.361 2.66325 7.6595H3.13044L2.26712 8.28669C2.13262 8.51106 2.00362 8.739 1.88 8.97031L2.29225 10.2391L1.52313 9.68031C1.33194 10.0854 1.15706 10.4996 0.999875 10.9224L1.45406 12.3204H3.13044L1.77419 13.3057L2.29225 14.9L0.936063 13.9147L0.123687 14.5049C0.042375 15.1586 0 15.8243 0 16.5H16C16 7.6635 16 6.62175 16 0.5C12.8393 0.5 9.89281 1.41688 7.4115 2.99863ZM8.03137 14.9L6.67519 13.9147L5.319 14.9L5.83706 13.3057L4.48081 12.3204H6.15719L6.67519 10.7261L7.19319 12.3204H8.86956L7.51331 13.3057L8.03137 14.9ZM7.51331 8.64481L8.03137 10.2391L6.67519 9.25381L5.319 10.2391L5.83706 8.64481L4.48081 7.6595H6.15719L6.67519 6.06519L7.19319 7.6595H8.86956L7.51331 8.64481ZM13.7705 14.9L12.4143 13.9147L11.0581 14.9L11.5762 13.3057L10.2199 12.3204H11.8963L12.4143 10.7261L12.9323 12.3204H14.6087L13.2524 13.3057L13.7705 14.9ZM13.2524 8.64481L13.7705 10.2391L12.4143 9.25381L11.0581 10.2391L11.5762 8.64481L10.2199 7.6595H11.8963L12.4143 6.06519L12.9323 7.6595H14.6087L13.2524 8.64481ZM13.2524 3.98394L13.7705 5.57825L12.4143 4.59294L11.0581 5.57825L11.5762 3.98394L10.2199 2.99863H11.8963L12.4143 1.40431L12.9323 2.99863H14.6087L13.2524 3.98394Z"
            fill="#0052B4"
          />
        </g>
        <defs>
          <clipPath id="clip0_728_2441">
            <rect y="0.5" width="32" height="32" rx="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    customers: 2379,
    percentage: 79,
    color: "indigo",
  },
  {
    country: "France",
    flagEmoji: (
      <svg
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_728_2459)">
          <path
            d="M16 32.5C24.8366 32.5 32 25.3366 32 16.5C32 7.66344 24.8366 0.5 16 0.5C7.16344 0.5 0 7.66344 0 16.5C0 25.3366 7.16344 32.5 16 32.5Z"
            fill="#F0F0F0"
          />
          <path
            d="M31.9999 16.4999C31.9999 9.62049 27.6579 3.7558 21.5651 1.49512V31.5048C27.6579 29.2441 31.9999 23.3794 31.9999 16.4999Z"
            fill="#D80027"
          />
          <path
            d="M0.000579834 16.501C0.000579834 23.3805 4.34264 29.2452 10.4354 31.5058V1.49622C4.34264 3.7569 0.000579834 9.62159 0.000579834 16.501Z"
            fill="#0052B4"
          />
        </g>
        <defs>
          <clipPath id="clip0_728_2459">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    customers: 589,
    percentage: 23,
    color: "indigo",
  },
];

export default function DemographicCard({ loading }: Props) {
  if (loading) {
    return (
      <article className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 w-[328px] sm:w-[413px] min-h-[420px] sm:h-[463px] flex items-center justify-center">
        <LoadingSpinner label="Loading demographics…" />
      </article>
    );
  }
  return (
    <article
      className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 w-[328px] sm:w-[413px] min-h-[420px] sm:h-[463px] flex flex-col"
      aria-labelledby="demographic-title"
    >
      {/* Header */}
      <header className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold leading-7 text-[#1D2939]">
            Customer Demographics
          </h3>
          <p className="text-sm leading-5 text-[#667085] mt-1">
            Number of customers based on country
          </p>
        </div>

        <button
          aria-label="more"
          className="ml-4 text-gray-400 hover:text-gray-500 p-1 rounded-full"
        >
          {/* vertical ellipsis */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <circle cx="12" cy="5" r="1.6" fill="currentColor" />
            <circle cx="12" cy="12" r="1.6" fill="currentColor" />
            <circle cx="12" cy="19" r="1.6" fill="currentColor" />
          </svg>
        </button>
      </header>

      {/* Map */}
      <div className="mt-5 bg-[#F9FAFB] rounded-xl border border-[#E4E7EC] p-3 sm:p-4 flex-shrink-0">
        <div className="relative w-full h-[140px] sm:h-[170px] rounded-lg overflow-hidden">
          <Image
            src="/map.svg"
            alt="World map"
            layout="fill"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Bottom list */}
      <div className="mt-5 space-y-4 flex-1 overflow-auto">
        {customerData.map((item) => (
          <div key={item.country} className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="w-6 h-6 mx-2 sm:w-8 sm:h-8">{item.flagEmoji}</div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-gray-900 truncate">
                  {item.country}
                </div>
                <div className="text-xs text-gray-500 truncate">
                  {item.customers.toLocaleString()} Customers
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-20 sm:w-[98px]">
                <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-[#3758F9]"
                    style={{
                      width: `${Math.max(0, Math.min(100, item.percentage))}%`,
                    }}
                  />
                </div>
              </div>

              <div className="w-10 sm:w-12 text-right">
                <span className="text-sm font-normal text-gray-800">
                  {item.percentage}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

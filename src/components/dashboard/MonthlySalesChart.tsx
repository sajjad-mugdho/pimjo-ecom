"use client";
import React, { useState } from "react";

type DataPoint = { month: string; sales: number };

const MAX_SALES = 800;

const salesData: DataPoint[] = [
  { month: "Jan", sales: 500 },
  { month: "Feb", sales: 750 },
  { month: "Mar", sales: 400 }, // highlighted
  { month: "Apr", sales: 620 },
  { month: "May", sales: 350 },
  { month: "Jun", sales: 540 },
  { month: "Jul", sales: 560 },
  { month: "Aug", sales: 700 },
  { month: "Sep", sales: 480 },
  { month: "Oct", sales: 610 },
  { month: "Nov", sales: 520 },
  { month: "Dec", sales: 450 },
];

export default function MonthlySalesChart() {
  const [selectedMonth, setSelectedMonth] = useState<string>("Mar");

  return (
    <div className="w-full md:w-[628px] md:h-[288px] bg-white rounded-xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg  font-semibold leading-7 text-[#1D2939]">
          Monthly Sales
        </h3>

        <button
          aria-label="More"
          className="inline-flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-100 text-[#667085]"
        >
          {/* MoreVertical icon (three dots vertical) */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6a2 2 0 100-4 2 2 0 000 4zM12 14a2 2 0 100-4 2 2 0 000 4zM12 22a2 2 0 100-4 2 2 0 000 4z"
              fill="#667085"
            />
          </svg>
        </button>
      </div>

      {/* Chart area */}
      <div className="flex h-[200px]">
        {/* Y axis labels */}
        <div className="w-12 flex flex-col justify-between items-end pr-3">
          {[800, 600, 400, 200, 0].map((label) => (
            <span key={label} className="text-xs text-gray-400">
              {label}
            </span>
          ))}
        </div>

        {/* Bars + grid */}
        <div className="flex-1 relative">
          {/* horizontal grid lines (4 lines for 200/400/600/800) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-full flex flex-col justify-between">
              {/* top line (800) */}
              <div className="border-t border-gray-100" />
              <div className="border-t border-gray-100" />
              <div className="border-t border-gray-100" />
              <div className="border-t border-gray-100" />
              <div />
            </div>
          </div>

          {/* Bars container */}
          <div className="relative h-full flex flex-col justify-end">
            <div className="flex items-end h-[160px] gap-2 w-full">
              {/* bar area height */}
              {salesData.map((d) => {
                const percent = Math.max(
                  0,
                  Math.min(100, (d.sales / MAX_SALES) * 100)
                );
                const isSelected = d.month === selectedMonth;
                return (
                  <div
                    key={d.month}
                    className="flex-1 flex flex-col items-center"
                  >
                    {/* fixed-height bar container so percentage heights work reliably */}
                    <div className="h-[160px] w-full flex items-end justify-center">
                      <div
                        role="button"
                        tabIndex={0}
                        aria-pressed={isSelected}
                        title={`${d.month}: ${d.sales}`}
                        onClick={() => setSelectedMonth(d.month)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ")
                            setSelectedMonth(d.month);
                        }}
                        style={{
                          width: 20,
                          height: `${percent}%`,
                          backgroundColor: isSelected ? "#3758F9" : "#F2F4F7",
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                          cursor: "pointer",
                        }}
                        className="transition-all"
                      />
                    </div>
                    <div className="mt-2 text-xs text-[#667085]">{d.month}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

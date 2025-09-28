"use client";

import React, { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

type Row = {
  month: string;
  TargetValue: number;
  ActualValue: number;
};

const data: Row[] = [
  { month: "Jan", TargetValue: 720, ActualValue: 460 },
  { month: "Feb", TargetValue: 740, ActualValue: 480 },
  { month: "Mar", TargetValue: 760, ActualValue: 500 },
  { month: "Apr", TargetValue: 770, ActualValue: 520 },
  { month: "May", TargetValue: 785, ActualValue: 540 },
  { month: "Jun", TargetValue: 800, ActualValue: 560 },
  { month: "Jul", TargetValue: 780, ActualValue: 540 },
  { month: "Aug", TargetValue: 820, ActualValue: 580 },
  { month: "Sep", TargetValue: 840, ActualValue: 600 },
  { month: "Oct", TargetValue: 820, ActualValue: 590 },
  { month: "Nov", TargetValue: 860, ActualValue: 620 },
  { month: "Dec", TargetValue: 900, ActualValue: 650 },
];

export default function StatisticsCard() {
  const [activeTab, setActiveTab] = useState<"Overview" | "Sales" | "Revenue">(
    "Overview"
  );

  // control styles
  const tabBase =
    "px-3 py-1 rounded-lg text-sm transition-colors select-none cursor-pointer";
  const activeTabCls = "bg-white text-gray-800 shadow-md font-medium"; // active button
  const inactiveTabCls = "text-gray-500";

  return (
    <div className="w-full md:w-[1100px] h-[400px] bg-white rounded-2xl shadow-md p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Statistics</h2>
          <p className="text-sm text-gray-500 mt-1">
            Target you&apos;ve set for each month
          </p>
        </div>

        <div className="flex items-center space-x-3">
          {/* Segmented control */}
          <div className="bg-gray-100 rounded-lg p-1 flex items-center">
            <button
              onClick={() => setActiveTab("Overview")}
              className={`${tabBase} ${
                activeTab === "Overview" ? activeTabCls : inactiveTabCls
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("Sales")}
              className={`${tabBase} ${
                activeTab === "Sales" ? activeTabCls : inactiveTabCls
              }`}
            >
              Sales
            </button>
            <button
              onClick={() => setActiveTab("Revenue")}
              className={`${tabBase} ${
                activeTab === "Revenue" ? activeTabCls : inactiveTabCls
              }`}
            >
              Revenue
            </button>
          </div>

          {/* Date range button */}
          <button className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-gray-300 text-sm text-gray-700 hover:bg-gray-50">
            {/* calendar icon (inline SVG) */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-500"
            >
              <path
                d="M7 11H9M7 15H17M7 7H17M7 7V5M17 7V5M3 9V20H21V9"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>05 Feb - 06 March</span>
          </button>
        </div>
      </div>

      {/* Chart area */}
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 32, left: 0, bottom: 0 }}
          >
            {/* Gradients for areas */}
            <defs>
              <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.18} />
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A5B4FC" stopOpacity={0.16} />
                <stop offset="95%" stopColor="#A5B4FC" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            {/* Grid: horizontal lines only */}
            <CartesianGrid
              horizontal={true}
              vertical={false}
              stroke="#F3F4F6"
            />

            {/* Y Axis with ticks 0..1000 (6 ticks) */}
            <YAxis
              domain={[0, 1000]}
              tickCount={6}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={48}
            />

            {/* X Axis months */}
            <XAxis
              dataKey="month"
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              padding={{ left: 10, right: 10 }}
              interval={0}
            />

            {/* Tooltip (custom styling left as default) */}
            <Tooltip
              contentStyle={{ borderRadius: 8, border: "none" }}
              itemStyle={{ color: "#111827" }}
            />

            {/* Areas */}
            <Area
              type="monotone"
              dataKey="TargetValue"
              stroke="#4F46E5"
              strokeWidth={3}
              fill="url(#colorTarget)"
              fillOpacity={1}
              dot={false}
              activeDot={{ r: 4 }}
              isAnimationActive={true}
            />

            <Area
              type="monotone"
              dataKey="ActualValue"
              stroke="#A5B4FC"
              strokeWidth={2}
              fill="url(#colorActual)"
              fillOpacity={1}
              dot={false}
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

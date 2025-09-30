"use client";

import React, { useState } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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

import type { StatsSummary } from "@/types";
import { useDashboardStore } from "@/store/useDashboardStore";

type Props = {
  stats?: StatsSummary | null;
  loading?: boolean;
  error?: string | null;
};

export default function StatisticsCard({ stats, loading, error }: Props) {
  const [activeTab, setActiveTab] = useState<"Overview" | "Sales" | "Revenue">(
    "Overview"
  );

  const dark = useDashboardStore((s) => s.dark);
  // control styles
  const tabBase =
    "px-3 py-1 rounded-lg h-11 text-sm transition-colors select-none cursor-pointer";
  const activeTabCls =
    "bg-white text-gray-800 dark:bg-[#1D2939] dark:text-[#FFFFFFE5] shadow-sm font-medium"; // active button
  const inactiveTabCls = "text-gray-500";

  if (loading) {
    return (
      <div className="w-[328px] md:w-[1100px] h-[200px] bg-white dark:bg-[#101828] rounded-2xl shadow-sm p-6 flex items-center justify-center">
        <LoadingSpinner label="Loading statistics…" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-[328px] md:w-[1100px] h-[200px] bg-white dark:bg-[#101828] rounded-2xl shadow-sm p-6 flex items-center justify-center">
        <div className="text-sm text-red-600">{error}</div>
      </div>
    );
  }

  const chartData = stats?.monthlySales
    ? stats.monthlySales.map((m) => ({
        month: m.month,
        TargetValue: m.sales + 200,
        ActualValue: m.sales,
      }))
    : data;

  // theme-aware colors for the chart
  const gridStroke = dark ? "#1D2939" : "#F3F4F6";
  const tickColor = dark ? "#98A2B3" : "#9CA3AF";
  const tooltipBg = dark ? "#111827" : "#ffffff";
  const tooltipText = dark ? "#FFFFFFE5" : "#111827";

  return (
    <div className="w-[328px] md:w-[1100px] min-h-[400px] bg-white dark:bg-[#FFFFFF08] dark:border dark:border-[#1D2939] rounded-2xl shadow-sm p-6 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start gap-y-4 md:gap-y-0 justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold leading-7 dark:text-[#FFFFFFE5] text-[#1D2939]">
            Statistics
          </h3>
          <p className="text-sm leading-5 text-[#667085] mt-1">
            Target you&apos;ve set for each month
          </p>
        </div>

        <div className="flex items-center space-x-3">
          {/* Segmented control */}
          <div className="bg-gray-50 dark:bg-[#101828] h-11 rounded-lg flex items-center">
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
          <button className="inline-flex items-center h-11 gap-2 px-3 py-1 rounded-[8px] border border-[#D0D5DD] dark:border-[#344054] dark:bg-[#1D2939] text-sm text-[#344054] dark:text-[#98A2B3] hover:bg-gray-50 hover:dark:bg-[#101828]">
            {/* calendar icon (inline SVG) */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66671 2.29169V3.75002M13.3334 2.29169V3.75002M3.33337 7.50002H16.6667M4.58337 17.0834H15.4167C16.1071 17.0834 16.6667 16.5237 16.6667 15.8334V5.00002C16.6667 4.30966 16.1071 3.75002 15.4167 3.75002H4.58337C3.89302 3.75002 3.33337 4.30966 3.33337 5.00002V15.8334C3.33337 16.5237 3.89302 17.0834 4.58337 17.0834Z"
                stroke="#344054"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="hidden md:block leading-5 text-sm font-medium text-[#344054] dark:text-[#98A2B3]">
              05 Feb - 06 March
            </span>
          </button>
        </div>
      </div>

      {/* Chart area */}
      <div className="w-full h-[300px] overflow-x-auto md:overflow-visible">
        <div className="min-w-[1100px] md:w-full ml-2 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
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
                stroke={gridStroke}
              />

              {/* Y Axis with ticks 0..1000 (6 ticks) */}
              <YAxis
                domain={[0, 1000]}
                tickCount={6}
                tick={{ fill: tickColor, fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                width={48}
              />

              {/* X Axis months */}
              <XAxis
                dataKey="month"
                tick={{ fill: tickColor, fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                padding={{ left: 10, right: 10 }}
                interval={0}
              />

              {/* Tooltip (custom styling left as default) */}
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "none",
                  backgroundColor: tooltipBg,
                  color: tooltipText,
                }}
                itemStyle={{ color: tooltipText }}
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
    </div>
  );
}

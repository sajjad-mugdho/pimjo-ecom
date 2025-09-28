"use client";

import React from "react";
import { useDashboardStore } from "@/store/useDashboardStore";

export default function DashboardHeader() {
  const collapsed = useDashboardStore((s) => s.collapsed);
  const toggle = useDashboardStore((s) => s.toggle);

  return (
    <header className="h-16 flex items-center px-4 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Toggle sidebar"
          onClick={toggle}
          className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200 bg-white hover:bg-gray-50"
        >
          {collapsed ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7L8 5z" fill="#111827" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6h12v2H6V6zm0 5h12v2H6v-2zm0 5h12v2H6v-2z"
                fill="#111827"
              />
            </svg>
          )}
        </button>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-gray-200" />
      </div>
    </header>
  );
}

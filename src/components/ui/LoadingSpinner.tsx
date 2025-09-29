"use client";
import React from "react";

type Props = {
  size?: "sm" | "md" | "lg";
  label?: string;
};

export default function LoadingSpinner({ size = "md", label }: Props) {
  const dims = size === "sm" ? 16 : size === "lg" ? 48 : 24;
  return (
    <div
      className="flex items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <svg
        className="animate-spin text-[#3758F9]"
        width={dims}
        height={dims}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          className="opacity-20"
        />
        <path
          d="M22 12a10 10 0 00-10-10"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      {label && <span className="ml-3 text-sm text-gray-500">{label}</span>}
    </div>
  );
}

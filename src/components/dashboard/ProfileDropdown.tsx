"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDashboardStore } from "@/store/useDashboardStore";

type Props = {
  onSignOut?: () => void;
  onClose?: () => void;
};

export default function ProfileDropdown({ onSignOut, onClose }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dark = useDashboardStore((s) => s.dark);
  return (
    <div
      className="bg-white dark:bg-[#101828] rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
      style={{ width: 280, padding: 16 }}
    >
      {/* User info */}
      <div className="flex px-3 flex-col mb-4">
        <div className="flex items-center gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-[#344054] dark:text-[#FFFFFFE5] leading-5">
              Sajjad Hossen
            </span>
            <span className="text-sm text-[#6B7280] dark:text-[#98A2B3] leading-5 font-normal ">
              sajjadmugdho@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div className="flex flex-col">
        <button
          type="button"
          className="flex items-center gap-3 px-3 py-2 rounded-[8px] hover:bg-[#F3F4F6] dark:hover:bg-[#1D2939] text-[#344054] dark:text-[#FFFFFFE5] text-sm leading-5"
          onClick={() => {
            if (onClose) onClose();
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.7746 19.1074V18.8455C17.7746 16.3602 15.7599 14.3455 13.2746 14.3455H10.7246C8.23933 14.3455 6.22461 16.3602 6.22461 18.8455V19.1074M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12ZM14.7669 9.26784C14.7669 10.7965 13.5277 12.0357 11.9991 12.0357C10.4705 12.0357 9.23128 10.7965 9.23128 9.26784C9.23128 7.7392 10.4705 6.5 11.9991 6.5C13.5277 6.5 14.7669 7.7392 14.7669 9.26784Z"
              stroke="#344054"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="font-medium">Edit profile</span>
        </button>

        <button
          type="button"
          className="flex items-center gap-3 px-3 py-2 mt-2 rounded-[8px] hover:bg-[#F3F4F6] dark:hover:bg-[#1D2939] text-[#344054] dark:text-[#FFFFFFE5] text-sm leading-5"
          onClick={() => {
            if (onClose) onClose();
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.77479 5.51906C6.06492 5.10922 5.15711 5.35238 4.74726 6.06225L3.23127 8.68803C2.82152 9.39774 3.06469 10.3052 3.7744 10.715C4.76361 11.2861 4.76362 12.7139 3.77441 13.285C3.06471 13.6948 2.82154 14.6023 3.23129 15.312L4.7473 17.9378C5.15714 18.6476 6.06495 18.8908 6.77481 18.481C7.76413 17.9098 9.00096 18.6237 9.00096 19.766C9.00096 20.5856 9.66536 21.25 10.4849 21.25H13.5173C14.3367 21.25 15.001 20.5856 15.001 19.7663C15.001 18.6243 16.2372 17.9104 17.2261 18.4813C17.9356 18.891 18.8429 18.6479 19.2525 17.9384L20.7689 15.3119C21.1787 14.6022 20.9355 13.6948 20.2258 13.285C19.2366 12.7139 19.2366 11.2861 20.2258 10.715C20.9355 10.3053 21.1787 9.39779 20.7689 8.6881L19.2526 6.06167C18.8429 5.35214 17.9357 5.10904 17.2261 5.51869C16.2372 6.08967 15.001 5.37573 15.001 4.23377C15.001 3.41437 14.3367 2.75 13.5173 2.75L10.485 2.75C9.66537 2.75 9.00096 3.41441 9.00096 4.23399C9.00096 5.37637 7.76412 6.09025 6.77479 5.51906Z"
              stroke="#667085"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.085 11.9999C15.085 13.7037 13.7038 15.0849 12 15.0849C10.2962 15.0849 8.91504 13.7037 8.91504 11.9999C8.91504 10.2961 10.2962 8.91493 12 8.91493C13.7038 8.91493 15.085 10.2961 15.085 11.9999Z"
              stroke="#667085"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="font-medium">Account settings</span>
        </button>

        <button
          type="button"
          className="flex items-center gap-3 px-3 py-2 mt-2 rounded-[8px] hover:bg-[#F3F4F6] dark:hover:bg-[#1D2939] text-[#344054] dark:text-[#FFFFFFE5] text-sm leading-5"
          onClick={() => {
            if (onClose) onClose();
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8.66992H12.0007"
              stroke="#667085"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.0001 11.2148V15.4392M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
              stroke="#667085"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="font-medium">Support</span>
        </button>

        <div className="my-2 border-t border-gray-200 dark:border-[#1D2939]" />

        <button
          type="button"
          className="flex items-center gap-3 px-3 py-2 rounded-[8px] hover:bg-[#F3F4F6] dark:hover:bg-[#1D2939] text-[#344054] dark:text-[#FFFFFFE5] text-sm leading-5"
          onClick={async () => {
            try {
              setLoading(true);
              const res = await fetch("/api/auth/signout", { method: "POST" });
              if (!res.ok) throw new Error("Failed to sign out");
              if (onSignOut) onSignOut();
              if (onClose) onClose();
              // redirect to sign-in
              router.push("/sign-in");
            } catch (err) {
              // swallow or show UI feedback later
              console.error(err);
            } finally {
              setLoading(false);
            }
          }}
          disabled={loading}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12L11.75 12M7.99928 8L4.00195 11.9999L7.99928 16M9.75 4.99609V4.25C9.75 3.42157 10.4216 2.75 11.25 2.75H17.25C18.0784 2.75 18.75 3.42157 18.75 4.25V19.75C18.75 20.5784 18.0784 21.25 17.25 21.25H11.25C10.4216 21.25 9.75 20.5784 9.75 19.75V19"
              stroke="#667085"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="font-medium">
            {loading ? "Signing out..." : "Sign out"}
          </span>
        </button>
      </div>
    </div>
  );
}

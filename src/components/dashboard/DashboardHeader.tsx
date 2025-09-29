"use client";

import React, { useState } from "react";
import { useDashboardStore } from "@/store/useDashboardStore";
import Image from "next/image";

import NotificationsPanel from "@/components/dashboard/NotificationsPanel";
import ProfileDropdown from "@/components/dashboard/ProfileDropdown";

export default function DashboardHeader() {
  const collapsed = useDashboardStore((s) => s.collapsed);
  const toggle = useDashboardStore((s) => s.toggle);

  const [dark, setDark] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="h-16 flex items-center px-6 py-4 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Toggle sidebar"
          onClick={toggle}
          className="inline-flex items-center justify-center h-11 w-11 rounded-[8px] border border-gray-200 bg-white hover:bg-gray-50"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#667085]"
          >
            <path
              d="M3.33334 5L16.6667 5M3.33334 15L16.6667 15M3.33334 10L10 10"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* SEARCH BAR (fixed size as requested) */}
        <div className="mx-4" style={{ width: 430 }}>
          <div
            className="h-[44px] flex items-center justify-between rounded-[8px] border"
            style={{
              borderWidth: 1,
              borderColor: "#E4E7EC",
              padding: "8px 10px",
            }}
          >
            {/* left icon + input */}
            <div className="flex items-center gap-3 flex-1">
              <div className="flex items-center" style={{ minWidth: 20 }}>
                {/* Left search icon (uses currentColor) */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#667085]"
                >
                  <path
                    d="M14.3822 14.3831L17.7073 17.7081M16.4583 9.37412C16.4583 13.2852 13.287 16.4558 9.37499 16.4558C5.46297 16.4558 2.29166 13.2852 2.29166 9.37412C2.29166 5.46304 5.46297 2.29248 9.37499 2.29248C13.287 2.29248 16.4583 5.46304 16.4583 9.37412Z"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <input
                type="text"
                placeholder="Search or type command..."
                className="w-full h-full text-[#667085] placeholder-[#667085] text-sm bg-transparent focus:outline-none"
              />
            </div>

            {/* right-side icon/button (uses currentColor) */}
            <button
              type="button"
              aria-label="Right action"
              className="ml-3 inline-flex items-center justify-center"
              style={{ color: "#667085" }}
            >
              {/* Provided right-side SVG (colors switched to currentColor where appropriate) */}
              <svg
                width="38"
                height="28"
                viewBox="0 0 38 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="1"
                  width="37"
                  height="26"
                  rx="7.5"
                  fill="white"
                />
                <rect
                  x="0.5"
                  y="1"
                  width="37"
                  height="26"
                  rx="7.5"
                  stroke="#E4E7EC"
                />
                <path
                  d="M11.277 18.696C10.9304 18.696 10.6122 18.6108 10.3224 18.4403C10.0327 18.267 9.80256 18.0369 9.6321 17.75C9.46165 17.4602 9.37642 17.142 9.37642 16.7955C9.37642 16.446 9.46165 16.1278 9.6321 15.8409C9.80256 15.5511 10.0327 15.3196 10.3224 15.1463C10.6122 14.973 10.9304 14.8864 11.277 14.8864H12.2145V13.3778H11.277C10.9304 13.3778 10.6122 13.2926 10.3224 13.1222C10.0327 12.9517 9.80256 12.723 9.6321 12.4361C9.46165 12.1463 9.37642 11.8267 9.37642 11.4773C9.37642 11.1278 9.46165 10.8097 9.6321 10.5227C9.80256 10.2358 10.0327 10.0071 10.3224 9.83665C10.6122 9.66335 10.9304 9.5767 11.277 9.5767C11.6264 9.5767 11.9446 9.66335 12.2315 9.83665C12.5213 10.0071 12.7514 10.2358 12.9219 10.5227C13.0952 10.8097 13.1818 11.1278 13.1818 11.4773V12.4062H14.6946V11.4773C14.6946 11.1278 14.7798 10.8097 14.9503 10.5227C15.1207 10.2358 15.3494 10.0071 15.6364 9.83665C15.9261 9.66335 16.2457 9.5767 16.5952 9.5767C16.9446 9.5767 17.2628 9.66335 17.5497 9.83665C17.8366 10.0071 18.0653 10.2358 18.2358 10.5227C18.4063 10.8097 18.4915 11.1278 18.4915 11.4773C18.4915 11.8267 18.4063 12.1463 18.2358 12.4361C18.0653 12.723 17.8366 12.9517 17.5497 13.1222C17.2628 13.2926 16.9446 13.3778 16.5952 13.3778H15.6619V14.8864H16.5952C16.9446 14.8864 17.2628 14.973 17.5497 15.1463C17.8366 15.3196 18.0653 15.5511 18.2358 15.8409C18.4063 16.1278 18.4915 16.446 18.4915 16.7955C18.4915 17.142 18.4063 17.4602 18.2358 17.75C18.0653 18.0369 17.8366 18.267 17.5497 18.4403C17.2628 18.6108 16.9446 18.696 16.5952 18.696C16.2457 18.696 15.9261 18.6108 15.6364 18.4403C15.3494 18.267 15.1207 18.0369 14.9503 17.75C14.7798 17.4602 14.6946 17.142 14.6946 16.7955V15.858H13.1818V16.7955C13.1818 17.142 13.0952 17.4602 12.9219 17.75C12.7514 18.0369 12.5213 18.267 12.2315 18.4403C11.9446 18.6108 11.6264 18.696 11.277 18.696ZM11.277 17.7244C11.4503 17.7244 11.6065 17.6832 11.7457 17.6009C11.8878 17.5185 12.0014 17.4062 12.0866 17.2642C12.1719 17.1222 12.2145 16.9659 12.2145 16.7955V15.858H11.277C11.1065 15.858 10.9503 15.9006 10.8082 15.9858C10.6662 16.0682 10.5526 16.1804 10.4673 16.3224C10.3849 16.4645 10.3438 16.6222 10.3438 16.7955C10.3438 16.9659 10.3849 17.1222 10.4673 17.2642C10.5526 17.4062 10.6662 17.5185 10.8082 17.6009C10.9503 17.6832 11.1065 17.7244 11.277 17.7244ZM11.277 12.4062H12.2145V11.4773C12.2145 11.304 12.1719 11.1477 12.0866 11.0085C12.0014 10.8665 11.8878 10.7543 11.7457 10.6719C11.6065 10.5895 11.4503 10.5483 11.277 10.5483C11.1065 10.5483 10.9503 10.5895 10.8082 10.6719C10.6662 10.7543 10.5526 10.8665 10.4673 11.0085C10.3849 11.1477 10.3438 11.304 10.3438 11.4773C10.3438 11.6506 10.3849 11.8082 10.4673 11.9503C10.5526 12.0895 10.6662 12.2003 10.8082 12.2827C10.9503 12.3651 11.1065 12.4062 11.277 12.4062ZM15.6619 12.4062H16.5952C16.7685 12.4062 16.9247 12.3651 17.0639 12.2827C17.2031 12.2003 17.3139 12.0895 17.3963 11.9503C17.4815 11.8082 17.5241 11.6506 17.5241 11.4773C17.5241 11.304 17.4815 11.1477 17.3963 11.0085C17.3139 10.8665 17.2031 10.7543 17.0639 10.6719C16.9247 10.5895 16.7685 10.5483 16.5952 10.5483C16.4219 10.5483 16.2642 10.5895 16.1222 10.6719C15.9801 10.7543 15.8679 10.8665 15.7855 11.0085C15.7031 11.1477 15.6619 11.304 15.6619 11.4773V12.4062ZM16.5952 17.7244C16.7685 17.7244 16.9247 17.6832 17.0639 17.6009C17.2031 17.5185 17.3139 17.4062 17.3963 17.2642C17.4815 17.1222 17.5241 16.9659 17.5241 16.7955C17.5241 16.6222 17.4815 16.4645 17.3963 16.3224C17.3139 16.1804 17.2031 16.0682 17.0639 15.9858C16.9247 15.9006 16.7685 15.858 16.5952 15.858H15.6619V16.7955C15.6619 16.9659 15.7031 17.1222 15.7855 17.2642C15.8679 17.4062 15.9801 17.5185 16.1222 17.6009C16.2642 17.6832 16.4219 17.7244 16.5952 17.7244ZM13.1818 14.8864H14.6946V13.3778H13.1818V14.8864Z"
                  fill="currentColor"
                />
                <path
                  d="M28.132 18.5L23.932 14.156L28.048 10.172H29.512L25.072 14.444V13.82L29.632 18.5H28.132ZM22.984 18.5V10.172H24.112V18.5H22.984Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-4">
        {/* Dark / Light toggle */}
        <button
          type="button"
          aria-pressed={dark}
          onClick={() => setDark((d) => !d)}
          className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50"
          title={dark ? "Switch to light mode" : "Switch to dark mode"}
          style={{ color: "#667085" }}
        >
          {dark ? (
            // Moon icon (dark mode)
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                stroke="#667085"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            // Sun icon (light mode)
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                stroke="#667085"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="#667085"
                strokeWidth={1.5}
              />
            </svg>
          )}
        </button>

        {/* Notifications dropdown (no UI library) */}
        <div className="relative">
          <div className="relative">
            <button
              type="button"
              aria-label="Notifications"
              onClick={() => setNotifOpen((v) => !v)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 relative"
              style={{ color: "#667085" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 17H9a3 3 0 006 0zM18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7"
                  stroke="#667085"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center h-2 w-2 rounded-full bg-red-400 text-white text-[10px]"></span>
            </button>

            {notifOpen && (
              <div
                className="absolute right-0 mt-2 z-50"
                style={{ minWidth: 0 }}
              >
                <NotificationsPanel onClose={() => setNotifOpen(false)} />
              </div>
            )}
          </div>
        </div>

        {/* User avatar + name + dropdown (no UI library) */}
        <div className="relative">
          <div className="relative inline-block">
            <button
              onClick={() => setProfileOpen((v) => !v)}
              className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-50 cursor-pointer"
              aria-haspopup="true"
              aria-expanded={profileOpen}
            >
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-[#667085]">
                <Image
                  src="/avatar-1.png"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col min-w-20 leading-none">
                <span className="text-sm font-medium text-[#344054] leading-5">
                  Sajjad Hossen
                </span>
              </div>
              <div>
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.3125 9.21875L9 13.9062L13.6875 9.21875"
                    stroke="#667085"
                    strokeWidth={1.125}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 z-50">
                <ProfileDropdown
                  onClose={() => setProfileOpen(false)}
                  onSignOut={() => {
                    /* placeholder */
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

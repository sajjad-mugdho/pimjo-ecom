"use client";

import React, { useState, useEffect, useRef } from "react";
import { useDashboardStore } from "@/store/useDashboardStore";
import Image from "next/image";

import NotificationsPanel from "@/components/dashboard/NotificationsPanel";
import ProfileDropdown from "@/components/dashboard/ProfileDropdown";

export default function DashboardHeader() {
  const toggle = useDashboardStore((s) => s.toggle);
  const openMobile = useDashboardStore((s) => s.openMobile);
  const closeMobile = useDashboardStore((s) => s.closeMobile);
  const mobileOpen = useDashboardStore((s) => s.mobileOpen);

  const [dark, setDark] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuRef]);

  return (
    <header className="h-16 flex items-center justify-between px-2 md:px-6 py-4 border-b border-gray-200 bg-white relative z-50">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={mobileOpen ? "Close sidebar" : "Toggle sidebar"}
          onClick={() => {
            // On small screens, toggle mobile drawer open/close
            if (typeof window !== "undefined") {
              const mq = window.matchMedia("(max-width: 767px)");
              if (mq.matches) {
                if (mobileOpen) {
                  closeMobile();
                  return;
                }
                openMobile();
                return;
              }
            }
            toggle();
          }}
          className={`inline-flex items-center justify-center h-11 w-11 rounded-[8px] border border-gray-200 bg-white hover:bg-gray-50`}
        >
          {mobileOpen ? (
            // X icon when mobile sidebar is open
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#667085]"
            >
              <path
                d="M5 5L15 15M5 15L15 5"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            // Hamburger icon when closed
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
          )}
        </button>

        {/* SEARCH BAR (fixed size as requested) */}
        <div className="hidden md:block mx-4" style={{ width: 430 }}>
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
                className="hidden md:blcok w-full h-full text-[#667085] placeholder-[#667085] text-sm bg-transparent focus:outline-none"
              />
            </div>

            {/* right-side icon/button (uses currentColor) */}
            <button
              type="button"
              aria-label="Right action"
              className="ml-3 hidden md:inline-flex items-center justify-center"
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
                  d="M11.277 18.696C10.9304 18.696 10.6122 18.6108 10.3224 18.4403C10.0327 18.267 9.80256 18.0369 9.6321 17.75C9.46165 17.4602 9.37642 17.142 9.37642 16.7955C9.37642 16.446 9.46165 16.1278 9.6321 15.8409C9.80256 15.5511 10.0327 15.3196 10.3224 15.1463C10.6122 14.973 10.9304 14.8864 11.277 14.8864H12.2145V13.3778H11.277C10.9304 13.3778 10.6122 13.2926 10.3224 13.1222C10.0327 12.9517 9.80256 12.723 9.6321 12.4361C9.46165 12.1463 9.37642 11.8267 9.37642 11.4773C9.37642 11.1278 9.46165 10.8097 9.6321 10.5227C9.80256 10.2358 10.0327 10.0071 10.3224 9.83665C10.6122 9.66335 10.9304 9.5767 11.277 9.5767C11.6264 9.5767 11.9446 9.66335 12.2315 9.83665C12.5213 10.0071 12.7514 10.2358 12.9219 10.5227C13.0952 10.8097 13.1818 11.1278 13.1818 11.4773V12.4062H14.6946V11.4773C14.6946 11.1278 14.7798 10.8097 14.9503 10.5227C15.1207 10.2358 15.3494 10.0071 15.6364 9.83665C15.9261 9.66335 16.2457 9.5767 16.5952 9.5767C16.9446 9.5767 17.2628 9.66335 17.5497 9.83665C17.8366 10.0071 18.0653 10.2358 18.2358 10.5227C18.4063 10.8097 18.4915 11.1278 18.4915 11.4773C18.4915 11.8267 18.4063 12.1463 18.2358 12.4361C18.0653 12.723 17.8366 12.9517 17.5497 13.1222C17.2628 13.2926 16.9446 13.3778 16.5952 13.3778H15.6619V14.8864H16.5952C16.9446 14.8864 17.2628 14.973 17.5497 15.1463C17.8366 15.3196 18.0653 15.5511 18.2358 15.8409C18.4063 16.1278 18.4915 16.446 18.4915 16.7955V15.858H13.1818V16.7955C13.1818 17.142 13.0952 17.4602 12.9219 17.75C12.7514 18.0369 12.5213 18.267 12.2315 18.4403C11.9446 18.6108 11.6264 18.696 11.277 18.696ZM11.277 17.7244C11.4503 17.7244 11.6065 17.6832 11.7457 17.6009C11.8878 17.5185 12.0014 17.4062 12.0866 17.2642C12.1719 17.1222 12.2145 16.9659 12.2145 16.7955V15.858H11.277C11.1065 15.858 10.9503 15.9006 10.8082 15.9858C10.6662 16.0682 10.5526 16.1804 10.4673 16.3224C10.3849 16.4645 10.3438 16.6222 10.3438 16.7955C10.3438 16.9659 10.3849 17.1222 10.4673 17.2642C10.5526 17.4062 10.6662 17.5185 10.8082 17.6009C10.9503 17.6832 11.1065 17.7244 11.277 17.7244ZM11.277 12.4062H12.2145V11.4773C12.2145 11.304 12.1719 11.1477 12.0866 11.0085C12.0014 10.8665 11.8878 10.7543 11.7457 10.6719C11.6065 10.5895 11.4503 10.5483 11.277 10.5483C11.1065 10.5483 10.9503 10.5895 10.8082 10.6719C10.6662 10.7543 10.5526 10.8665 10.4673 11.0085C10.3849 11.1477 10.3438 11.304 10.3438 11.4773C10.3438 11.6506 10.3849 11.8082 10.4673 11.9503C10.5526 12.0895 10.6662 12.2003 10.8082 12.2827C10.9503 12.3651 11.1065 12.4062 11.277 12.4062ZM15.6619 12.4062H16.5952C16.7685 12.4062 16.9247 12.3651 17.0639 12.2827C17.2031 12.2003 17.3139 12.0895 17.3963 11.9503C17.4815 11.8082 17.5241 11.6506 17.5241 11.4773C17.5241 11.304 17.4815 11.1477 17.3963 11.0085C17.3139 10.8665 17.2031 10.7543 17.0639 10.6719C16.9247 10.5895 16.7685 10.5483 16.5952 10.5483C16.4219 10.5483 16.2642 10.5895 16.1222 10.6719C15.9801 10.7543 15.8679 10.8665 15.7855 11.0085C15.7031 11.1477 15.6619 11.304 15.6619 11.4773V12.4062ZM16.5952 17.7244C16.7685 17.7244 16.9247 17.6832 17.0639 17.6009C17.2031 17.5185 17.3139 17.4062 17.3963 17.2642C17.4815 17.1222 17.5241 16.9659 17.5241 16.7955C17.5241 16.6222 17.4815 16.4645 17.3963 16.3224C17.3139 16.1804 17.2031 16.0682 17.0639 15.9858C16.9247 15.9006 16.7685 15.858 16.5952 15.858H15.6619V16.7955C15.6619 16.9659 15.7031 17.1222 15.7855 17.2642C15.8679 17.4062 15.9801 17.5185 16.1222 17.6009C16.2642 17.6832 16.4219 17.7244 16.5952 17.7244ZM13.1818 14.8864H14.6946V13.3778H13.1818V14.8864Z"
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

      <div className="block md:hidden">
        <svg
          width="104"
          height="24"
          viewBox="0 0 104 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_8_28586)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.50021 18.4322C7.51479 18.8017 8.60987 19.0031 9.75152 19.0031C14.9991 19.0031 19.2531 14.7491 19.2531 9.5016C19.2531 4.254 14.9991 0 9.75152 0C4.50399 0 0.25 4.25406 0.25 9.5016V23.069C0.25 23.9254 1.3104 24.3258 1.87643 23.683C3.41769 21.9328 4.95896 20.1825 6.50021 18.4322ZM13.9046 9.5016C13.9046 11.7952 12.0452 13.6546 9.75152 13.6546C7.4579 13.6546 5.59852 11.7952 5.59852 9.5016C5.59852 7.2079 7.4579 5.34853 9.75152 5.34853C12.0452 5.34853 13.9046 7.2079 13.9046 9.5016Z"
              fill="#3758F9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.2756 2.12821H33.6625C34.9954 2.12821 36.1801 2.37369 37.211 2.87099C38.2612 3.35203 39.0845 4.06711 39.6748 5.01488C40.2682 5.95025 40.5592 7.0841 40.5592 8.40555C40.5592 9.7119 40.2587 10.8457 39.6484 11.7974C39.0583 12.7269 38.2447 13.4411 37.213 13.9392C36.1816 14.4371 34.9963 14.6829 33.6625 14.6829H30.2121V21.7788H26.2756V2.12821ZM36.2643 6.9641C35.7435 6.06145 34.7206 5.65178 33.7141 5.65178H30.2121V11.1593H33.7141C35.3488 11.1593 36.6227 10.0557 36.6227 8.40555C36.6227 7.83442 36.5005 7.35802 36.2661 6.96726L36.2643 6.9641Z"
              fill="#232939"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M43.0073 21.7788V2.12821H46.9438V21.7788H43.0073Z"
              fill="#232939"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M53.8901 2.12821L60.1707 10.66L66.3163 2.12821H69.9937V21.7788H66.0315V9.1389L60.417 16.6181H59.7891L54.1506 8.91615V21.7788H50.2141V2.12821H53.8901Z"
              fill="#232939"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M103.202 11.9536C103.202 17.6234 98.6057 22.2197 92.9357 22.2197C87.2657 22.2197 82.6697 17.6234 82.6697 11.9536C82.6697 6.28379 87.2657 1.6875 92.9357 1.6875C98.6057 1.6875 103.202 6.28379 103.202 11.9536ZM92.9357 18.2876C96.4337 18.2876 99.2694 15.4517 99.2694 11.9536C99.2694 8.45543 96.4337 5.61962 92.9357 5.61962C89.4377 5.61962 86.6019 8.45543 86.6019 11.9536C86.6019 15.4517 89.4377 18.2876 92.9357 18.2876Z"
              fill="#232939"
            />
            <path
              d="M73.7643 18.1262C74.5484 18.1262 75.1441 17.9069 75.577 17.4893C75.6355 17.4328 75.6902 17.374 75.7412 17.3126C76.0847 16.9011 76.2602 16.3796 76.2602 15.7336V2.12821H80.2225V15.6046C80.2225 16.8229 79.957 17.901 79.42 18.8323C78.9002 19.7637 78.1472 20.4886 77.1677 21.0055C76.2017 21.5239 75.065 21.7788 73.7643 21.7788H72.4412V18.1262H73.7643J"
              fill="#232939"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_28586">
              <rect
                width="103.5"
                height="24"
                fill="white"
                transform="translate(0.25)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Mobile menu button (three dots) */}
      <div className="block md:hidden">
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12.0051L6 11.9951M18 12.0051V11.9951M12 12.0051V11.9951"
              stroke="#344054"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Mobile menu dropdown - full width header */}
        {mobileMenuOpen && (
          <div
            className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-md z-50 px-4 py-3"
            ref={mobileMenuRef}
          >
            <div className="flex items-center justify-between">
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
                      className="absolute -right-58 md:right-0 mt-2 z-50"
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
          </div>
        )}
      </div>

      {/* Desktop header right side */}
      <div className="hidden ml-auto md:flex items-center gap-4">
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

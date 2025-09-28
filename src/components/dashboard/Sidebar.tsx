"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDashboardStore } from "@/store/useDashboardStore";

export default function Sidebar() {
  const collapsed = useDashboardStore((s) => s.collapsed);

  const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Products", href: "/dashboard/product" },
  ];

  const pathnameRaw = usePathname();
  // normalize pathname: remove query and trailing slash
  const pathname = (pathnameRaw || "").split("?")[0].replace(/\/$/, "") || "/";

  // determine the best (most specific) match so parent doesn't stay active when a child route is active
  const matches = navItems.filter(
    (item) => pathname === item.href || pathname.startsWith(item.href + "/")
  );
  let bestMatchHref: string | null = null;
  if (matches.length > 0) {
    bestMatchHref = matches.reduce((best, cur) =>
      cur.href.length > best.href.length ? cur : best
    ).href;
  }

  return (
    <aside
      className={`flex flex-col border-r border-gray-200  bg-white transition-all duration-200 ease-in-out overflow-hidden ${
        collapsed ? "w-20 py-8 px-2" : "w-[290px] py-8 px-5"
      }`}
      aria-label="Sidebar"
    >
      <div className="h-16 flex items-center justify-start px-4">
        <Link href="/dashboard" className="flex items-start gap-2">
          <div className="">
            <svg
              width="23"
              height="28"
              viewBox="0 0 23 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.29192 21.5043C8.47559 21.9353 9.75319 22.1703 11.0851 22.1703C17.2073 22.1703 22.1703 17.2073 22.1703 11.0852C22.1703 4.963 17.2073 0 11.0851 0C4.96299 0 0 4.96307 0 11.0852V26.9139C0 27.913 1.23714 28.3801 1.8975 27.6302C3.69564 25.5882 5.49378 23.5462 7.29192 21.5043ZM15.9303 11.0852C15.9303 13.7611 13.7611 15.9304 11.0851 15.9304C8.40921 15.9304 6.23994 13.7611 6.23994 11.0852C6.23994 8.40922 8.40921 6.23995 11.0851 6.23995C13.7611 6.23995 15.9303 8.40922 15.9303 11.0852Z"
                fill="#3758F9"
              />
            </svg>
          </div>
          {!collapsed && (
            <span className="text-lg font-semibold">
              <svg
                width="91"
                height="25"
                viewBox="0 0 91 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.363201 1.48291H8.98125C10.5363 1.48291 11.9184 1.76931 13.1211 2.34948C14.3464 2.9107 15.3069 3.74496 15.9956 4.85069C16.6879 5.94196 17.0273 7.26479 17.0273 8.80648C17.0273 10.3306 16.6768 11.6533 15.9647 12.7637C15.2764 13.8481 14.3272 14.6813 13.1235 15.2624C11.9201 15.8433 10.5373 16.13 8.98125 16.13H4.95573V24.4086H0.363201V1.48291ZM12.0166 7.12479C11.409 6.07169 10.2157 5.59375 9.04145 5.59375H4.95573V12.0192H9.04145C10.9485 12.0192 12.4348 10.7317 12.4348 8.80648C12.4348 8.14016 12.2923 7.58435 12.0187 7.12847L12.0166 7.12479Z"
                  fill="#232939"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.8836 24.4086V1.48291H24.4761V24.4086H19.8836Z"
                  fill="#232939"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.5801 1.48291L39.9075 11.4366L47.0773 1.48291H51.3676V24.4086H46.745V9.66205L40.1949 18.3878H39.4623L32.884 9.40218V24.4086H28.2914V1.48291H32.5801Z"
                  fill="#232939"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M90.1104 12.9458C90.1104 19.5607 84.7484 24.923 78.1334 24.923C71.5184 24.923 66.1564 19.5607 66.1564 12.9458C66.1564 6.33108 71.5184 0.96875 78.1334 0.96875C84.7484 0.96875 90.1104 6.33108 90.1104 12.9458ZM78.1334 20.3355C82.2144 20.3355 85.5227 17.027 85.5227 12.9458C85.5227 8.86466 82.2144 5.55623 78.1334 5.55623C74.0524 5.55623 70.744 8.86466 70.744 12.9458C70.744 17.027 74.0524 20.3355 78.1334 20.3355Z"
                  fill="#232939"
                />
                <path
                  d="M55.7667 20.1473C56.6814 20.1473 57.3764 19.8914 57.8815 19.4042C57.9497 19.3383 58.0136 19.2696 58.0731 19.1981C58.4739 18.718 58.6786 18.1096 58.6786 17.3559V1.48291H63.3013V17.2054C63.3013 18.6267 62.9915 19.8845 62.365 20.971C61.7586 22.0576 60.8801 22.9033 59.7374 23.5064C58.6104 24.1112 57.2841 24.4086 55.7667 24.4086H54.223V20.1473H55.7667Z"
                  fill="#232939"
                />
              </svg>
            </span>
          )}
        </Link>
      </div>

      <nav className="flex-1 px-2 py-4">
        <p className="text-xs font-normal leading-5 text-[#6B7280] mb-6 mx-2">
          MENU
        </p>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const active = bestMatchHref
              ? item.href === bestMatchHref
              : pathname === item.href;
            const colorClass = active ? "text-[#3758F9]" : "text-[#344054]";
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 w-full px-3 py-2 rounded-md transition-colors hover:bg-gray-100 ${
                    active ? "bg-[#ECF3FF] font-medium" : ""
                  }`}
                >
                  <span
                    className={`w-6 flex items-center justify-center ${colorClass}`}
                  >
                    {item.label === "Dashboard" ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 5.5C4 4.67157 4.67157 4 5.5 4H9C9.82843 4 10.5 4.67157 10.5 5.5V8.99998C10.5 9.82841 9.82843 10.5 9 10.5H5.5C4.67157 10.5 4 9.82841 4 8.99998V5.5Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4 15C4 14.1716 4.67157 13.5 5.5 13.5H9C9.82843 13.5 10.5 14.1716 10.5 15V18.5C10.5 19.3284 9.82843 20 9 20H5.5C4.67157 20 4 19.3284 4 18.5V15Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5 5.5C13.5 4.67157 14.1716 4 15 4H18.5C19.3284 4 20 4.67157 20 5.5V8.99998C20 9.82841 19.3284 10.5 18.5 10.5H15C14.1716 10.5 13.5 9.82841 13.5 8.99998V5.5Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5 15C13.5 14.1716 14.1716 13.5 15 13.5H18.5C19.3284 13.5 20 14.1716 20 15V18.5C20 19.3284 19.3284 20 18.5 20H15C14.1716 20 13.5 19.3284 13.5 18.5V15Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 21.072V11.0288M12 11.0288C11.7703 11.0288 11.5406 10.976 11.3296 10.8705M12 11.0288C12.23 11.0289 12.46 10.9761 12.6712 10.8705M12.6712 10.8705C12.249 11.0816 11.7519 11.0816 11.3296 10.8705M12.6712 10.8705L20.2212 7.09562M11.3296 10.8705L3.7797 7.09562M20.2212 7.09562C20.078 6.87199 19.8754 6.68611 19.6287 6.56277L12.6712 3.08413C12.249 2.873 11.7519 2.873 11.3296 3.08413L4.37216 6.56277C4.12546 6.68611 3.92287 6.87199 3.7797 7.09562M20.2212 7.09562C20.3729 7.33264 20.4579 7.61207 20.4579 7.90441V16.0934C20.4579 16.6615 20.1369 17.1809 19.6287 17.435L12.6712 20.9137C12.249 21.1248 11.7519 21.1248 11.3296 20.9137L4.37216 17.435C3.86398 17.1809 3.54297 16.6615 3.54297 16.0934V7.90441C3.54297 7.61207 3.62796 7.33264 3.7797 7.09562"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  {!collapsed && (
                    <span className={`${colorClass}`}>{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

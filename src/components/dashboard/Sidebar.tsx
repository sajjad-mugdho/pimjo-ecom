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

  const pathname = usePathname();

  return (
    <aside
      className={`flex flex-col border-r border-gray-200 bg-white transition-all duration-200 ease-in-out overflow-hidden ${
        collapsed ? "w-20" : "w-[290px]"
      }`}
      aria-label="Sidebar"
    >
      <div className="h-16 flex items-center justify-center px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">
            P
          </div>
          {!collapsed && <span className="text-lg font-semibold">Pimjo</span>}
        </Link>
      </div>

      <nav className="flex-1 px-2 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname?.startsWith(item.href + "/");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 w-full px-3 py-2 rounded-md transition-colors hover:bg-gray-100 ${
                    active ? "bg-gray-100 font-medium" : ""
                  }`}
                >
                  <span className="w-6 flex items-center justify-center text-gray-600">
                    {item.label === "Dashboard" ? (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 13h8V3H3v10zM3 21h8v-6H3v6zM13 21h8V11h-8v10zM13 3v6h8V3h-8z"
                          fill="#6B7280"
                        />
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
                          d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                          fill="#6B7280"
                        />
                      </svg>
                    )}
                  </span>
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-3 py-4">
        {!collapsed && <div className="text-xs text-gray-500">© Pimjo</div>}
      </div>
    </aside>
  );
}

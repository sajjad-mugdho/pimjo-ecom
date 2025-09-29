import React, { useState } from "react";
import Link from "next/link";
import { useDashboardStore } from "@/store/useDashboardStore";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const collapsed = useDashboardStore((s) => s.collapsed);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      <div className="flex items-center">
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <Link href="/dashboard" className="text-lg font-semibold">
          Dashboard
        </Link>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={toggleMenu}>
          <div className="absolute left-0 top-0 w-4/5 h-full bg-white shadow-lg z-50">
            <div className="flex flex-col p-4">
              <Link href="/dashboard" className="py-2" onClick={toggleMenu}>
                Dashboard
              </Link>
              <Link href="/dashboard/product" className="py-2" onClick={toggleMenu}>
                Products
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
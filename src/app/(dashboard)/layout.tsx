import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export const revalidate = 0;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-white dark:bg-[#101828] text-gray-800">
      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen bg-gray-50 dark:bg-[#101828]">
        <DashboardHeader />
        <main className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-[#101828]">
          {children}
        </main>
      </div>
    </div>
  );
}

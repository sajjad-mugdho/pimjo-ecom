"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  if (pathname?.startsWith("/dashboard")) return null;
  return <Footer />;
}

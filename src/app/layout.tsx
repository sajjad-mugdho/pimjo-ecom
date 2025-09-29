import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "../components/ui/NavbarWrapper";
import FooterWrapper from "../components/ui/FooterWrapper";
import { Toaster } from "react-hot-toast";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pimjo E-commerce",
  description: "E-commerce platform built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dm_sans.variable}>
      <body className={`antialiased bg-white dark:bg-black`}>
        <NavbarWrapper />
        {children}
        <Toaster />
        <FooterWrapper />
      </body>
    </html>
  );
}

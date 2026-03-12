"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}

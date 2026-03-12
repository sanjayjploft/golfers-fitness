"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideFooterRoutes = [
    "/get-started",
    "/choose-your-plan",
    "/login",
    "/forgot-password",
    "/verification",
    "/password-changed",
  ];

  const hideFooter = hideFooterRoutes.some((route) =>
    pathname.startsWith(route),
  );

  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />

        {children}

        {!hideFooter && <Footer />}
      </body>
    </html>
  );
}

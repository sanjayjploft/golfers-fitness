"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import UserHeader from "@/components/UserHeader";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <body>
      <div className="main-wrapper">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex-grow-1">
          <UserHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

          <main className="p-4">{children}</main>
        </div>
      </div>
    </body>
  );
}

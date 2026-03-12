"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [openModal, setOpenModal] = useState(false);
  const pathname = usePathname();

  // auto close when width < 1200
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setSidebarOpen]);

  const menu = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: "/images/sidebar-icon-01.svg",
      activeIcon: "/images/sidebar-icon-01-active.svg",
    },
    {
      name: "Training",
      link: "/training",
      icon: "/images/sidebar-icon-02.svg",
      activeIcon: "/images/sidebar-icon-02-active.svg",
    },
    {
      name: "Library",
      link: "/drill-library",
      icon: "/images/sidebar-icon-03.svg",
      activeIcon: "/images/sidebar-icon-03-active.svg",
    },
    {
      name: "Community",
      link: "/community",
      icon: "/images/sidebar-icon-04.svg",
      activeIcon: "/images/sidebar-icon-04-active.svg",
    },
    {
      name: "Profile",
      link: "/user-profile",
      icon: "/images/sidebar-icon-05.svg",
      activeIcon: "/images/sidebar-icon-05-active.svg",
    },
    {
      name: "Settings",
      link: "/settings",
      icon: "/images/sidebar-icon-06.svg",
      activeIcon: "/images/sidebar-icon-06-active.svg",
    },
  ];

  return (
    <>
      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-logo">
          <Link href="/">
            <img src="/images/user-logo.svg" />
          </Link>
        </div>

        <ul className="sidebar-menu">
          {menu.map((item, index) => {
            const isActive = pathname === item.link;

            return (
              <li key={index} className="sidebar-item">
                <Link
                  href={item.link}
                  className={`sidebar-link ${isActive ? "active" : ""}`}
                  onClick={() => {
                    if (window.innerWidth < 1200) {
                      setSidebarOpen(false);
                    }
                  }}>
                  <img src={isActive ? item.activeIcon : item.icon} alt="" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}

          <li className="sidebar-item">
            <Link
              href="#"
              className="sidebar-link"
              onClick={(e) => {
                e.preventDefault();
                setOpenModal(true);
              }}>
              <img src="/images/logout-icon.svg" width={20} />
              <span>Log Out</span>
            </Link>
          </li>
        </ul>
      </div>

      {openModal && (
        <div className="logout-md-overlay">
          <div className="logout-md-box">
            <img src="/images/logout-icon-bg.svg" className="logout-md-img" />

            <h3 className="logout-md-title">Log Out?</h3>

            <p className="logout-md-desc">
              Are you sure you want to log out? You will need to sign in again
              to access your account.
            </p>

            <Link href="/" className="logout-md-btn logout-md-confirm">
              Log Out
            </Link>

            <button
              className="logout-md-btn logout-md-cancel"
              onClick={() => setOpenModal(false)}>
              Stay Logged In
            </button>
          </div>
        </div>
      )}
    </>
  );
}

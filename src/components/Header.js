"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`main-header ${menuOpen ? "menu-open" : ""}`}>
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container-fluid">
          <div className="row align-items-center w-100 flex-fill">
            {/* Logo */}
            <div className="col-6 col-lg-1">
              <div className="header-logo">
                <Link href="/">
                  <img src="/images/logo-main.svg" alt="logo" />
                </Link>
              </div>
            </div>

            {/* Toggle */}
            <div className="col-6 d-lg-none text-end">
              <button
                className={`navbar-toggler custom-toggler ${menuOpen ? "open" : ""}`}
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>

            {/* Menu */}
            <div className="col-lg-11">
              <div
                className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
                {/* Menu */}
                <ul className="navbar-nav mx-auto header-menu">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${pathname === "/how-it-works" ? "active" : ""}`}
                      href="/how-it-works"
                      onClick={handleMenuClick}>
                      How It Works
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={`nav-link ${pathname === "" ? "active" : ""}`}
                      href="#viewcoaches"
                      onClick={handleMenuClick}>
                      Coaches
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={`nav-link ${pathname === "" ? "active" : ""}`}
                      href=""
                      onClick={handleMenuClick}>
                      Results
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={`nav-link ${pathname === "/download-app" ? "active" : ""}`}
                      href="/download-app"
                      onClick={handleMenuClick}>
                      Download App
                    </Link>
                  </li>
                </ul>

                {/* Buttons */}
                <div className="header-buttons d-lg-flex">
                  <Link
                    href="/login"
                    className={`btn-text-header ${pathname === "/login" ? "active" : ""}`}
                    onClick={handleMenuClick}>
                    Login
                  </Link>

                  <Link
                    href="/get-started"
                    className="btn-bg-header"
                    onClick={handleMenuClick}>
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

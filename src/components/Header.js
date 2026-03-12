"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
                data-bs-toggle="collapse"
                data-bs-target="#mainMenu"
                onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>

            {/* Menu */}
            <div className="col-lg-11">
              <div className="collapse navbar-collapse" id="mainMenu">
                {/* Menu */}
                <ul className="navbar-nav mx-auto header-menu">
                  <li className="nav-item">
                    <Link className="nav-link" href="/how-it-works">
                      How It Works
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      Coaches
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      Results
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="/download-app">
                      Download App
                    </Link>
                  </li>
                </ul>

                {/* Buttons */}
                <div className="header-buttons d-lg-flex">
                  <Link href="/login" className="btn-text-header">
                    Login
                  </Link>

                  <Link href="/get-started" className="btn-bg-header">
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

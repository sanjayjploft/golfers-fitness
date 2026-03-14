"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="elite-footer">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-4">
            <div className="footer-brand">
              <img src="/images/logo-main.svg" alt="logo" />
            </div>

            <p className="footer-text">
              Pushing the boundaries of human performance through data-driven
              training and elite coaching.
            </p>
          </div>

          {/* Company */}
          <div className="col-lg-4">
            <h6 className="footer-title">COMPANY</h6>
            <ul className="footer-links">
              <li>
                <Link href="/about-us">About Us</Link>
              </li>

              <li>
                <Link href="/contact-us">Contact</Link>
              </li>
              <li>
                <Link href="/how-it-works">How It Works</Link>
              </li>
              <li>
                <Link href="/download-app">Download App</Link>
              </li>
              <li>
                <Link href="#">Results</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4">
            <h6 className="footer-title">STAY UPDATED</h6>

            <div className="subscribe-box">
              <input type="email" placeholder="Email Address" />
              <button>
                <img src="/images/send-icon.svg" alt="arrow" />
              </button>
            </div>

            <div className="social-icons">
              <Link href="">
                {" "}
                <img src="/images/fb.svg" />
              </Link>
              <Link href="">
                <img src="/images/insta-icon.svg" />
              </Link>
              <Link href="">
                <img src="/images/youtube-icon.svg" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© 2026 ELITE FIT CO. ALL RIGHTS RESERVED.</p>

          <div className="footer-policy">
            <Link href="/privacy-policy">PRIVACY POLICY</Link>
            <Link href="/terms-conditions">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

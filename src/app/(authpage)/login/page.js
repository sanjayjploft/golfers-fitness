"use client";

import Link from "next/link";
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="signup-wrapper signup-bg">
      <div className="overlay"></div>

      <div className="signup-card">
        <h2 className="login-title">Welcome</h2>
        <p className="login-subtitle">
          Sign in to access your movement tracking dashboard.
        </p>

        <Form>
          <Form.Group className="input-icon">
            <Form.Label>Email Address</Form.Label>

            <div className="icon-input">
              <img src="/images/email-icon.svg" className="input-left-icon" />
              <Form.Control type="email" placeholder="john.doe@company.com" />
            </div>
          </Form.Group>

          <Form.Group className="input-icon">
            <Form.Label>Password</Form.Label>

            <div className="icon-input">
              <img
                src="/images/lock-input-icon.svg"
                className="input-left-icon"
              />
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="******"
              />

              <img
                src={
                  showPassword
                    ? "/images/eye-open.svg"
                    : "/images/eye-close.svg"
                }
                className="input-right-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </Form.Group>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <Form.Check type="checkbox" label="Remember me" className="" />
            <Link href={"/forgot-password"} className="forgot-pass">
              Forgot password?
            </Link>
          </div>

          <Link href={"/dashboard"} className="get-started-btn w-100 mt-3">
            SIGN IN →
          </Link>

          <div className="divider">
            <span>OR CONTINUE WITH</span>
          </div>

          <div className="social-login">
            <Link href={""} className="social-btn">
              <img src="/images/google-icon.svg" />
              Continue with Google
            </Link>

            <Link href={""} className="social-btn">
              <img src="/images/apple-logo.svg" />
              Continue with Apple
            </Link>
          </div>

          <p className="signin-text">
            Don't have an account?{" "}
            <Link href="/get-started">Create an account</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}

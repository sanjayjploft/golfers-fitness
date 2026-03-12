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
        <h2 className="login-title">Forgot Password</h2>
        <p className="login-subtitle">
          Enter the email address associated with your account and we'll send
          you a link to reset your password.
        </p>

        <Form>
          <Form.Group className="input-icon">
            <Form.Label>Email Address</Form.Label>

            <div className="icon-input">
              <img src="/images/email-icon.svg" className="input-left-icon" />
              <Form.Control type="email" placeholder="john.doe@company.com" />
            </div>
          </Form.Group>

          <Link href={"/verification"} className="get-started-btn w-100 mt-3">
            Send Code
          </Link>

          <Link href={"/login"} className="back-login w-100 mt-5">
            <img src="/images/back-icon.svg" /> Back to Login
          </Link>
        </Form>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const rules = {
    length: password.length >= 8,
    number: /\d/.test(password),
    special: /[!@#$%^&*]/.test(password),
  };

  const strengthScore = Object.values(rules).filter(Boolean).length;

  const strengthLabel = ["Weak", "Weak", "Medium", "Strong"][strengthScore];

  return (
    <div className="signup-wrapper signup-bg">
      <div className="overlay"></div>

      <div className="signup-card">
        <h2 className="login-title">Create New Password</h2>

        <p className="login-subtitle">
          Your new password must be unique from those previously used.
        </p>

        <Form>
          {/* PASSWORD */}

          <Form.Group className="input-icon">
            <Form.Label>New Password</Form.Label>

            <div className="icon-input">
              <img
                src="/images/lock-input-icon.svg"
                className="input-left-icon"
              />

              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            <Form.Group className="input-icon">
              <Form.Label>Confirm Password</Form.Label>

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
            {/* STRENGTH BARS */}

            <p className="strength-text">
              Strength: <b>{password ? strengthLabel : "Weak"}</b>
            </p>
            <div className="password-strength">
              <div
                className={`bar ${strengthScore >= 1 ? "active" : ""}`}></div>
              <div
                className={`bar ${strengthScore >= 2 ? "active" : ""}`}></div>
              <div
                className={`bar ${strengthScore >= 3 ? "active" : ""}`}></div>
              <div
                className={`bar ${strengthScore >= 3 ? "active" : ""}`}></div>
            </div>

            {/* RULES */}

            <ul className="password-rules">
              <li className={rules.length ? "valid" : ""}>
                ✓ At least 8 characters
              </li>

              <li className={rules.number ? "valid" : ""}>
                ✓ Contains a number (0-9)
              </li>

              <li className={rules.special ? "valid" : ""}>
                ✓ Special character (!@#$)
              </li>
            </ul>
          </Form.Group>

          {/* CONFIRM PASSWORD */}

          <Link href="/password-changed" className="get-started-btn w-100 mt-3">
            Reset Password
          </Link>
        </Form>
      </div>
    </div>
  );
}

"use client";

import { useRef } from "react";
import Link from "next/link";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function SignupForm() {
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (value.length > 1) {
      e.target.value = value.slice(0, 1);
    }

    if (value && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };
  return (
    <div className="signup-wrapper signup-bg">
      <div className="overlay"></div>

      <div className="signup-card">
        <h2 className="login-title">Verification</h2>
        <p className="login-subtitle">
          Enter the verification code we just sent on your email address.
        </p>

        <Form>
          <Form.Group>
            <div className="otp-input">
              {[0, 1, 2, 3].map((item, index) => (
                <Form.Control
                  key={index}
                  type="text"
                  maxLength="1"
                  inputMode="numeric"
                  ref={(el) => (inputs.current[index] = el)}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>
          </Form.Group>

          <Link
            href={"/create-new-password"}
            className="get-started-btn w-100 mt-3">
            Verify
          </Link>
        </Form>
      </div>
    </div>
  );
}

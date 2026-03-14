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
        <h2 className="login-title">Join the Elite</h2>
        <p className="login-subtitle">
          Start your transformation with movement tracking and professional
          coaching.
        </p>

        <Form>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="John" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Doe" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group className="input-icon">
            <Form.Label>Email Address</Form.Label>

            <div className="icon-input">
              <img src="/images/email-icon.svg" className="input-left-icon" />
              <Form.Control type="email" placeholder="john.doe@company.com" />
            </div>
          </Form.Group>

          <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Select>
              <option>Select</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </Form.Select>
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

          <Form.Check
            type="checkbox"
            className="mt-3"
            label={
              <>
                I agree to the{" "}
                <Link href="/terms-conditions">Terms of Service</Link> and{" "}
                <Link href="/privacy-policy">Privacy Policy</Link>
              </>
            }
          />

          <Link
            href={"/choose-your-plan"}
            className="get-started-btn w-100 mt-3">
            Get Started →
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
            Already a member? <Link href="/login">Sign in</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}

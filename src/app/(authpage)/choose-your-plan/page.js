"use client";

import Link from "next/link";
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="signup-wrapper plan-page-bg">
      <div className="container-fluid">
        <div className="top-heading">
          <h1>Choose Your Plan</h1>
        </div>
        <div className="subscribe-card">
          <h2 className="subscribe-title">Subscribe Now</h2>

          <p className="subscribe-sub">
            Start your journey towards a stronger and more confident you
          </p>

          {/* PLAN 1 */}

          <div className="plan-box dark">
            <Row className="align-items-center">
              <Col md={5}>
                <p className="plan-name">STANDARD</p>

                <h2 className="price">
                  $49 <span>/ MONTH</span>
                </h2>
              </Col>

              <Col md={7}>
                <ul className="plan-list">
                  <li>
                    <img src="/images/checkmark-icon.svg" />
                    AI motion tracking
                  </li>

                  <li>
                    <img src="/images/checkmark-icon.svg" />
                    Professional Coach Programming
                  </li>

                  <li>
                    <img src="/images/checkmark-icon.svg" />
                    On-Demand Workout Library
                  </li>

                  <li className="disable">
                    <img src="/images/cross-icon.svg" />
                    Personal Coach Consultation
                  </li>
                </ul>
              </Col>
            </Row>
          </div>

          {/* PLAN 2 */}

          <div className="plan-box light">
            <Row className="">
              <Col md={5}>
                <span className="best-badge">BEST VALUE</span>
                <h2 className="price">
                  $399 <span>/ YEAR</span>
                </h2>
              </Col>

              <Col md={7}>
                <ul className="plan-list">
                  <li>
                    <img src="/images/checkmark-bl-icon.svg" />
                    Everything in Monthly
                  </li>

                  <li>
                    <img src="/images/checkmark-bl-icon.svg" />
                    Priority Support Access
                  </li>

                  <li>
                    <img src="/images/checkmark-bl-icon.svg" />
                    Custom Meal Planning
                  </li>
                </ul>
              </Col>
            </Row>
          </div>

          {/* DISCOUNT */}

          <div className="discount-section">
            <label>Discount Code</label>

            <Form.Control
              placeholder="Discount code"
              className="discount-input"
            />
          </div>

          {/* BUTTON */}

          <Link href={"/dashboard"} className="pay-btn w-100">
            Continue to Pay
          </Link>
        </div>
      </div>
    </div>
  );
}

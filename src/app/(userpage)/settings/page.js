"use client";
import { useState } from "react";
import { Row, Col, Button, Table, Form } from "react-bootstrap";
import Link from "next/link";

export default function PlanBillingUI() {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });
const togglePassword = (field) => {
  setShowPassword((prev) => ({
    ...prev,
    [field]: !prev[field],
  }));
};


  return (
    <div className="plan-ui-wrapper">
      {/* Plan Card */}
      <h2 className="page-title">Settings</h2>
      <p className="page-sub">Keep your account safe and secure.</p>

      {/* Payment + Billing */}
      <Row className="mt-4">
        {/* Personal Details */}
        <Col lg={12}>
          <div className="profile-ui-card">
            <div className="password-change-head">
              <h4>
                <img
                  src="/images/locked-card-icon.svg"
                  className="me-2"
                  alt="card"
                />
                Password Change
              </h4>
            </div>
            <Row className="mt-4">
              {/* Current Password */}
              <Col md={4}>
                <Form.Group className="mb-3 position-relative">
                  <Form.Control
                    type={showPassword.current ? "text" : "password"}
                    placeholder="Current Password"
                  />
                  <img
                    src={
                      showPassword.current
                        ? "/images/eye-close.svg"
                        : "/images/eye-open.svg"
                    }
                    className="eye-icon-setting"
                    onClick={() => togglePassword("current")}
                  />
                </Form.Group>
              </Col>

              {/* New Password */}
              <Col md={4}>
                <Form.Group className="mb-3 position-relative">
                  <Form.Control
                    type={showPassword.new ? "text" : "password"}
                    placeholder="New Password"
                  />
                  <img
                    src={
                      showPassword.new
                        ? "/images/eye-close.svg"
                        : "/images/eye-open.svg"
                    }
                    className="eye-icon-setting"
                    onClick={() => togglePassword("new")}
                  />
                </Form.Group>
              </Col>

              {/* Confirm Password */}
              <Col md={4}>
                <Form.Group className="mb-3 position-relative">
                  <Form.Control
                    type={showPassword.confirm ? "text" : "password"}
                    placeholder="Confirm Password"
                  />
                  <img
                    src={
                      showPassword.confirm
                        ? "/images/eye-close.svg"
                        : "/images/eye-open.svg"
                    }
                    className="eye-icon-setting"
                    onClick={() => togglePassword("confirm")}
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
        </Col>

        {/* Subscription */}
        <Col lg={12}>
          <div className="card-heading-top mt-4">
            <h4>Communication</h4>
          </div>
          <div className="profile-ui-toggle ">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="profile-ui-toggle-title">Email Notifications</h6>

                <p className="profile-ui-toggle-desc">
                  Receive weekly progress reports and nutrition tips.
                </p>
              </div>

              <Form.Check
                type="switch"
                id="email-notification-switch"
                className="profile-ui-switch"
                defaultChecked
              />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <Button className="discard-changes">Discard Changes</Button>
            <Button className="send-message">Save Changes</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

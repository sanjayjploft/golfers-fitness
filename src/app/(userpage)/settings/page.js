"use client";

import { Row, Col, Button, Table, Form } from "react-bootstrap";
import Link from "next/link";

export default function PlanBillingUI() {
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
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Current Password" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="New Password" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Confirm New Password" />
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

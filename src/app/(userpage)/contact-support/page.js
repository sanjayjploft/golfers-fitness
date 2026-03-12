"use client";

import { Row, Col, Button, Table, Form } from "react-bootstrap";
import Link from "next/link";

export default function PlanBillingUI() {
  return (
    <div className="plan-ui-wrapper">
      {/* Plan Card */}
      <h2 className="page-title">Contact/Support</h2>
      <p className="page-sub">
        Manage your premium membership details, review payment methods, and
        access your full invoice history.
      </p>

      {/* Payment + Billing */}
      <Row className="mt-4">
        {/* Personal Details */}
        <Col lg={12}>
          <div className="profile-ui-card">
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control defaultValue="Alex Johnson" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control defaultValue="alex.j@fitnessplatform.com" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>

                  <Form.Select defaultValue="">
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>HEIGHT (CM)</Form.Label>
                  <Form.Control defaultValue="185" />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>FITNESS GOALS</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="How can we help you?"
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className=" mt-3">
              <Button className="send-message">Send Message</Button>
            </div>
          </div>
        </Col>

        {/* Subscription */}
        <Col lg={12}>
          <div className="profile-ui-card contact-info">
            <h4>
              {" "}
              <img
                src="/images/email-icon-crd.svg"
                className="me-3"
                alt="card"
              />
              Email Us
            </h4>
            <Row>
              <Col lg={6}>
                <div className="info-inner">
                  <h3>Support</h3>
                  <p>support@elitefitness.com</p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="info-inner">
                  <h3>Partnerships</h3>
                  <p>partners@elitefitness.com</p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

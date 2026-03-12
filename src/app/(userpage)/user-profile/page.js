"use client";

import Image from "next/image";
import Link from "next/link";
import { Row, Col, Button, Form } from "react-bootstrap";

export default function ProfileUI() {
  return (
    <div className="profile-ui-wrapper">
      {/* Profile Header */}
      <div className="profile-ui-card profile-ui-header text-center">
        <div className="profile-ui-avatar">
          <img src="/images/user-profile-img.png" alt="profile" />
        </div>

        <h3 className="profile-ui-name">Alex Johnson</h3>

        <p className="profile-ui-desc">
          Elite fitness enthusiast since 2022. Focused on strength training,
          high-performance nutrition, and marathon preparation. Los Angeles, CA.
        </p>

        <div className="profile-ui-btns">
          <Button className="profile-ui-edit">Edit Profile</Button>
          <Button className="profile-ui-share">Share Profile</Button>
        </div>
      </div>

      {/* Details */}
      <Row className="mt-4">
        {/* Personal Details */}
        <Col lg={8}>
          <div className="profile-ui-card">
            <h5 className="profile-ui-title">
              {" "}
              <img
                src="/images/personal-details-icon.svg"
                alt=" "
                className="me-2"
              />
              Personal Details
            </h5>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>FULL NAME</Form.Label>
                  <Form.Control defaultValue="Alex Johnson" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>EMAIL ADDRESS</Form.Label>
                  <Form.Control defaultValue="alex.j@fitnessplatform.com" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>WEIGHT (KG)</Form.Label>
                  <Form.Control defaultValue="82.5" />
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
                    rows={3}
                    defaultValue="Increase lean muscle mass by 5kg, improve 10k run time to under 45 minutes, and maintain a consistent 5-day workout split."
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="text-end mt-3">
              <Button className="profile-ui-save">Save Changes</Button>
            </div>
          </div>
        </Col>

        {/* Subscription */}
        <Col lg={4}>
          <div className="profile-ui-card profile-ui-plan">
            <div className="profile-ui-plan-head">
              <img src="/images/overlay-plan-icon.svg" alt=" " />
              <span className="profile-ui-badge">ACTIVE</span>
            </div>

            <p className="profile-ui-small">CURRENT PLAN</p>

            <h4 className="profile-ui-plan-title">Annual Pro</h4>

            <p className="profile-ui-next">Next billing on Dec 12, 2024</p>

            <Link href={"/billing-subscription"} className="profile-ui-manage">
              Manage Subscription
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

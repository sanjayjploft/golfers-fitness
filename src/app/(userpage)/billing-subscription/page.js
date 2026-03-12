"use client";

import { Row, Col, Button, Table } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function PlanBillingUI() {
  return (
    <div className="plan-ui-wrapper">
      {/* Plan Card */}
      <h2 className="page-title">Billing & Subscription</h2>
      <p className="page-sub">
        Manage your premium membership details, review payment methods, and
        access your full invoice history.
      </p>
      <div className="plan-ui-card plan-ui-main">
        <Row className="align-items-center plan-main-info">
          <Col md={1}>
            <div className="plan-ui-icon">
              <img src="/images/overlay-plan-icon-big.svg" alt="plan" />
            </div>
          </Col>

          <Col md={8}>
            <div className="plan-ui-details">
              <div className="d-flex gap-2 align-items-center">
                <span className="plan-ui-badge">ACTIVE PLAN</span>

                <h4>Pro Annual</h4>
              </div>

              <p>
                Full access to personal training, nutritional tracking, and
                premium workout libraries.
              </p>

              <div className="plan-ui-meta">
                <span>
                  {" "}
                  <img
                    src="/images/renews-icon.svg"
                    alt="plan"
                    className="me-2"
                  />
                  Renews Oct 12, 2024
                </span>
                <span>
                  <img
                    src="/images/price-icon.svg"
                    alt="plan"
                    className="me-2"
                  />
                  $199.00 / year
                </span>
              </div>
            </div>
          </Col>

          <Col md={3} className="text-md-end">
            <Link href={"/change-plan"} className="plan-ui-change">
              Change Plan →
            </Link>
          </Col>
        </Row>

        <div className="plan-ui-note">
          Your current plan includes complimentary access to our Elite Spa
          network.
        </div>
      </div>

      {/* Payment + Billing */}
      <Row className="mt-4">
        {/* Payment Method */}
        <Col lg={4}>
          <h5 className="plan-ui-section-title">Payment Method</h5>

          <div className="plan-ui-card">
            <div className="plan-ui-payment">
              <img src="/images/card-img.svg" alt="card" />

              <div>
                <strong>Visa ending in 4242</strong>
                <p>Expires 12/26</p>
              </div>
            </div>

            <div className="plan-ui-payment-btns">
              <Button className="plan-ui-replace">Replace</Button>

              <span className="plan-ui-delete">
                <img src="/images/delete-icon.svg" alt="card" />
              </span>
            </div>
          </div>

          <div className="plan-ui-add">
            <img src="/images/add-icon.svg" className="me-1" alt="card" /> Add
            Payment Method
          </div>
        </Col>

        {/* Billing History */}
        <Col lg={8}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="plan-ui-section-title">Billing History</h5>

            <span className="plan-ui-view">View All</span>
          </div>

          <div className="plan-ui-card">
            <Table responsive className="plan-ui-table">
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>AMOUNT</th>
                  <th>STATUS</th>
                  <th>INVOICE</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Oct 12, 2023</td>
                  <td>$199.00</td>
                  <td>
                    <span className="plan-ui-paid">PAID</span>
                  </td>
                  <td>
                    {" "}
                    <img
                      src="/images/dawld-icon.svg"
                      className="me-1"
                      alt="card"
                    />
                    PDF
                  </td>
                </tr>

                <tr>
                  <td>Oct 12, 2022</td>
                  <td>$199.00</td>
                  <td>
                    <span className="plan-ui-paid">PAID</span>
                  </td>
                  <td>
                    <img
                      src="/images/dawld-icon.svg"
                      className="me-1"
                      alt="card"
                    />
                    PDF
                  </td>
                </tr>

                <tr>
                  <td>Oct 12, 2021</td>
                  <td>$149.00</td>
                  <td>
                    <span className="plan-ui-paid">PAID</span>
                  </td>
                  <td>
                    <img
                      src="/images/dawld-icon.svg"
                      className="me-1"
                      alt="card"
                    />
                    PDF
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  );
}

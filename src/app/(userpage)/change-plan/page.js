"use client";

import { Row, Col, Button, Table } from "react-bootstrap";
import Link from "next/link";

export default function PlanBillingUI() {
  return (
    <div className="plan-ui-wrapper">
      {/* Plan Card */}
      <h2 className="page-title">Change Plan</h2>
      <p className="page-sub">
        Manage your premium membership details, review payment methods, and
        access your full invoice history.
      </p>

      {/* Payment + Billing */}
      <Row className="mt-4">
        {/* Payment Method */}
        <div className="heading-change-plan">
          <h2>Other Available Plans</h2>
        </div>
        <Col lg={6}>
          <div className="change-plan-card recommended-card">
            <div className="recommended">Recommended</div>
            <h3>Elite Coaching</h3>
            <p>Weekly 1-on-1 calls</p>
            <span>
              Upgrade to get dedicated mentorship and monthly bloodwork analysis
              for peak performance.
            </span>
            <Link href="" className="upgrade-plan">
              Upgrade to Elite • $49/mo
            </Link>
          </div>
        </Col>
        <Col lg={6}>
          <div className="change-plan-card upgrade-card">
            <div className="d-flex gap-2 justify-content-between">
              <div>
                <h3>Monthly Pro</h3>
                <p>Standard premium features with monthly flexibility.</p>
              </div>
              <div className="price-plan-up">
                $14.99 <span>/mo</span>
              </div>
            </div>

            <Link href="" className="upgrade-plan">
              Switch to Monthly
            </Link>
          </div>
        </Col>
        <Col lg={12}>
          <div className="explan-text">
            <p>
              Subscription changes take effect at the end of the current billing
              cycle.
            </p>
            <button className="cancel-subsc">Cancel Subscription</button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

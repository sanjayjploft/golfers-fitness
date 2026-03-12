import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

export default function FooterTwo() {
  return (
    <>
      <div className="footer-two">
        <Row>
          <Col lg={6}>
            <div className="copy-text-footer">
              <p>© 2024 Elite Fitness Platform. All rights reserved.</p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="cms-link">
              <Link href={""}>Privacy Policy</Link>
              <Link href={""}>Terms of Service</Link>
              <Link href={""}>Help Center</Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

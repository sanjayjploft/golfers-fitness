"use client";

import { Container, Row, Col } from "react-bootstrap";

export default function TermsConditions() {
  return (
    <div className="privacy-page-wrapper">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="privacy-page-header">
              <h1 className="privacy-page-title">Terms & Conditions</h1>

              <p className="privacy-page-updated">
                Last Updated: October 24, 2023 • Reading time: 12 min
              </p>
            </div>

            <div className="privacy-page-intro">
              Welcome to Elite Fitness. These terms constitute a legally binding
              agreement between you and our platform. By accessing our services,
              you agree to abide by the guidelines and policies outlined below.
              Please read these terms carefully before starting your fitness
              journey.
            </div>

            {/* SECTION 1 */}

            <div className="privacy-page-section">
              <h3 className="privacy-page-heading">01. Acceptance of Terms</h3>

              <p>
                By using the Elite Fitness website, mobile application, or any
                services provided by us (collectively, the "Platform"), you
                agree to be bound by these Terms of Service. If you do not agree
                to all of these terms, do not use the Platform.
              </p>

              <p>
                We reserve the right to modify these terms at any time. We will
                notify you of any changes by posting the new Terms of Service on
                this page and updating the "Last Updated" date. Your continued
                use of the Platform after changes are made constitutes your
                acceptance of the new terms.
              </p>
            </div>

            {/* SECTION 2 */}

            <div className="privacy-page-section">
              <h3 className="privacy-page-heading">02. User Accounts</h3>

              <p>
                To access certain features of the Platform, you must register
                for an account. You agree to provide accurate, current, and
                complete information during the registration process and to
                update such information to keep it accurate and complete.
              </p>

              <p>
                You are responsible for safeguarding your password and for any
                activities or actions under your account. Elite Fitness cannot
                and will not be liable for any loss or damage arising from your
                failure to comply with the above.
              </p>

              <ul className="privacy-page-list">
                <li>
                  You must be at least 18 years of age to use this service.
                </li>

                <li>
                  You may not use as a username the name of another person or
                  entity.
                </li>

                <li>
                  You are solely responsible for your interactions with other
                  users.
                </li>
              </ul>
            </div>

            {/* SECTION 3 */}

            <div className="privacy-page-section">
              <h3 className="privacy-page-heading">
                03. Subscriptions & Payments
              </h3>

              <p>
                Elite Fitness offers various subscription plans. By selecting a
                plan, you agree to pay the fees indicated for that service.
                Payments will be charged on a pre-pay basis on the day you sign
                up and will cover the use of that service for a monthly or
                annual subscription period as indicated.
              </p>

              <p>
                All billing is handled through secure third-party payment
                processors. We do not store your credit card information on our
                servers.
              </p>

              <div className="privacy-page-note">
                <strong>Refund Policy</strong>

                <p>
                  We want you to be completely satisfied with Elite Fitness. If
                  you are not satisfied with your subscription, we offer a
                  <strong> 14-day money-back guarantee </strong>
                  for first-time subscribers. This does not apply to renewals or
                  plan changes.
                </p>

                <p>
                  To request a refund, please contact our support team at
                  support@elitefitness.com within the 14-day window. Refunds
                  will be processed to the original payment method within 5-10
                  business days.
                </p>
              </div>
            </div>

            {/* SECTION 4 */}

            <div className="privacy-page-section">
              <h3 className="privacy-page-heading">04. Content Ownership</h3>

              <p>
                All intellectual property rights in the Platform and its content
                (including training videos, guides, and text) are owned by or
                licensed to Elite Fitness. You are granted a limited,
                non-exclusive, non-transferable license to access and use the
                Platform for personal, non-commercial fitness purposes.
              </p>

              <p>
                User-generated content (reviews, comments, community posts)
                remains your property, but you grant Elite Fitness a worldwide,
                royalty-free license to use, reproduce, and display that content
                on the platform.
              </p>
            </div>

            {/* SECTION 5 */}

            <div className="privacy-page-section">
              <h3 className="privacy-page-heading">
                05. Limitation of Liability
              </h3>

              <p>
                The information and workouts provided on the Platform are for
                educational and entertainment purposes only. You should consult
                a physician before beginning any new exercise program.
              </p>

              <p>
                <strong>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, ELITE FITNESS SHALL
                  NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
                  REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS
                  OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </strong>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

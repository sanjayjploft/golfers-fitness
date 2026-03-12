"use client";

import { Container, Row, Col } from "react-bootstrap";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page-wrapper">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="privacy-page-header">
              <span className="privacy-page-label">LEGAL DOCUMENTATION</span>

              <h1 className="privacy-page-title">Privacy Policy</h1>

              <p className="privacy-page-updated">
                Last updated: October 24, 2023 • Version 2.4.1
              </p>
            </div>

            <div className="privacy-page-intro">
              At Elite Fitness, your privacy is not an afterthought; it is built
              into our core architecture. We understand the sensitivity of
              biometric and movement data, and we are committed to protecting it
              with industry-leading encryption and transparency.
            </div>

            {/* SECTION 1 */}

            <div className="privacy-page-section">
              <h3 className="privacy-page-heading">1. Data Collection</h3>

              <p>
                We collect information that you provide directly to us when you
                create an account, participate in any interactive features of
                our services, or communicate with us. This includes:
              </p>

              <ul className="privacy-page-list">
                <li>
                  <strong>Profile Information:</strong> Name, email address,
                  age, gender, and fitness goals.
                </li>

                <li>
                  <strong>Health Data:</strong> Weight, height, body fat
                  percentage, and heart rate frequency.
                </li>

                <li>
                  <strong>Payment Information:</strong> Transaction details
                  processed via our secure PCI-compliant partners.
                </li>
              </ul>

              <div className="privacy-page-note">
                <span className="privacy-page-note-title">
                  IN PLAIN ENGLISH
                </span>

                <p>
                  We only collect what we need to make your fitness journey
                  better. We don't sell your profile info to advertisers.
                </p>
              </div>
            </div>

            {/* SECTION 2 */}

            <div className="privacy-page-section">
              <h3 className="privacy-page-heading">
                2. Movement Tracking & Biometric Data
              </h3>

              <p>
                Our platform utilizes advanced motion sensors and API
                integrations (such as HealthKit and Google Fit) to provide
                real-time form correction and performance analytics.
              </p>

              <p>This data specifically includes:</p>

              <ul className="privacy-page-list">
                <li>
                  <strong>XYZ Coordinate Mapping:</strong> High-frequency joint
                  position data captured during workout sessions.
                </li>

                <li>
                  <strong>Velocity & Acceleration:</strong> Physics-based data
                  points to calculate power output and fatigue.
                </li>

                <li>
                  <strong>Gait Analysis:</strong> Movement patterns during
                  running or walking activities.
                </li>
              </ul>

              <p>
                Elite Fitness uses end-to-end encryption for all raw movement
                stream data. This data is processed locally on your device
                whenever possible to minimize cloud exposure.
              </p>

              <div className="privacy-page-note">
                <span className="privacy-page-note-title">
                  IN PLAIN ENGLISH
                </span>

                <p>
                  When you use our tracking features, we see how your body moves
                  to help you avoid injury. This "skeleton" data is encrypted
                  and kept private.
                </p>
              </div>
            </div>

            {/* SECTION 3 */}

            <div className="privacy-page-section">
              <h3 className="privacy-page-heading">3. How We Use Your Data</h3>

              <p>
                The primary purpose of data processing is to deliver a
                personalized coaching experience. Specifically, we use your data
                to:
              </p>

              <ul className="privacy-page-list">
                <li>
                  Generate custom workout plans based on your previous
                  performance.
                </li>

                <li>
                  Provide real-time "form alerts" during exercises to prevent
                  injury.
                </li>

                <li>
                  Compare your progress against anonymized aggregate data of
                  similar users.
                </li>

                <li>
                  Detect and prevent fraudulent use of our premium services.
                </li>
              </ul>
            </div>

            {/* SECTION 4 */}

            <div className="privacy-page-section">
              <h3 className="privacy-page-heading">4. Your Rights</h3>

              <p>
                Under global data protection laws (GDPR/CCPA), you maintain full
                control over your information. You have the right to:
              </p>

              <ul className="privacy-page-list">
                <li>
                  <strong>Access:</strong> Request a copy of all data we hold
                  about you.
                </li>

                <li>
                  <strong>Rectification:</strong> Correct any inaccurate or
                  incomplete data.
                </li>

                <li>
                  <strong>Erasure:</strong> Request that we delete your account
                  and all associated movement history.
                </li>

                <li>
                  <strong>Portability:</strong> Download your workout history in
                  a machine-readable format (.JSON or .CSV).
                </li>
              </ul>
            </div>

            {/* SECTION 5 */}

            <div className="privacy-page-section">
              <h3 className="privacy-page-heading">5. Security Protocols</h3>

              <p>
                We implement a variety of security measures to maintain the
                safety of your personal information:
              </p>

              <ul className="privacy-page-list">
                <li>
                  <strong>AES-256 Encryption:</strong> Data at rest is encrypted
                  using the highest industry standard.
                </li>

                <li>
                  <strong>TLS 1.3:</strong> All data in transit between your app
                  and our servers is secured.
                </li>

                <li>
                  <strong>Anonymization:</strong> We strip identifying metadata
                  from movement logs used for our machine learning model
                  training.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

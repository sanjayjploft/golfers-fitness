"use client";
import { Container, Row, Col } from "react-bootstrap";

export default function MissionSection() {
  return (
    <section className="mv-ai-section">
      <Container>
        {/* HERO */}
        <div className="mv-ai-hero">
          <img
            src="/images/mission-hero-img.png"
            alt="mission"
            className="mv-ai-hero-img"
          />

          <div className="mv-ai-hero-content">
            <span className="mv-ai-tag">OUR MISSION</span>

            <h1 className="mv-ai-title">
              Empowering <span>every</span> <br />
              <span>body</span> through <br />
              precision movement.
            </h1>
          </div>
        </div>

        {/* DESCRIPTION */}

        <p className="mv-ai-desc">
          We believe that elite-level coaching should be accessible to everyone.
          By combining human expertise with cutting-edge AI, we help you move
          better, train harder, and stay injury-free.
        </p>

        {/* STATS */}

        <Row className="mv-ai-stats">
          <Col md={4}>
            <div className="mv-ai-stat-card">
              <h3>1.2M+</h3>
              <span>MOVEMENTS</span>
            </div>
          </Col>

          <Col md={4}>
            <div className="mv-ai-stat-card">
              <h3>98%</h3>
              <span>ACCURACY</span>
            </div>
          </Col>

          <Col md={4}>
            <div className="mv-ai-stat-card">
              <h3>50k</h3>
              <span>USERS</span>
            </div>
          </Col>
        </Row>

        {/* AI CARD */}

        <div className="mv-ai-card">
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="mv-ai-left">
                <div className="mv-ai-icon">
                  <h4>
                    <img src="/images/ai-about-icon.svg" className="me-3" />
                    Movement AI
                  </h4>
                </div>

                <div>
                  <p>
                    Our proprietary technology uses real- time pose estimation
                    to analyze 32 skeletal points at 60 frames per second.
                  </p>
                  <p className="mt-2">
                    Our proprietary technology uses real- time pose estimation
                    to analyze 32 skeletal points at 60 frames per second.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <ul className="mv-ai-features">
                <li>
                  <img src="/images/checkmark-white.svg" className="me-3" />{" "}
                  Instant bio-feedback on exercise form
                </li>

                <li>
                  <img src="/images/checkmark-white.svg" className="me-3" />{" "}
                  Personalized corrective drill suggestions
                </li>

                <li>
                  <img src="/images/checkmark-white.svg" className="me-3" />{" "}
                  Progress tracking across 100+ exercises
                </li>
              </ul>
            </Col>
          </Row>
        </div>

        {/* COACHES */}

        <h3 className="mv-ai-coach-title">Meet Our Lead Coaches</h3>

        <Row>
          <Col md={6}>
            <div className="mv-ai-coach-card">
              <div className="d-flex gap-3 align-items-center">
                <img
                  src="/images/team-img-01.jpg"
                  className="mv-ai-coach-img"
                />
                <div>
                  <h5>Marcus Reed</h5>
                  <span>Head of Performance</span>
                </div>
              </div>

              <p>
                With over 15 years coaching elite athletes in the NFL and
                Olympic circles. Marcus brings a rigorous, performance-first
                mindset to our digital methodology.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="mv-ai-coach-card">
              <div className="d-flex gap-3 align-items-center">
                <img
                  src="/images/team-img-02.jpg"
                  className="mv-ai-coach-img"
                />
                <div>
                  <h5>Sarah Jenkins</h5>
                  <span>PhD, Movement Specialist</span>
                </div>
              </div>

              <p>
                Sarah holds a PhD in Biomechanics and leads our AI training data
                strategy. She ensures our algorithms prioritize joint safety and
                optimal kinetic chain movement.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

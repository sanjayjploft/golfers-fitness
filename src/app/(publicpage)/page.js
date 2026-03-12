import EliteCoaches from "@/components/EliteCoaches";
import ProfessionalMethods from "@/components/ProfessionalMethods";
import EliteWorkouts from "@/components/EliteWorkouts";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>
              TRAIN LIKE <br /> A PRO.
            </h1>

            <p>
              Personalized for your body. Using advanced skeletal tracking and
              elite coaching methodologies to unlock your peak potential.
            </p>

            <button className="btn hero-btn">
              Start Training <img src={"/images/icon-btn.svg"} />
            </button>
          </div>
        </div>
      </section>

      <EliteCoaches />

      <ProfessionalMethods />
      <section className="ai-tracking-section">
        <div className="container">
          <div className="section-head text-center">
            <p className="small-title">PROPRIETARY AI TECH</p>
            <h2>AI MOTION TRACKING</h2>
          </div>

          <Row className="align-items-center">
            {/* LEFT IMAGE */}

            <Col lg={5}>
              <div className="tracking-img">
                <img
                  src="/images/ai-body.png"
                  className="img-fluid"
                  alt="AI Tracking"
                />
              </div>
            </Col>

            {/* RIGHT FEATURES */}

            <Col lg={7}>
              <div className="tracking-feature">
                <div className="tracking-icon">
                  <img src="/images/icon-kinematic.svg" />
                </div>

                <div>
                  <h4>KINEMATIC ANALYSIS</h4>

                  <p>
                    Our AI identifies 24 key joints in real-time to analyze your
                    range of motion and form accuracy instantly.
                  </p>
                </div>
              </div>

              <div className="tracking-feature">
                <div className="tracking-icon">
                  <img src="/images/icon-correction.svg" />
                </div>

                <div>
                  <h4>INTELLIGENT CORRECTIONS</h4>

                  <p>
                    Receive immediate audio and visual cues to adjust your
                    posture, reducing injury risk and maximizing efficiency.
                  </p>
                </div>
              </div>

              <div className="tracking-feature">
                <div className="tracking-icon">
                  <img src="/images/icon-progress.svg" />
                </div>

                <div>
                  <h4>PROGRESSIVE ADAPTATION</h4>

                  <p>
                    The platform automatically increases difficulty based on
                    your movement quality, not just weight or reps.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <EliteWorkouts />
      <section className="get-started-section">
        <div className="container">
          <Row className="align-items-center">
            {/* Left Content */}
            <Col lg={12}>
              <div className="get-started-content">
                <h2>Get started. You are in charge.</h2>

                <p className="desc">
                  Sola helps you schedule, optimize and protect your day to give
                  you <br /> more time for what's important.
                </p>

                <Link href={"/get-started"} className="start-btn">
                  Get Started
                </Link>
              </div>
            </Col>

            {/* Right Image */}
          </Row>
        </div>
        <div className="globimg">
          <img src="/images/globe-img.png" />
        </div>
      </section>
    </>
  );
}

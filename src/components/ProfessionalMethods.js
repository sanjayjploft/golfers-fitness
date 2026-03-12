"use client";

import { useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";

export default function ProfessionalMethods() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="methods-section">
      <div className="container">
        <Row className="align-items-center g-5">
          {/* LEFT TEXT */}

          <Col lg={6}>
            <h2 className="methods-title">
              PROFESSIONAL METHODS, ADAPTED FOR YOU.
            </h2>

            <p className="methods-text">
              We don’t just give you a workout plan. We analyze your
              biomechanics to ensure every rep is perfect, every movement is
              efficient, and every goal is reachable.
            </p>

            <div className="methods-stats d-flex gap-5">
              <div>
                <h3>98%</h3>
                <p>Accuracy in Form Analysis</p>
              </div>

              <div>
                <h3>3.5x</h3>
                <p>Faster Goal Achievement</p>
              </div>
            </div>
          </Col>

          {/* RIGHT VIDEO IMAGE */}

          <Col lg={6}>
            <div className="video-thumb">
              <img
                src="/images/workout-video.png"
                className="bg-img img-fluid"
              />

              <button className="play-btn" onClick={handleShow}>
                <img src="/images/play-video.svg" />
              </button>
            </div>
          </Col>
        </Row>
      </div>

      {/* VIDEO MODAL */}

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Body className="p-0">
          <video controls autoPlay style={{ width: "100%" }}>
            <source src="/videos/training.mp4" type="video/mp4" />
          </video>
        </Modal.Body>
      </Modal>
    </section>
  );
}

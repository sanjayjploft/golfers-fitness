"use client";

import Link from "next/link";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

export default function EliteWorkouts() {
  const [tab, setTab] = useState("strength");

  return (
    <section className="workouts-section">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="section-head">
            <p className="small-title">Library</p>
            <h2>ELITE WORKOUTS</h2>
          </div>

          <div className="tabs">
            <button
              className={tab === "strength" ? "active" : ""}
              onClick={() => setTab("strength")}>
              Strength
            </button>
            <button
              className={tab === "golf" ? "active" : ""}
              onClick={() => setTab("golf")}>
              Golf
            </button>
            <button
              className={tab === "baseball" ? "active" : ""}
              onClick={() => setTab("baseball")}>
              Baseball
            </button>
            <button
              className={tab === "agility" ? "active" : ""}
              onClick={() => setTab("agility")}>
              Agility
            </button>
            <button
              className={tab === "recovery" ? "active" : ""}
              onClick={() => setTab("recovery")}>
              Recovery
            </button>
          </div>
        </div>

        {/* Strength */}

        {tab === "strength" && (
          <Row>
            <Col lg={3} md={6}>
              <div className="workout-card">
                <div className="premium-card">
                  <img src="/images/lock-icon.svg" /> PREMIUM
                </div>
                <div className="workouts-img">
                  <img src="/images/workouts-img-1.png" />
                </div>
                <h5>Explosive Power Phase 1</h5>
                <p>Coach Marcus • 45 Min</p>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="workout-card">
                <div className="workouts-img">
                  <img src="/images/workouts-img-2.png" />
                </div>
                <h5>Foundation Strength</h5>
                <p>Coach David • 60 Min</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="workout-card">
                <div className="premium-card">
                  <img src="/images/lock-icon.svg" /> PREMIUM
                </div>
                <div className="workouts-img">
                  <img src="/images/workouts-img-3.png" />
                </div>
                <h5>Movement Mastery: Hip Bio</h5>
                <p>Coach Sarah • 30 Min</p>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="workout-card">
                <div className="workouts-img">
                  <img src="/images/workouts-img-4.png" />
                </div>
                <h5>Metabolic Engine Burn</h5>
                <p>Coach Sarah • 25 Min</p>
              </div>
            </Col>
          </Row>
        )}

        {/* Golf */}

        {tab === "golf" && (
          <Row>
            <Col lg={3} md={6}>
              <div className="workout-card">
                <div className="premium-card">
                  <img src="/images/lock-icon.svg" /> PREMIUM
                </div>
                <div className="workouts-img">
                  <img src="/images/workouts-img-1.png" />
                </div>
                <h5>Explosive Power Phase 1</h5>
                <p>Coach Marcus • 45 Min</p>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="workout-card">
                <div className="workouts-img">
                  <img src="/images/workouts-img-2.png" />
                </div>
                <h5>Foundation Strength</h5>
                <p>Coach David • 60 Min</p>
              </div>
            </Col>
          </Row>
        )}

        {/* Baseball */}

        {tab === "baseball" && (
          <Row>
            <Col lg={3} md={6}>
              <div className="workout-card">
                <div className="workouts-img">
                  <img src="/images/workouts-img-2.png" />
                </div>
                <h5>Foundation Strength</h5>
                <p>Coach David • 60 Min</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="workout-card">
                <div className="premium-card">
                  <img src="/images/lock-icon.svg" /> PREMIUM
                </div>
                <div className="workouts-img">
                  <img src="/images/workouts-img-3.png" />
                </div>
                <h5>Movement Mastery: Hip Bio</h5>
                <p>Coach Sarah • 30 Min</p>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="workout-card">
                <div className="workouts-img">
                  <img src="/images/workouts-img-4.png" />
                </div>
                <h5>Metabolic Engine Burn</h5>
                <p>Coach Sarah • 25 Min</p>
              </div>
            </Col>
          </Row>
        )}

        {/* Agility */}

        {tab === "agility" && (
          <Row>
            <Col lg={3} md={6}>
              <div className="workout-card">
                <div className="premium-card">
                  <img src="/images/lock-icon.svg" /> PREMIUM
                </div>
                <div className="workouts-img">
                  <img src="/images/workouts-img-1.png" />
                </div>
                <h5>Explosive Power Phase 1</h5>
                <p>Coach Marcus • 45 Min</p>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="workout-card">
                <div className="workouts-img">
                  <img src="/images/workouts-img-2.png" />
                </div>
                <h5>Foundation Strength</h5>
                <p>Coach David • 60 Min</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="workout-card">
                <div className="premium-card">
                  <img src="/images/lock-icon.svg" /> PREMIUM
                </div>
                <div className="workouts-img">
                  <img src="/images/workouts-img-3.png" />
                </div>
                <h5>Movement Mastery: Hip Bio</h5>
                <p>Coach Sarah • 30 Min</p>
              </div>
            </Col>
          </Row>
        )}

        {/* Recovery */}

        {tab === "recovery" && (
          <Row>
            <Col lg={3} md={6}>
              <div className="workout-card">
                <div className="premium-card">
                  <img src="/images/lock-icon.svg" /> PREMIUM
                </div>
                <div className="workouts-img">
                  <img src="/images/workouts-img-1.png" />
                </div>
                <h5>Explosive Power Phase 1</h5>
                <p>Coach Marcus • 45 Min</p>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="workout-card">
                <div className="workouts-img">
                  <img src="/images/workouts-img-2.png" />
                </div>
                <h5>Foundation Strength</h5>
                <p>Coach David • 60 Min</p>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="workout-card">
                <div className="workouts-img">
                  <img src="/images/workouts-img-4.png" />
                </div>
                <h5>Metabolic Engine Burn</h5>
                <p>Coach Sarah • 25 Min</p>
              </div>
            </Col>
          </Row>
        )}
      </div>
      <Row className="text-center">
        <div className="pt-5">
          <Link href="" className="view-all-btn">
            Browse Full Library <img src="/images/icon-arrow-2.svg" />
          </Link>
        </div>
      </Row>
    </section>
  );
}

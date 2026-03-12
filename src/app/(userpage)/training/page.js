"use client";

import Link from "next/link";
import { Container, Row, Col, ProgressBar, Button } from "react-bootstrap";

export default function WorkoutPlans() {
  const progress = 25;
  return (
    <div className="workout-wrapper">
      {/* Breadcrumb */}
      <div className="bread-text">
        Home <span>›</span> Workout Plans <span>›</span>{" "}
        <b>Advanced Strength Training</b>
      </div>

      {/* Title */}
      <h2 className="page-title">Advanced Strength Training</h2>
      <p className="page-sub">
        Track your 12-week transformation journey. Stay consistent to see
        results.
      </p>

      {/* Stats */}
      <div className="stats-row">
        <div className="stats-card">
          <div className="stats-icon">
            {" "}
            <img src="/images/total-calories-icon.svg" />
          </div>
          <div>
            <p className="stats-label">TOTAL CALORIES</p>
            <h3>
              12,400 <span>kcal</span>
            </h3>
            <p className="stats-change">
              <img src="/images/grop-up-icon.svg" className="me-2" />
              +12% this week
            </p>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-icon">
            {" "}
            <img src="/images/total-duration-icon.svg" />
          </div>
          <div>
            <p className="stats-label">TOTAL DURATION</p>
            <h3>
              15.5 <span>Hours</span>
            </h3>
            <p className="stats-change">
              {" "}
              <img src="/images/grop-up-icon.svg" className="me-2" />
              +5% this week
            </p>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-icon">
            {" "}
            <img src="/images/sessions-done-icon.svg" />
          </div>
          <div>
            <p className="stats-label">SESSIONS DONE</p>
            <h3>24 Workouts</h3>
            <p className="stats-change">
              {" "}
              <img src="/images/check-card.svg" className="me-2" />
              On Target
            </p>
          </div>
        </div>
      </div>

      {/* Weekly Progress */}
      <h5 className="section-title">
        {" "}
        <img src="/images/weekly-pross.svg" className="me-2" />
        Weekly Progress
      </h5>

      <Row className="week-row">
        {/* Week 1 */}
        <Col lg={6} md={6}>
          <div className="week-card">
            <div className="week-header">
              <div>
                <p className="week-small">WEEK 01</p>
                <h5>Foundations</h5>
              </div>
              <span className="status completed">COMPLETED</span>
            </div>

            <div className="journey-box">
              <div className="d-flex justify-content-between">
                <h3>Week 2 of 8</h3>
                <span>25% Complete</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-journey"
                  role="progressbar"
                  style={{ width: `${progress}%` }}></div>
              </div>
            </div>

            <div className="week-btns">
              <Link href="#" className="dark-btn">
                <img src="/images/eye-btn-icon.svg" className="me-2" />
                See Report
              </Link>
              <Link href="#" className="light-btn">
                <img src="/images/eye-btn-icon-black.svg" className="me-2" />
                View More
              </Link>
            </div>
          </div>
        </Col>

        {/* Week 2 */}
        <Col lg={6} md={6}>
          <div className="week-card">
            <div className="week-header">
              <div>
                <p className="week-small">WEEK 02</p>
                <h5>Strength Phase I</h5>
              </div>
              <span className="status completed">COMPLETED</span>
            </div>

            <div className="journey-box">
              <div className="d-flex justify-content-between">
                <h3>Week 2 of 8</h3>
                <span>25% Complete</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-journey"
                  role="progressbar"
                  style={{ width: `${progress}%` }}></div>
              </div>
            </div>

            <div className="week-btns">
              <Link href="" className="dark-btn">
                <img src="/images/eye-btn-icon.svg" className="me-2" /> See
                Report
              </Link>
              <Link href="" className="light-btn">
                <img src="/images/eye-btn-icon-black.svg" className="me-2" />{" "}
                View More
              </Link>
            </div>
          </div>
        </Col>

        {/* Week 3 */}
        <Col lg={6} md={6}>
          <div className="week-card">
            <div className="week-header">
              <div>
                <p className="week-small">WEEK 03</p>
                <h5>Endurance Split</h5>
              </div>
              <span className="status completed">COMPLETED</span>
            </div>

            <div className="journey-box">
              <div className="d-flex justify-content-between">
                <h3>Week 2 of 8</h3>
                <span>25% Complete</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-journey"
                  role="progressbar"
                  style={{ width: `${progress}%` }}></div>
              </div>
            </div>

            <div className="week-btns">
              <Link href="" className="dark-btn">
                <img src="/images/eye-btn-icon.svg" className="me-2" />
                See Report
              </Link>
              <Link href="" className="light-btn">
                <img src="/images/eye-btn-icon-black.svg" className="me-2" />{" "}
                View More
              </Link>
            </div>
          </div>
        </Col>

        {/* Week 4 */}
        <Col lg={6} md={6}>
          <div className="week-card active">
            <div className="week-header">
              <div>
                <p className="week-small">WEEK 04</p>
                <h5>Hypertrophy Push</h5>
              </div>
              <span className="status in-progress">
                <img src="/images/in-progress-icon.svg" className="mx-2" />
                IN PROGRESS
              </span>
            </div>

            <p className="progress-label mb-3">
              Target : 5 Sessions. Completed : 3
            </p>
            <div className="journey-box">
              <div className="d-flex justify-content-between">
                <h3>Week 2 of 8</h3>
                <span>25% Complete</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-journey"
                  role="progressbar"
                  style={{ width: `${progress}%` }}></div>
              </div>
            </div>

            <div className="week-btns">
              <Link href="" className="dark-btn">
                Continue{" "}
                <img src="/images/btn-play-icon.svg" className="mx-2" />
              </Link>
              <Link href="" className="light-btn">
                <img src="/images/eye-btn-icon-black.svg" className="me-2" />{" "}
                View More
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6}>
          <div className="week-card locked-card">
            <div className="week-header">
              <div>
                <p className="week-small">WEEK 05</p>
                <h5>Peak Power</h5>
              </div>

              <div className="lock-icon">
                <img src="/images/locked-card-icon.svg" />
              </div>
            </div>

            <div className="journey-box">
              <div className="d-flex justify-content-between">
                <h3>Week 2 of 8</h3>
                <span>25% Complete</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-journey"
                  role="progressbar"></div>
              </div>
            </div>

            <p className="unlock-text">Complete Week 4 to unlock</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

import TestimonialSlider from "@/components/TestimonialSlider";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

export default function page() {
  return (
    <>
      <section className="content-section text-center">
        <div className="container">
          <Row className="align-items-center">
            {/* Left Content */}
            <Col lg={12}>
              <div className="app-info-content">
                <h2>Train smarter, not harder</h2>

                <p className="">
                  Connect with expert coaches, track your workouts, and achieve
                  your fitness goals faster.
                </p>
              </div>
              <div className="dawnlod-app">
                <Link href={""}>
                  <img src="/images/app-store-black.svg" />
                </Link>
                <Link href={""}>
                  <img src="/images/play-store-black.svg" />
                </Link>
              </div>
              <div className="content-section-img">
                {" "}
                <img src="/images/app-img-01.png" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="page-info-section">
        <div className="container">
          <Row className="align-items-center">
            <Col lg={6} className="order-2 order-lg-1">
              <div className="app-img-card">
                <img src="/images/app-img-02.png" />
              </div>
            </Col>
            <Col lg={6} className="order-1 order-lg-2">
              <div className="app-content-card">
                <h3>Personalized workouts for every fitness level</h3>
                <ul className="featured-list">
                  <li>
                    1. Tell us your goals, fitness level, and preferences.
                  </li>
                  <li>
                    2. Strength training, HIIT, yoga, cardio, or full-body
                    programs.
                  </li>
                  <li>
                    3. Get a personalized workout routine designed just for you.
                  </li>
                  <li>4. Follow guided workouts directly from your phone.</li>
                  <li>
                    5. Monitor performance and achieve your fitness milestones.
                  </li>
                </ul>
                <div className="dawnlod-app mt-4 justify-content-start">
                  <Link href={""}>
                    <img src="/images/app-store-black.svg" />
                  </Link>
                  <Link href={""}>
                    <img src="/images/play-store-black.svg" />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="page-info-section">
        <div className="container">
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="app-content-card">
                <h3>Expert coaching that works for you</h3>
                <p>
                  Train 1-on-1 with certified fitness coaches and take your
                  training to the next level.
                </p>
                <h5>Our coaches help you with:</h5>
                <ul className="featured-list">
                  <li>1. Personalized workout programs</li>
                  <li>2. Form correction and injury prevention</li>
                  <li>3. Nutrition and recovery guidance</li>
                  <li>4. Motivation and accountability</li>
                </ul>
              </div>
            </Col>
            <Col lg={6} className="text-end">
              <div className="app-img-card">
                <img src="/images/app-img-03.png" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <TestimonialSlider />
      <section className="content-section text-center">
        <div className="container">
          <Row className="align-items-center">
            {/* Left Content */}
            <Col lg={12}>
              <div className="app-info-content">
                <h2>Start your fitness journey today</h2>

                <p className="">
                  Download the EliteFit app and begin training with smarter
                  workouts and expert guidance.
                </p>
              </div>
              <div className="dawnlod-app">
                <Link href={""}>
                  <img src="/images/app-store-black.svg" />
                </Link>
                <Link href={""}>
                  <img src="/images/play-store-black.svg" />
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

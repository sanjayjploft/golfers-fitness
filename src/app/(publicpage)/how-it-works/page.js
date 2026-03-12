import TestimonialSlider from "@/components/TestimonialSlider";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

export default function page() {
  return (
    <>
      <section className="content-section text-center pb-0">
        <div className="container">
          <Row className="align-items-center">
            {/* Left Content */}
            <Col lg={12}>
              <div className="app-info-content">
                <h1>How it Works</h1>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="page-info-section">
        <div className="container">
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="app-img-card">
                <img src="/images/how-it-works-img.png" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="app-content-card">
                <span className="sub-text">HOW IT WORKS</span>
                <h3>
                  Transform your fitness with a smarter training experience
                </h3>
                <div className="how-it-works-grid">
                  <div className="how-it-works-item">
                    <span>1</span>
                    <h4>Create Your Fitness Profile</h4>
                    <p>
                      Tell us about your fitness level, goals, and
                      preferences.Whether you want to lose weight, build muscle,
                      or improve endurance, we create a plan that fits your
                      lifestyle.
                    </p>
                  </div>
                  <div className="how-it-works-item">
                    <span>2</span>
                    <h4>Get a Personalized Training Plan</h4>
                    <p>
                      Our system generates a workout plan designed specifically
                      for you.Each plan adapts to your progress, ensuring you
                      stay challenged and motivated.
                    </p>
                  </div>
                  <div className="how-it-works-item">
                    <span>3</span>
                    <h4>Follow Guided Workouts</h4>
                    <p>
                      Access step-by-step workouts led by professional
                      coaches.Train anytime with video guidance, performance
                      tracking, and exercise tips to improve your form.
                    </p>
                  </div>
                  <div className="how-it-works-item">
                    <span>4</span>
                    <h4>Track Progress & Achieve Results</h4>
                    <p>
                      Monitor your progress with detailed insights and
                      performance tracking. Stay motivated by seeing your
                      improvements and reaching your fitness milestones.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

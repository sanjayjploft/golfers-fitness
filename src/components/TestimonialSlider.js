"use client";

import Slider from "react-slick";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    text: "EliteFit completely changed the way I train. The personalized workouts and progress tracking keep me motivated every day. It feels like having a personal trainer in my pocket.",
    name: "Carlos F.",
    role: "Fitness Enthusiast",
    img: "/images/testimonial-person-01.png",
  },
  {
    id: 2,
    text: "EliteFit completely changed the way I train. The personalized workouts and progress tracking keep me motivated every day.",
    name: "Michael T.",
    role: "Gym Member",
    img: "/images/testimonial-person-02.png",
  },
  {
    id: 3,
    text: "EliteFit completely changed the way I train. The personalized workouts and progress tracking keep me motivated every day. It feels like having a personal trainer in my pocket.",
    name: "Sarah K.",
    role: "Athlete",
    img: "/images/testimonial-person-03.png",
  },
  {
    id: 4,
    text: "EliteFit completely changed the way I train. The personalized workouts and progress tracking keep me motivated every day. ",
    name: "David L.",
    role: "Trainer",
    img: "/images/testimonial-person-04.png",
  },
];

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setActive(newIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="text-center testimonial-title">
              What our members <br /> are saying
            </h2>
          </Col>
        </Row>
        <div className="testimonial-container">
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="testimonial-card">
                <p className="quote-icon">
                  <img src="/images/quote-icon.svg" />
                </p>

                <p className="testimonial-text">{testimonials[active].text}</p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col lg={6}>
              <Slider {...settings} className="profile-slider">
                {testimonials.map((item, index) => (
                  <div key={item.id} className="profile-slide">
                    <div
                      className={`profile-img ${
                        index === active ? "active" : ""
                      }`}>
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={80}
                        height={80}
                      />
                    </div>

                    {index === active && (
                      <div className="profile-info">
                        <h5>{item.name}</h5>
                        <span>{item.role}</span>
                      </div>
                    )}
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

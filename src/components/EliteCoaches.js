"use client";

import { Row, Col } from "react-bootstrap";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function EliteCoaches() {
  const coaches = [
    {
      name: "Coach Marcus",
      designation: "Olympic Sprints & Power",
      img: "/images/coaches-img-1.png",
      desc: "15+ years experience training world-class sprinters and high-speed athletes.",
    },
    {
      name: "Coach Sarah",
      designation: "Functional Mobility",
      img: "/images/coaches-img-2.png",
      desc: "Expert in biomechanics and injury prevention for long-term athletic success.",
    },
    {
      name: "Coach David",
      designation: "Strength & Conditioning",
      img: "/images/coaches-img-3.png",
      desc: "Specially designed programs for building explosive power and muscle endurance.",
    },
    {
      name: "Coach Alex",
      designation: "Functional Mobility",
      img: "/images/coaches-img-2.png",
      desc: "Professional performance trainer",
    },
  ];

  return (
    <section className="coaches-section">
      <div className="container">
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="section-head">
              <p className="small-title">EXPERT GUIDANCE</p>
              <h2>THE ELITE COACHES</h2>
            </div>
          </Col>

          <Col lg={6}>
            <div className="app-dawld d-flex gap-3 align-items-center justify-content-end flex-wrap">
              <p className="mb-0">Download App/invite friends:</p>

              <div className="d-flex gap-3">
                <Link href="">
                  <img src="/images/app-store.svg" />
                </Link>

                <Link href="">
                  <img src="/images/play-store.svg" />
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        {/* Swiper Slider */}
        <div className="coach-slider-wrapper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            navigation={{
              nextEl: ".coach-next",
              prevEl: ".coach-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}>
            {coaches.map((coach, index) => (
              <SwiperSlide key={index}>
                <div className="coach-card">
                  <img src={coach.img} />

                  <div className="coach-info">
                    <h4>{coach.name}</h4>

                    <span>{coach.designation}</span>

                    <p>{coach.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="coach-prev custom-arrow">
            <img src="/images/slider-arrow-left.svg" />
          </div>

          <div className="coach-next custom-arrow">
            <img src="/images/slider-arrow.svg" />
          </div>
        </div>

        {/* Custom Arrows */}
      </div>
    </section>
  );
}

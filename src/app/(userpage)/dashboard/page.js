import DashboardBanner from "@/components/DashboardBanner";
import SessionCard from "@/components/SessionCard";
import WeeklyOverview from "@/components/WeeklyOverview";
import OverallScore from "@/components/OverallScore";
import JointBreakdown from "@/components/JointBreakdown";
import Insights from "@/components/Insights";
import ProgressHighlights from "@/components/ProgressHighlights";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <Row>
        <Col md={12}>
          <div className="dash-head">
            <h1 className="">Welcome back, Alex</h1>
            <p>
              Ready for Training • <span>Day 12 of 30-day Strength Cycle</span>
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={8} className="mb-4">
          <div className="explore-cards">
            <p className="stre-txt">
              <span>Today's Focus</span>
              Strength Training
            </p>
            <h2>Explosive Swing Power</h2>
            <ul className="explore-bttm">
              <li>
                <img src="/images/stopwatch-icon.svg" />
                <span>45 min</span>
              </li>
              <li>
                <img src="/images/dumbell-icon.svg" />
                <span>High Intensity</span>
              </li>
            </ul>
            <Link href="" className="theme-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="14"
                viewBox="0 0 11 14"
                fill="none">
                <path d="M0 0L10.9688 6.98438L0 13.9688V0Z" fill="white" />
              </svg>{" "}
              START WORKOUT
            </Link>
          </div>

          <WeeklyOverview />
          <ProgressHighlights />
        </Col>
        <Col md={4}>
          {" "}
          <SessionCard />
          <OverallScore />
        </Col>
      </Row>

      <JointBreakdown />

      <Insights />
    </>
  );
}

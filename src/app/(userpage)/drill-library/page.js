"use client";

import DrillCard from "@/components/DrillCard";
import Pagination from "@/components/Pagination";
import ShimmerCard from "@/components/ShimmerCard";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const categories = [
  { id: "butt", name: "Butt", img: "/images/Butt.png" },
  { id: "leg", name: "Leg", img: "/images/Leg.png" },
  { id: "abs", name: "Abs", img: "/images/Abs.png" },
  { id: "chest", name: "Chest", img: "/images/Chest.png" },
  { id: "back", name: "Back", img: "/images/Back.png" },
];

const drillsData = {
  butt: [
    {
      level: "ADVANCED",
      title: "Explosive First Step: Wing Attack Mechanics",
      img: "/images/Library-img-01.png",
      time: "08:45",
      equipment: "Equipment: Cones",
      equipmentIcon: "/images/equipment-icon.svg",
      coach: "Coach Marcus",
      avatar: "/images/user-img-01.png",
      views: "1.2K Views",
    },
    {
      level: "INTERMEDIATE",
      title: "Max Velocity Sprint Drills: Arm Drive Focus",
      img: "/images/Library-img-02.png",
      time: "12:20",
      equipment: "Track Access",
      equipmentIcon: "/images/track-clc-icon.svg",
      coach: "Sarah Jenkins",
      avatar: "/images/user-img-02.png",
      views: "840 Views",
    },
    {
      level: "BEGINNER",
      title: "Ball Control Basics: Inside-Outside Touches",
      img: "/images/Library-img-03.png",
      time: "05:15",
      equipment: "No Equipment",
      equipmentIcon: "/images/no-equipment-icon.svg",
      coach: "David Chen",
      avatar: "/images/user-img-03.png",
      views: "3.5K Views",
    },
    {
      level: "ADVANCED",
      title: "Full Core Stability: Kettlebell Anti-Rotation",
      img: "/images/Library-img-04.png",
      time: "15:00",
      equipment: "Kettlebell",
      equipmentIcon: "/images/equipment-icon.svg",
      coach: "Elena Rossi",
      avatar: "/images/user-img-04.png",
      views: "2.1K Views",
    },
  ],

  leg: [
    {
      level: "INTERMEDIATE",
      title: "Sprint Power Leg Training",
      img: "/images/Library-img-01.png",
      time: "10:45",
      equipment: "Track Access",
      equipmentIcon: "/images/track-clc-icon.svg",
      coach: "Mike Robert",
      avatar: "/images/user-img-01.png",
      views: "950 Views",
    },
  ],

  abs: [
    {
      level: "BEGINNER",
      title: "Core Strength Builder",
      img: "/images/Library-img-03.png",
      time: "07:10",
      equipment: "No Equipment",
      equipmentIcon: "/images/no-equipment-icon.svg",
      coach: "David Chen",
      avatar: "/images/user-img-02.png",
      views: "1.3K Views",
    },
  ],

  chest: [
    {
      level: "ADVANCED",
      title: "Explosive Chest Stability",
      img: "/images/Library-img-02.png",
      time: "13:40",
      equipment: "Kettlebell",
      equipmentIcon: "/images/equipment-icon.svg",
      coach: "Elena Rossi",
      avatar: "/images/user-img-04.png",
      views: "1.9K Views",
    },
  ],

  back: [
    {
      level: "INTERMEDIATE",
      title: "Back Strength Drill",
      img: "/images/Library-img-04.png",
      time: "09:25",
      equipment: "Resistance Band",
      equipmentIcon: "/images/track-clc-icon.svg",
      coach: "John Carter",
      avatar: "/images/user-img-02.png",
      views: "870 Views",
    },
  ],
};

export default function DrillLibrary() {
  const [activeTab, setActiveTab] = useState("butt");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData(activeTab);
  }, [activeTab]);

  const loadData = (tab) => {
    setLoading(true);

    setTimeout(() => {
      setData(drillsData[tab] || []);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="drillLib_wrapper">
      {/* Header */}

      <div className="drillLib_header">
        <h2>Drill Library</h2>
        <p>Explore 240+ professional training sessions</p>
      </div>

      {/* Category */}

      <div className="drillLib_tabs">
        <h5>Body Specific</h5>

        <div className="drillLib_tabList">
          {categories.map((item) => (
            <div
              key={item.id}
              className={`drillLib_tabItem ${activeTab === item.id ? "active" : ""}`}
              onClick={() => setActiveTab(item.id)}>
              <img src={item.img} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}

      <Row className="drillLib_row">
        {loading
          ? [...Array(4)].map((_, i) => (
              <Col lg={3} md={6} sm={6} key={i}>
                <ShimmerCard />
              </Col>
            ))
          : data.map((item, i) => (
              <Col lg={3} md={6} sm={6} key={i}>
                <DrillCard data={item} />
              </Col>
            ))}
      </Row>

      {/* Bottom */}

      <div className="drillLib_bottom">
        <div className="drillLib_count">Showing 12 of 240 drills</div>

        <Pagination />
      </div>
    </div>
  );
}

import Link from "next/link";
import { Button } from "react-bootstrap";

export default function DrillCard({ data }) {
  return (
    <div className="drillLib_card">
      <div className="drillLib_img">
        <img src={data.img} />

        <div className="drillLib_level">{data.level}</div>

        <div className="drillLib_time">{data.time}</div>

        <div className="drillLib_heart">
          <button className="">
            <img src="/images/heart-icon.svg" />
          </button>
        </div>
      </div>

      <div className="drillLib_content">
        <h4>{data.title}</h4>

        <p className="drillLib_equipment">
          <img src={data.equipmentIcon} className="me-2" />
          {data.equipment}
        </p>

        <div className="drillLib_footer">
          <div className="drillLib_user">
            <img src={data.avatar} />
            <span>{data.coach}</span>
          </div>

          <div className="drillLib_views">{data.views}</div>
        </div>
      </div>
    </div>
  );
}

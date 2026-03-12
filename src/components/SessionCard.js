import Link from "next/link";

export default function SessionCard() {
  return (
    <div className="section-card-dashboard mb-4">
      <div className="d-flex justify-content-between ">
        <h5>Today's Session</h5>
        <Link href={""}>
          <img src="/images/paly-card-icon.svg" />
        </Link>
      </div>

      <div className="section-duration">
        <img src="/images/clock-icon-bg.svg" />
        <div>
          <h4>Strength & Conditioning</h4>
          <span>Duration: 75 mins • High Intensity</span>
        </div>
      </div>

      <ul className="list-sections">
        <li>
          <span>1</span> Dynamic Warmup (10m)
        </li>
        <li>
          <span>2</span> Deadlifts 5×5
        </li>
        <li>
          <span>3 </span> Plyometric Box Jumps
        </li>
      </ul>

      <Link href="" className="get-started-btn  w-100">
        Start Session
      </Link>
    </div>
  );
}

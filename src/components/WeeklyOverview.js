export default function WeeklyOverview() {
  const progress = 25;
  const days = [
    { day: "01", status: "done" },
    { day: "02", status: "done" },
    { day: "03", status: "active" },
    { day: "04" },
    { day: "05" },
    { day: "06" },
    { day: "07" },
  ];

  return (
    <div className=" mb-4">
      <div className="weekly-overview mt-4">
        <h3>Weekly Overview</h3>

        <div className="weekly-row">
          {days.map((item, index) => (
            <div key={index} className="week-item">
              <span className="week-number">{item.day}</span>

              <div
                className={`
              week-box
              ${item.status === "done" ? "week-done" : ""}
              ${item.status === "active" ? "week-active" : ""}
            `}>
                {item.status === "done" && "✓"}
                {item.status === "active" && "•"}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ongoing Journey */}

      <div className="card-dashboard mt-4">
        <p className="highlight-label">Ongoing Journey</p>
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
      </div>
    </div>
  );
}

export default function ScoreCard() {
  const percentage = 82;

  const radius = 110;
  const stroke = 18;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="section-card-dashboard p-4 text-center">
      <h6 className="overall-scroll">Overall Score</h6>

      <div
        style={{
          position: "relative",
          width: 240,
          height: 240,
          margin: "auto",
        }}>
        <svg height="240" width="240">
          {/* Background Circle */}
          <circle
            stroke="#F1F5F9"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx="120"
            cy="120"
          />

          {/* Progress Circle */}
          <circle
            stroke="#4A4A4A"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            r={normalizedRadius}
            cx="120"
            cy="120"
            transform="rotate(-90 120 120)"
          />
        </svg>

        {/* Center Text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}>
          <div
            style={{ fontSize: "36px", fontWeight: "bold", color: "#0F172A" }}>
            {percentage}
          </div>
          <div style={{ fontSize: "12px", color: "#94A3B8" }}>OF 100</div>
        </div>
      </div>

      <div className="last-month-success mt-2">
        {" "}
        <img src="/images/groth-up.svg" />
        +5% from last month
      </div>
    </div>
  );
}

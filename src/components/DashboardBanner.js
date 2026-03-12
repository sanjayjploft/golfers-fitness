export default function DashboardBanner() {
  return (
    <div
      className="card text-white p-4"
      style={{
        background: "linear-gradient(120deg,#0f2027,#203a43,#2c5364)",
      }}>
      <small>TODAY'S FOCUS</small>

      <h2 className="mt-2">EXPLOSIVE SWING POWER</h2>

      <p>45 min • High Intensity</p>

      <button className="btn btn-light mt-3">Start Workout</button>
    </div>
  );
}

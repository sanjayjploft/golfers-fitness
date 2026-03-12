export default function ProgressHighlights() {
  return (
    <div className="card-dashboard d-flex justify-content-between align-items-center mt-4">
      <div className="">
        <p className="highlight-label">Progress Highlights</p>

        <h4 className="highlight-number">12 Workouts Completed</h4>
      </div>

      <div className="trophy-icon">
        <img src="/images/trofy-icon.svg" />
      </div>
    </div>
  );
}

export default function Insights() {
  return (
    <div className="card-ai-insights ">
      <h5>
        <img src="/images/ai-ins-icon.svg" className="me-3" />
        Personalized AI Insights
      </h5>

      <p>
        Your shoulder mobility has improved by <span>5%</span>, but current
        metrics show moderate restriction in{" "}
        <span>Thoracic Spine extension</span>. This is likely contributing to
        the slight plateau in your overhead reach. We recommend prioritizing the
        T-Spine rotations in your next three sessions to unlock optimal
        movement.
      </p>

      <div className="ai-footer">
        Joint Health:<span>Optimal</span> • Recovery Speed: <span>High</span>
      </div>
    </div>
  );
}

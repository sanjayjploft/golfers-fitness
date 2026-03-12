export default function ShimmerCard() {
  return (
    <div className="drillLib_card shimmer_card">
      <div className="shimmer_img shimmer">
        <img src="/images/shimmer_icon.svg" />
      </div>

      <div className="shimmer_body">
        <div className="shimmer_line shimmer"></div>
        <div className="shimmer_line short shimmer"></div>
      </div>
    </div>
  );
}

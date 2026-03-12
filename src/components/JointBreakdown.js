import { Col, Row } from "react-bootstrap";

export default function JointBreakdown() {
  const progress = 25;
  return (
    <div className="mt-4">
      <div className="joint-breakdown-top">
        <h4>Joint Breakdown</h4>
        <div className="d-flex gap-3">
          <div className="filter-joint">
            <div>
              <span className="active"></span> Current
            </div>
            <div>
              <span></span> Target
            </div>
          </div>
        </div>
      </div>

      <Row>
        <Col lg={4}>
          <div className="joint-card">
            <div className="top-part">
              <div>
                <h4>Hip Internal Rotation</h4>
                <span>Flexion & Abduction</span>
              </div>
              <div className="status-card green">Optimal</div>
            </div>
            <div className="joint-progress">
              <div className="d-flex justify-content-between align-items-baseline">
                <h3>35°</h3>
                <b>Target: 35-45°</b>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-journey"
                  role="progressbar"
                  style={{ width: `${progress}%` }}></div>
              </div>
            </div>
            <div className="joint-footer d-flex justify-content-between">
              <h5>Stability Score</h5>
              <span>92%</span>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="joint-card">
            <div className="top-part">
              <div>
                <h4>Shoulder Flexion</h4>
                <span>Overhead Reach</span>
              </div>
              <div className="status-card yellow">Restricted</div>
            </div>
            <div className="joint-progress">
              <div className="d-flex justify-content-between align-items-baseline">
                <h3>160°</h3>
                <b>Target: 175-180°</b>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-restricted"
                  role="progressbar"
                  style={{ width: `${progress}%` }}></div>
              </div>
            </div>
            <div className="joint-footer d-flex justify-content-between">
              <h5>Symmetry Index</h5>
              <span>78%</span>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="joint-card">
            <div className="top-part">
              <div>
                <h4>Thoracic Spine</h4>
                <span>Extension & Rotation</span>
              </div>
              <div className="status-card gray">Good</div>
            </div>
            <div className="joint-progress">
              <div className="d-flex justify-content-between align-items-baseline">
                <h3>42°</h3>
                <b>Target: 45°</b>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-gray"
                  role="progressbar"
                  style={{ width: `${progress}%` }}></div>
              </div>
            </div>
            <div className="joint-footer d-flex justify-content-between">
              <h5>Rotation Balance</h5>
              <span>84%</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

"use client";
import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

import { useRef, useState } from "react";

function page() {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState("00:00");
  const [current, setCurrent] = useState("00:00");

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const handleLoaded = () => {
    const total = videoRef.current.duration;
    setDuration(formatTime(total));
  };

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    setCurrent(formatTime(currentTime));
  };

  const playVideo = () => {
    videoRef.current.play();
    setPlaying(true);
  };
  return (
    <div>
      <div className="feed-bg">
        <Row>
          <Col md={8}>
            <div className="post-cards">
              <div className="postHeader">
                <div className="postAvatar">
                  <img
                    src="/images/post-avtar.png"
                    className="postAvatar-img"
                  />
                  <img src="/images/check-badge.svg" className="verifiedIcon" />
                </div>

                <div>
                  <div className="postName">Marcus Chen</div>

                  <div className="postMeta">
                    Professional CrossFit Athlete • 2h ago
                  </div>
                </div>
              </div>
              <p className="postText">
                Top 3 movements for hip capsule mobility before your heavy squat
                days. 🦵 1. 90/90 Switches 2. Tactical Frog 3. Couch Stretch
                Consistency over intensity for mobility work. Save this for your
                next leg day! #MobilityFlow #SquatPrep
              </p>
              <div className="postMedia">
                <video
                  ref={videoRef}
                  className="postVideo"
                  poster="/images/video-thumb.png"
                  preload="metadata"
                  onLoadedMetadata={handleLoaded}
                  onTimeUpdate={handleTimeUpdate}>
                  <source src="/images/workout.mp4" type="video/mp4" />
                </video>

                {!playing && (
                  <>
                    <div className="videoOverlay"></div>

                    <div className="playButton" onClick={playVideo}>
                      ▶
                    </div>
                  </>
                )}

                {/* duration */}
                <span className="videoDuration">
                  {current} / {duration}
                </span>

                {/* tag */}
                <span className="videoTag">TUTORIAL</span>
              </div>
              <div className="post-action">
                <button className="post-btn">
                  <img src="/images/like.svg" alt="" />
                  <span>2.4k</span>
                </button>
                <button
                  className="post-btn comments"
                  onClick={() => setIsOpen(!isOpen)}>
                  <img src="/images/comment.svg" alt="" />
                  <span>89</span>
                </button>
                <button className="post-btn">
                  <img src="/images/share.svg" alt="" />
                  <span>312</span>
                </button>
              </div>
            </div>
            {isOpen && (
              <div className="comment-cards">
                <div className="comment-header">
                  <h4>Discussion (48)</h4>
                  <button className="dropdown-toggle " type="button">
                    Most Recent
                  </button>
                </div>
                <div className="input-wrapper">
                  <img
                    src="/images/comment-avatr.png"
                    className="comment-avtar"
                    alt="user"
                  />
                  <div className="input-wrapper-box">
                    <div className="flex-grow-1 position-relative ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ask a coach or share your thoughts..."
                      />
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <input type="file" id="fileInput" className="d-none" />
                      <label htmlFor="fileInput" className="attach-btn">
                        <img src="/images/attach.svg" alt="Attach" />
                      </label>
                      <button className="theme-btn">POST</button>
                    </div>
                  </div>
                </div>
                <div
                  className="discussion-wrapper mx-auto"
                  style={{ maxWidth: "850px" }}>
                  {/* --- Main Comment (Chris Walker) --- */}
                  <div className="d-flex gap-3 mb-2">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Chris"
                      alt="Chris"
                      className="rounded-circle"
                      style={{
                        width: "48px",
                        height: "48px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="flex-grow-1">
                      {/* Comment Bubble */}
                      <div className="custom-comment-bubble p-3">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="fw-bold text-dark">
                            Chris Walker
                          </span>
                          <span className="text-muted small">45m ago</span>
                        </div>
                        <p
                          className="mb-0 text-secondary lh-base"
                          style={{ fontSize: "0.95rem" }}>
                          The way he stays on the back hip is insane. Marcus,
                          any drills for preventing that front knee from
                          collapsing too early? I find my velo dropping after 30
                          pitches.
                        </p>
                      </div>

                      {/* Action Row */}
                      <div className="d-flex align-items-center gap-3 mt-2 ms-2">
                        <div className="d-flex align-items-center gap-1 text-secondary cursor-pointer">
                          <i
                            className="bi bi-chevron-up fw-bold"
                            style={{ fontSize: "0.8rem" }}></i>
                          <span className="fw-bold small">12</span>
                        </div>
                        <span className="text-secondary fw-bold small cursor-pointer">
                          Reply
                        </span>
                      </div>

                      {/* --- Reply Comment (Marcus Henderson) --- */}
                      <div className="d-flex gap-3 mt-3">
                        <div className="position-relative">
                          <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
                            alt="Marcus"
                            className="rounded-circle border"
                            style={{
                              width: "42px",
                              height: "42px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="flex-grow-1">
                          {/* Reply Bubble (Bordered) */}
                          <div className="custom-reply-bubble p-3 border">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <div className="d-flex align-items-center gap-2">
                                <span className="fw-bold text-dark">
                                  Marcus Henderson
                                </span>
                                <span className="pro-badge">VERIFIED PRO</span>
                              </div>
                              <span className="text-muted small">12m ago</span>
                            </div>
                            <p
                              className="mb-0 text-secondary lh-base"
                              style={{ fontSize: "0.95rem" }}>
                              Great observation, Chris. Try the 'Wall Drive'
                              drill. Keep the front hip closed as long as
                              possible. Velo drop usually points to a core
                              stability issue in the 3rd phase. DM me your swing
                              clip!
                            </p>
                          </div>

                          {/* Reply Action Row */}
                          <div className="d-flex align-items-center gap-3 mt-2 ms-2">
                            <div className="d-flex align-items-center gap-1 text-secondary cursor-pointer">
                              <i
                                className="bi bi-chevron-up fw-bold"
                                style={{ fontSize: "0.8rem" }}></i>
                              <span className="fw-bold small">4</span>
                            </div>
                            <span className="text-secondary fw-bold small cursor-pointer">
                              Reply
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <section className="discussion-section">
              <div className="discussion-wrapper">
                {/* Header */}
                <div className="discussion-header">
                  <h4 className="discussion-title">Discussion (48)</h4>

                  <div className="discussion-sort">
                    <span>Most Recent</span>
                    <img src="/images/arrow-down.svg" className="sort-icon" />
                  </div>
                </div>

                {/* Post Input */}
                <div className="discussion-input-box">
                  <img
                    src="/images/user-avatar.png"
                    className="discussion-avatar"
                  />

                  <div className="discussion-input-area">
                    <Form.Control
                      type="text"
                      placeholder="Ask a coach or share your thoughts..."
                      className="discussion-input"
                    />

                    <div className="discussion-input-actions">
                      <img
                        src="/images/attach-icon.svg"
                        className="attach-icon"
                      />

                      <button className="discussion-post-btn">POST</button>
                    </div>
                  </div>
                </div>

                {/* Comment */}
                <div className="discussion-comment">
                  <div className="comment-avatar">
                    <img src="/images/user2.png" />
                  </div>

                  <div className="comment-content">
                    <div className="comment-header">
                      <h6>Chris Walker</h6>
                      <span className="comment-time">45m ago</span>
                    </div>

                    <p className="comment-text">
                      The way he stays on the back hip is insane. Marcus, any
                      drills for preventing that front knee from collapsing too
                      early? I find my velo dropping after 30 pitches.
                    </p>

                    <div className="comment-actions">
                      <span className="comment-likes">
                        <img src="/images/upvote.svg" /> 12
                      </span>

                      <span className="comment-reply">Reply</span>
                    </div>
                  </div>
                </div>

                {/* Reply */}
                <div className="discussion-reply">
                  <div className="reply-avatar">
                    <img src="/images/user3.png" />
                  </div>

                  <div className="reply-content">
                    <div className="reply-header">
                      <div className="reply-name">
                        <h6>Marcus Henderson</h6>
                        <span className="verified-badge">VERIFIED PRO</span>
                      </div>

                      <span className="reply-time">12m ago</span>
                    </div>

                    <p className="reply-text">
                      Great observation, Chris. Try the 'Wall Drive' drill. Keep
                      the front hip closed as long as possible. Velo drop
                      usually points to a core stability issue in the 3rd phase.
                      DM me your swing clip!
                    </p>

                    <div className="reply-actions">
                      <span className="reply-likes">
                        <img src="/images/upvote.svg" /> 4
                      </span>

                      <span className="reply-btn">Reply</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Col>
          <Col md={4} className="d-none d-lg-block">
            <div className="trending-card">
              <h4>Trending in Elite Pro</h4>
              <div className="trend-item">
                <small className="text-uppercase fw-semibold">Baseball</small>
                <h5>#VeloTraining</h5>
                <p>2.4k active athletes</p>
              </div>

              <div className="trend-item">
                <small className="text-uppercase fw-semibold">Golf</small>
                <h5>#SwingPlane</h5>
                <p>1.8k active athletes</p>
              </div>

              <div className="trend-item">
                <small className="text-uppercase fw-semibold">Recovery</small>
                <h5>#ColdPlunge</h5>
                <p>890 active discussions</p>
              </div>
              <div className="show-btn">
                <button>Show More</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default page;

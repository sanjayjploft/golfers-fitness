"use client";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useRef, useState } from "react";

function page() {
  const [showDiscussion, setShowDiscussion] = useState(false);

  const toggleDiscussion = () => {
    setShowDiscussion(!showDiscussion);
  };
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
            <div className="coummunity-upload">
              <div className="coummunity-bx">
                <div className="coummunity-bx-avtar">
                  <img src="/images/avtar.png" alt="" />
                </div>
                <div className="coummunity-bx-input">
                  <input
                    className="form-control"
                    placeholder="Share your latest workout or PR..."
                  />
                  <div className="coummunity-bx-bttn">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="upload-btn">
                        <input
                          type="file"
                          id="image-input"
                          className="d-none"
                        />
                        <label htmlFor="image-input">
                          <img src="/images/image-icon.svg" alt="" />
                        </label>
                      </div>
                      <div className="upload-btn">
                        <input
                          type="file"
                          id="video-input"
                          className="d-none"
                        />
                        <label htmlFor="video-input">
                          <img src="/images/video-icon.svg" alt="" />
                        </label>
                      </div>
                    </div>
                    <button className="theme-btn">Create Post</button>
                  </div>
                </div>
              </div>
            </div>
            <Tabs
              defaultActiveKey="latest"
              id="feed-tabs"
              className="commutnity-tabs">
              <Tab eventKey="latest" title="Latest">
                <div className="post-cards">
                  <div className="postHeader">
                    <div className="postAvatar">
                      <img
                        src="/images/post-avtar.png"
                        className="postAvatar-img"
                      />
                    </div>

                    <div>
                      <div className="postName">Marcus Chen</div>

                      <div className="postMeta">
                        Professional CrossFit Athlete • 2h ago
                      </div>
                    </div>
                  </div>
                  <p className="postText">
                    Finally hit that 120kg Power Clean PR! 🏋️‍♂️ Focus was entirely
                    on the triple extension. today. Huge thanks to coach for the
                    cues on the catch phase. Next goal: 130kg by June. #Training
                    #PowerCleans #PR
                  </p>
                  <div className="postMedia">
                    <img
                      src="/images/post-image.png"
                      className="postMediaImg"
                    />
                  </div>
                  <div className="post-action">
                    <button className="post-btn">
                      <img src="/images/like.svg" alt="" />
                      <span>2.4k</span>
                    </button>
                    <button className="post-btn" onClick={toggleDiscussion}>
                      <img src="/images/comment.svg" alt="" />
                      <span>89</span>
                    </button>
                    <button className="post-btn">
                      <img src="/images/share.svg" alt="" />
                      <span>312</span>
                    </button>
                  </div>
                  {showDiscussion && (
                    <section className="discussion-section">
                      <div className="discussion-wrapper">
                        {/* Header */}
                        <div className="discussion-header">
                          <h4 className="discussion-title">Discussion (48)</h4>
                          <div className="discussion-sort">
                            <span>Most Recent</span>
                            <img
                              src="/images/arrow-down.svg"
                              className="sort-icon"
                            />
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
                              <button className="discussion-post-btn">
                                POST
                              </button>
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
                              The way he stays on the back hip is insane.
                              Marcus, any drills for preventing that front knee
                              from collapsing too early? I find my velo dropping
                              after 30 pitches.
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
                                <span className="verified-badge">
                                  VERIFIED PRO
                                </span>
                              </div>
                              <span className="reply-time">12m ago</span>
                            </div>
                            <p className="reply-text">
                              Great observation, Chris. Try the 'Wall Drive'
                              drill. Keep the front hip closed as long as
                              possible. Velo drop usually points to a core
                              stability issue in the 3rd phase. DM me your swing
                              clip!
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
                  )}
                </div>
                <div className="post-cards">
                  <div className="postHeader">
                    <div className="postAvatar">
                      <img
                        src="/images/post-avtar.png"
                        className="postAvatar-img"
                      />
                    </div>

                    <div>
                      <div className="postName">Marcus Chen</div>

                      <div className="postMeta">
                        Professional CrossFit Athlete • 2h ago
                      </div>
                    </div>
                  </div>
                  <p className="postText">
                    Top 3 movements for hip capsule mobility before your heavy
                    squat days. 🦵 1. 90/90 Switches 2. Tactical Frog 3. Couch
                    Stretch Consistency over intensity for mobility work. Save
                    this for your next leg day! #MobilityFlow #SquatPrep
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
                    <button className="post-btn">
                      <img src="/images/comment.svg" alt="" />
                      <span>89</span>
                    </button>
                    <button className="post-btn">
                      <img src="/images/share.svg" alt="" />
                      <span>312</span>
                    </button>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="popular" title="Popular">
                <div className="post-cards">
                  <div className="postHeader">
                    <div className="postAvatar">
                      <img
                        src="/images/post-avtar.png"
                        className="postAvatar-img"
                      />
                    </div>

                    <div>
                      <div className="postName">Marcus Chen</div>

                      <div className="postMeta">
                        Professional CrossFit Athlete • 2h ago
                      </div>
                    </div>
                  </div>
                  <p className="postText">
                    Finally hit that 120kg Power Clean PR! 🏋️‍♂️ Focus was entirely
                    on the triple extension. today. Huge thanks to coach for the
                    cues on the catch phase. Next goal: 130kg by June. #Training
                    #PowerCleans #PR
                  </p>
                  <div className="postMedia">
                    <img
                      src="/images/post-image.png"
                      className="postMediaImg"
                    />
                  </div>
                  <div className="post-action">
                    <button className="post-btn">
                      <img src="/images/like.svg" alt="" />
                      <span>2.4k</span>
                    </button>
                    <button className="post-btn">
                      <img src="/images/comment.svg" alt="" />
                      <span>89</span>
                    </button>
                    <button className="post-btn">
                      <img src="/images/share.svg" alt="" />
                      <span>312</span>
                    </button>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="following" title="Following">
                <div className="post-cards">
                  <div className="postHeader">
                    <div className="postAvatar">
                      <img
                        src="/images/post-avtar.png"
                        className="postAvatar-img"
                      />
                    </div>

                    <div>
                      <div className="postName">Marcus Chen</div>

                      <div className="postMeta">
                        Professional CrossFit Athlete • 2h ago
                      </div>
                    </div>
                  </div>
                  <p className="postText">
                    Top 3 movements for hip capsule mobility before your heavy
                    squat days. 🦵 1. 90/90 Switches 2. Tactical Frog 3. Couch
                    Stretch Consistency over intensity for mobility work. Save
                    this for your next leg day! #MobilityFlow #SquatPrep
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
                    <button className="post-btn">
                      <img src="/images/comment.svg" alt="" />
                      <span>89</span>
                    </button>
                    <button className="post-btn">
                      <img src="/images/share.svg" alt="" />
                      <span>312</span>
                    </button>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="drills" title="Drills">
                <div className="post-cards">
                  <div className="postHeader">
                    <div className="postAvatar">
                      <img
                        src="/images/post-avtar.png"
                        className="postAvatar-img"
                      />
                    </div>

                    <div>
                      <div className="postName">Marcus Chen</div>

                      <div className="postMeta">
                        Professional CrossFit Athlete • 2h ago
                      </div>
                    </div>
                  </div>
                  <p className="postText">
                    Finally hit that 120kg Power Clean PR! 🏋️‍♂️ Focus was entirely
                    on the triple extension. today. Huge thanks to coach for the
                    cues on the catch phase. Next goal: 130kg by June. #Training
                    #PowerCleans #PR
                  </p>
                  <div className="postMedia">
                    <img
                      src="/images/post-image.png"
                      className="postMediaImg"
                    />
                  </div>
                  <div className="post-action">
                    <button className="post-btn">
                      <img src="/images/like.svg" alt="" />
                      <span>2.4k</span>
                    </button>
                    <button className="post-btn comments">
                      <img src="/images/comment.svg" alt="" />
                      <span>89</span>
                    </button>
                    <button className="post-btn">
                      <img src="/images/share.svg" alt="" />
                      <span>312</span>
                    </button>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Col>
          <Col md={4} className="d-none d-lg-block">
            <div className="trending-card position-sticky top-0">
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none">
                  <path
                    d="M1.4 12L0 10.6L7.4 3.15L11.4 7.15L16.6 2H14V0H20V6H18V3.4L11.4 10L7.4 6L1.4 12Z"
                    fill="#4A4A4A"
                  />
                </svg>
                Trending Topics
              </h4>
              <div className="trend-item">
                <small>Fitness • Trending</small>
                <h5>#Training</h5>
                <p>12.5k athletes participating</p>
              </div>

              <div className="trend-item">
                <small>Health • Trending</small>
                <h5>#Nutrition</h5>
                <p>8.2k athletes participating</p>
              </div>

              <div className="trend-item">
                <small>Recovery • Trending</small>
                <h5>#Mobility</h5>
                <p>5.1k athletes participating</p>
              </div>

              <div className="trend-item">
                <small>Performance • Trending</small>
                <h5>#Mindset</h5>
                <p>3.9k athletes participating</p>
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

import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <p>Demo Project</p>
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Saksham Gupta</h1>
      <p>Developer | Web Designer | Content Creator </p>
    </div>
  );
};

export default Cover

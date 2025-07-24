import React from "react";
import styles from "./HomeBanner.module.css";

const HomeBanner = () => {
  return (
    <div
      className="container"
      style={{
        height: "450px",
      }}
    >
      <div className="row d-flex align-items-center h-100">
        <div className="col-lg-6">
          <div className={styles.contant_banner}>
            <h5>Welcome to ABET Global</h5>
            <h1>
              It's Your Turn to <span> Profit</span>
            </h1>
            <h4>Trade Anytime Anywhere</h4>
            <a
              href="https://www.secure.abetglobal.com/account/register"
              target="_blank"
              className="btn"
            >
              Start Trading{" "}
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className={styles.video}>
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "auto" }}
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

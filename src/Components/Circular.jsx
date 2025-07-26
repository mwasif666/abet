import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./CircularAnimation.module.css";

const CircularAnimation = () => {
  const points = [
    { id: 1, line1: "OPEN 24/5", line2: "MARKET" },
    { id: 2, line1: "STRONG", line2: "EQUITY" },
    { id: 3, line1: "INTERNATIONAL", line2: "SHARES" },
    { id: 4, line1: "TWO WAY", line2: "INVESTMENT" },
    { id: 5, line1: "BEST TRADING", line2: "SOLUTIONS" },
    { id: 6, line1: "WIDE INSTRUMENTS", line2: "RANGE" },
    { id: 7, line1: "LEVERAGED", line2: "TRANSACTIONS" },
    { id: 8, line1: "STATE OF THE ART", line2: "TECHNOLOGY" },
  ];

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Simple fade and slide up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={styles.wrapper}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={styles.animation}>
              <svg
                className={styles.atomAnimation}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 461 376"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill="transparent"
                  className={styles.aniPath}
                  d="M335 177.982C409.26 181.002 460.118 187.16 460.118 194.267C460.118 204.355 357.616 212.534 231.173 212.534C104.73 212.534 2.22754 204.355 2.22754 194.267C2.22754 187.898 43.0721 182.291 105 179.022"
                  stroke="#64B145"
                  strokeWidth="0.7"
                  strokeDasharray="5 5"
                />
                <path
                  fill="transparent"
                  className={styles.aniPath}
                  d="M91.2055 163C48.9325 208.191 31.0824 256.516 50.0418 288.548C78.3025 336.294 177.646 329.76 271.932 273.953C366.218 218.146 419.743 134.199 391.482 86.4526C369.363 49.083 303.701 44.9642 231 71.6952"
                  stroke="#64B145"
                  strokeWidth="0.7"
                  strokeDasharray="5 5"
                />
                <path
                  fill="transparent"
                  className={styles.aniPath}
                  d="M113.786 234.5C55.5315 184.455 27.3718 125.693 48.9561 88.3081C76.6977 40.2583 176.106 45.7159 270.992 100.498C365.877 155.28 420.308 238.642 392.566 286.691C371.049 323.961 306.416 329.039 234.22 303.879"
                  stroke="#64B145"
                  strokeWidth="0.7"
                  strokeDasharray="5 5"
                />
                <path
                  fill="transparent"
                  className={styles.aniPath}
                  d="M296.574 277.142C281.739 328.951 253.284 364 220.618 364C172.642 364 133.749 288.396 133.749 195.133C133.749 101.87 172.642 26.2653 220.618 26.2653C250.999 26.2653 277.736 56.5813 293.263 102.5"
                  stroke="#64B145"
                  strokeWidth="0.7"
                  strokeDasharray="5 5"
                />

                {/* Red dots - positioned to match the paths */}
                <circle cx="90" cy="149" r="4" fill="#BC202E" />
                <circle cx="231" cy="71.7" r="4" fill="#BC202E" />
                <circle cx="234.22" cy="303.88" r="4" fill="#BC202E" />
                <circle cx="391.482" cy="86.45" r="4" fill="#BC202E" />
                <circle cx="60" cy="208.27" r="4" fill="#BC202E" />
                <circle cx="385.12" cy="208.27" r="4" fill="#BC202E" />
                <circle cx="50.04" cy="288.55" r="4" fill="#BC202E" />
                <circle cx="392.566" cy="286.69" r="4" fill="#BC202E" />
              </svg>

              <div className={styles.points}>
                {points.map((point) => (
                  <div
                    key={point.id}
                    className={`${styles.point} ${styles[`point${point.id}`]}`}
                  >
                    <span>{point.line1}</span>
                    <span>{point.line2}</span>
                  </div>
                ))}
              </div>

              <div className={styles.imageWrap}>
                <img
                  src="/earth.png"
                  alt="Earth Globe"
                  className={styles.earthImage}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-items-center d-flex">
            <div className={styles.content_circle}>
              <h2>ABET Global - Leading Innovators in the Capital Markets</h2>
              <p>
                We stand out in the capital markets because of our
                state-of-the-art technology infrastructure. Our goal is to
                provide innovative solutions that meet the demands of today's
                investors.
                <br />
                Our clients have easy access to real-time financial data, market
                analysis, and critical information through our cutting-edge web
                platforms for Forex, stocks, metals & commodities, FX Indices,
                and Indices transactions. With the use of cutting-edge mobile
                communication tools, these platforms break down barriers of time
                and location while facilitating safe and rapid trading.
              </p>
              <div className="mt-4">
                <Link onClick={handleClick} to="/about">
                  More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CircularAnimation;

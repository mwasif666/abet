import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./AbetGlobalSection.module.css";
import { Link } from "react-router-dom";

const AbetGlobalSection = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className={`${styles.sectionContainer}`}>
      <div className="container">
        <div className="row">
          {/* Left Column - Spacer */}
          <div className="col-lg-4">
            <div className={styles.spacerColumn}>
              <img src="./phonr.png" alt="" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-8">
            <div className={styles.contentWrapper}>
              <div className="row">
                <div className="col-8">
                  <h2 className={styles.sectionHeading}>
                    Your Doorway to Excellent Diversified Trading is ABET
                    Global.
                  </h2>

                  <div className={styles.spacer}></div>

                  <p className={styles.sectionDescription}>
                    ABET Global, is the pinnacle of trading brokerage services
                    that goes beyond traditional limits. ABET Global offers a
                    platform where sophistication and expertise combine,
                    redefining the trading experience rather than just
                    facilitating trading.
                  </p>

                  <div className={styles.buttonWrapper}>
                    <Link
                      to="/AbetApp"
                      onClick={handleClick}
                      className={`btn ${styles.ctaButton}`}
                    >
                      <span className={styles.buttonContent}>
                        <FaArrowRight className={styles.buttonIcon} />
                        <span>View More</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbetGlobalSection;

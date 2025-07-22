import React from "react";
import { FaLaptop } from "react-icons/fa";
import styles from "./PlatformsSection.module.css";

const PlatformsSection = () => {
  return (
    <div className={`container ${styles.platformsContainer}`}>
      <div className="row">
        {/* Left Column - Content */}
        <div className="col-lg-6 col-md-12">
          <div className={styles.contentWrapper}>
            <h2 className={styles.mainHeading}>
              Experience Superior Trading Platforms with Advanced Technology
            </h2>

            <p className={styles.description}>
              Explore our trading platforms designed with cutting-edge
              technology, ensuring secure management of your investments in
              Forex, Stocks, Metals & Commodities and Indices markets. Enjoy
              ease of use and enhanced functionality for a seamless trading
              experience.
            </p>

            <h2 className={styles.subHeading}>MetaTrader 5</h2>

            {/* Desktop Button */}
            <div className={`d-none d-md-block ${styles.buttonWrapper}`}>
              <a
                href="https://abet.leosagitrades.com/meta-trader-5/"
                className={`btn ${styles.platformButton}`}
              >
                <span className={styles.buttonContent}>
                  <FaLaptop className={styles.buttonIcon} />
                  <span>View Our Platforms</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="col-lg-6 col-md-12">
          <div className={styles.imageWrapper}>
            <img
              src="./computer.png"
              alt="MetaTrader 5 Platform"
              className={styles.platformImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformsSection;

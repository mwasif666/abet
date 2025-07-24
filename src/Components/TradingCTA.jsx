import React from "react";
import styles from "./TradingCTA.module.css";

const TradingCTA = () => {
  return (
    <div className="container">
      <section className={`${styles.tradingSection} py-5`}>
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h2 className={styles.tradingTitle}>
              Find your desired account and Start Trading
            </h2>
            <p className={styles.tradingSubtitle}>
              More than 500 instruments worldwide
            </p>
          </div>
          <div className="col-lg-5 text-lg-end text-center">
            <a
              href="https://www.secure.abetglobal.com/account/register"
              className={`btn ${styles.tradingButton}`}
              role="button"
            >
              Start Trading
              <i className={`fas fa-arrow-right ms-2 ${styles.buttonIcon}`}></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradingCTA;

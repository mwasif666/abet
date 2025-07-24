// InstrumentsSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Instrument.module.css";

const InstrumentsSection = () => {
  const instruments = [
    {
      title: "Forex",
      description: "Trade over 40 major, minor, and exotic currency pairs",
      icon: <img src="/images/icon4.png" alt="Forex" width="48" height="48" />,
      path: "/account-types/forex",
    },
    {
      title: "Indices",
      description: "Trade as CFDs 15 of the most popular worldwide indexes",
      icon: (
        <img src="/images/icon5.png" alt="Indices" width="48" height="48" />
      ),
      path: "/account-types/indices",
    },
    {
      title: "Energies",
      description:
        "Trade the asset classes with the best exposure and coverage",
      icon: (
        <img src="/images/icon6.png" alt="Energies" width="48" height="48" />
      ),
      path: "/account-types/energies",
    },
    {
      title: "Metals",
      description: "Trade metals, such as silver and gold",
      icon: <img src="/images/icon7.png" alt="Metals" width="48" height="48" />,
      path: "/account-types/metals",
    },
    {
      title: "Cryptos",
      description: "Trade cryptocurrencies like Ethereum, Ripple, and Bitcoin",
      icon: (
        <img src="/images/icon8.png" alt="Cryptos" width="48" height="48" />
      ),
      path: "/account-types/cryptocurrency",
    },
  ];

  // Function to handle click and scroll to top
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className={`${styles.instruments} py-5`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className={styles.sectionTitle}>Instruments</h2>
          <p className={styles.sectionDescription}>
            Worldwide Markets, Your Trading Playground! Gain access to a
            multitude of markets to find your next trade.
          </p>
        </div>

        <div className="row g-4 d-flex justify-content-center">
          {instruments.map((instrument, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <Link
                to={instrument.path}
                className="text-decoration-none"
                onClick={handleClick}
              >
                <div className={`${styles.instrumentCard} h-100 p-4`}>
                  <div className={styles.instrumentIcon}>{instrument.icon}</div>
                  <h4 className={styles.instrumentTitle}>{instrument.title}</h4>
                  <p className={styles.instrumentDescription}>
                    {instrument.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstrumentsSection;

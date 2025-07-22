import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import styles from "../../Components/PricingSection.module.css";

const PrimeTable = () => {
  const packages = [
    {
      name: "Prime",
      features: [
        "Base Currency Options: USD",
        "Contract Size: 1 Lot = 100,000",
        "Leverage: Up to 1:1000",
        "Negative balance protection: yes",
        "Spread on all majors: As Low as 1 Pip",
        "Minimum Deposit: $10",
        "Commission: No",
        "Maximum open/pending orders per client: 200 Positions",
        "Minimum trade volume: 0.01 Lots",
        "Lot restriction per ticket: 20 Lots",
        "Hedging allowed: Yes",
        "Islamic Account: Yes",
        "Swap Free: Yes",
        "Spread: Floating",
        "Bonus facility: Yes",
        "Execution: Market",
        "Margin Call: 80%",
        "Stop out: 15%",
      ],
      highlight: false,
    },
  ];

  return (
    <div className={styles.packagesContainer}>
      <div className={`container px-5 ${styles.container}`}>
        <div className="row">
          {packages.map((pkg, index) => (
            <div key={index} className="col-12">
              <div
                className={`${styles.packageCard} ${
                  pkg.highlight ? styles.highlight : ""
                }`}
              >
                <div className={styles.cardHeader}>
                  <h3>{pkg.name}</h3>
                  {pkg.highlight && (
                    <div className={styles.popularBadge}>POPULAR</div>
                  )}
                </div>
                <div className={styles.cardBody}>
                  <ul className={styles.featuresList}>
                    {pkg.features.map((feature, i) => (
                      <li key={i}>
                        <FaCheckCircle className={styles.featureIcon} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.cardFooter}>
                  <button
                    className={`btn btn-primary btn-block ${styles.ctaButton}`}
                  >
                    Start Trading <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrimeTable;

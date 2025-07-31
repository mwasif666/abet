import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import styles from "../../Components/PricingSection.module.css";

const MicroTable = () => {
  const packages = [
    {
      name: "Micro",
      features: [
        "Base Currency Options: USD",
        "Contract Size: 1 Lot = 1,000",
        "Leverage: Up to 1:1000",
        "Negative balance protection: yes",
        "Spread on all majors: As Low as 1 Pip",
        "Minimum Deposit: $10",
        "Commission: No",
        "Maximum open/pending orders per client: 200 Positions",
        "Minimum trade volume: 0.10 Lots (MT5)",
        "Lot restriction per ticket: 200 Lots",
        "Hedging allowed: Yes",
        "Islamic Account: Yes",
        "Swap Free: Yes",
        "Spread: Floating",
        "Bonus facility: No",
        "Execution: Market",
        "Margin Call: 80%",
        "Stop out: 30%",
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
                  <a
                    href="https://secure.abetglobal.com/account/register"
                    className={`btn btn-primary btn-block ${styles.ctaButton}`}
                  >
                    Start Trading <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MicroTable;

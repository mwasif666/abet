import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import styles from "./PricingSection.module.css";
import { Link } from "react-router-dom";

const PackagesTable = () => {
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
    {
      name: "Raw Spread",
      features: [
        "Base Currency Options: USD",
        "Contract Size: 1 Lot = 100,000",
        "Leverage: Up to 1:500",
        "Negative balance protection: yes",
        "Spread on all majors: As Low as 0 Pip",
        "Minimum Deposit: $1000",
        "Commission: Yes",
        "Maximum open/pending orders per client: 200 Positions",
        "Minimum trade volume: 0.01 Lots (MT5)",
        "Lot restriction per ticket: 20 Lots",
        "Hedging allowed: Yes",
        "Islamic Account: Yes",
        "Swap Free: Yes",
        "Spread: Floating",
        "Bonus facility: No",
        "Execution: Market",
        "Margin Call: 80%",
        "Stop out: 0%",
      ],
      highlight: true,
    },
    {
      name: "Standard",
      features: [
        "Base Currency Options: USD",
        "Contract Size: 1 Lot = 100,000",
        "Leverage: Up to 1:1000",
        "Negative balance protection: yes",
        "Spread on all majors: As Low as 0.5 Pip",
        "Minimum Deposit: $10",
        "Commission: No",
        "Maximum open/pending orders per client: 200 Positions",
        "Minimum trade volume: 0.01 Lots",
        "Lot restriction per ticket: 20 Lots",
        "Hedging allowed: Yes",
        "Islamic Account: Yes",
        "Swap Free: Yes",
        "Spread: Floating",
        "Bonus facility: No",
        "Execution: Market",
        "Margin Call: 80%",
        "Stop out: 10%",
      ],
      highlight: false,
    },
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

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const title = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={styles.packagesContainer}>
      <motion.div
        className={`container py-5 ${styles.container}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.h2
          className={`text-center mb-5 ${styles.mainHeading}`}
          variants={title}
        >
          Account Choice, Your Trading Power!
        </motion.h2>

        <motion.div className="row" variants={container}>
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6 mb-4"
              variants={item}
            >
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
                  <Link to="https://secure.abetglobal.com/account/register">
                    <button
                      className={`btn btn-primary btn-block ${styles.ctaButton}`}
                    >
                      Start Trading <FaArrowRight className="ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PackagesTable;

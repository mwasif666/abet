import React from "react";
import { motion } from "framer-motion";
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  const section = {
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

  // Function to handle click and scroll to top
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      className={`${styles.instruments} py-5`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={section}
    >
      <div className="container">
        <motion.div
          className="text-center mb-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className={styles.sectionTitle} variants={item}>
            Instruments
          </motion.h2>
          <motion.p className={styles.sectionDescription} variants={item}>
            Worldwide Markets, Your Trading Playground! Gain access to a
            multitude of markets to find your next trade.
          </motion.p>
        </motion.div>

        <motion.div
          className="row g-4 d-flex justify-content-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {instruments.map((instrument, index) => (
            <motion.div
              key={index}
              className="col-md-4 col-sm-6"
              variants={item}
              whileHover="hover"
            >
              <Link
                to={instrument.path}
                className="text-decoration-none"
                onClick={handleClick}
              >
                <motion.div
                  className={`${styles.instrumentCard} h-100 p-4`}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className={styles.instrumentIcon}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {instrument.icon}
                  </motion.div>
                  <h4 className={styles.instrumentTitle}>{instrument.title}</h4>
                  <p className={styles.instrumentDescription}>
                    {instrument.description}
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InstrumentsSection;

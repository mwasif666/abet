import React from "react";
import { motion } from "framer-motion";
import { FaLaptop } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./PlatformsSection.module.css";

const PlatformsSection = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const contentVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2, // slight delay for the image
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className={`container ${styles.platformsContainer}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="row">
        {/* Left Column - Content */}
        <motion.div className="col-lg-6 col-md-12" variants={contentVariants}>
          <div className={styles.contentWrapper}>
            <motion.h2 className={styles.mainHeading}>
              Experience Superior Trading Platforms with Advanced Technology
            </motion.h2>

            <motion.p className={styles.description}>
              Explore our trading platforms designed with cutting-edge
              technology, ensuring secure management of your investments in
              Forex, Stocks, Metals & Commodities and Indices markets. Enjoy
              ease of use and enhanced functionality for a seamless trading
              experience.
            </motion.p>

            <motion.h2 className={styles.subHeading}>MetaTrader 5</motion.h2>

            {/* Desktop Button */}
            <div className={`d-none d-md-block ${styles.buttonWrapper}`}>
              <Link
                to="/meta-trader-5"
                onClick={handleClick}
                className={`btn ${styles.platformButton}`}
              >
                <motion.span
                  className={styles.buttonContent}
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  <FaLaptop className={styles.buttonIcon} />
                  <span>View Our Platforms</span>
                </motion.span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div className="col-lg-6 col-md-12" variants={imageVariants}>
          <div className={styles.imageWrapper}>
            <motion.img
              src="./computer.png"
              alt="MetaTrader 5 Platform"
              className={styles.platformImage}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PlatformsSection;

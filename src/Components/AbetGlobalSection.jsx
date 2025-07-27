import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./AbetGlobalSection.module.css";

const AbetGlobalSection = () => {
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
        staggerChildren: 0.3,
        when: "beforeChildren",
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
    <motion.section
      className={`${styles.sectionContainer}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container">
        <div className="row">
          {/* Left Column - Spacer */}
          <motion.div className="col-lg-4" variants={imageVariants}>
            <div className={styles.spacerColumn}>
              <motion.img
                src="./phonr.png"
                alt=""
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className="col-lg-8 col-12" variants={contentVariants}>
            <div className={styles.contentWrapper}>
              <div className="row">
                <div className={`col-lg-8 col-12 ${styles.contentGlobal}`}>
                  <motion.h2 className={styles.sectionHeading}>
                    Your Doorway to Excellent Diversified Trading is ABET
                    Global.
                  </motion.h2>

                  <motion.div
                    className={styles.spacer}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />

                  <motion.p className={styles.sectionDescription}>
                    ABET Global, is the pinnacle of trading brokerage services
                    that goes beyond traditional limits. ABET Global offers a
                    platform where sophistication and expertise combine,
                    redefining the trading experience rather than just
                    facilitating trading.
                  </motion.p>

                  <motion.div
                    className={styles.buttonWrapper}
                    variants={buttonVariants}
                  >
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
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AbetGlobalSection;

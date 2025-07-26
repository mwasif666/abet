import React, { useState, useEffect } from "react";
import styles from "./HomeBanner.module.css";
import { motion } from "framer-motion";

const HomeBanner = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // 3-second delay before animations start

    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const videoVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="container">
      <motion.div
        className={`row d-flex align-items-center h-100 ${styles.reverse}`}
        initial="hidden"
        animate={showContent ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="col-lg-6">
          <motion.div className={styles.contant_banner}>
            <motion.h5 variants={textVariants}>
              Welcome to ABET Global
            </motion.h5>
            <motion.h1 variants={textVariants}>
              It's Your Turn to
              <motion.span
                style={{ display: "inline-block" }}
                animate={
                  showContent
                    ? {
                        color: ["#ffffff", "#4dff4d", "#ffffff"],
                        transition: {
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "reverse",
                        },
                      }
                    : {}
                }
              >
                {" "}
                Profit
              </motion.span>
            </motion.h1>
            <motion.h4 variants={textVariants}>
              Trade Anytime Anywhere
            </motion.h4>
            <motion.a
              href="https://www.secure.abetglobal.com/account/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Start Trading
            </motion.a>
          </motion.div>
        </div>
        <div className="col-lg-6">
          <motion.div className={styles.video} variants={videoVariants}>
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "auto" }}
            ></video>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeBanner;

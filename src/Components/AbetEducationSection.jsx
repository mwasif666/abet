import React from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaBook,
  FaVideo,
  FaChartLine,
  FaNewspaper,
} from "react-icons/fa";
import styles from "./AbetEducationSection.module.css";

const AbetEducationSection = () => {
  const educationItems = [
    {
      icon: <FaBookOpen className={styles.icon} />,
      title: "FINANCE DICTIONARY",
      link: "/ForexDictionary",
    },
    {
      icon: <FaBook className={styles.icon} />,
      title: "OUR EDUCATION BOOKS",
      link: "#",
    },
    {
      icon: <FaVideo className={styles.icon} />,
      title: "TUTORIALS",
      link: "#",
    },
    {
      icon: <FaChartLine className={styles.icon} />,
      title: "TRAININGS & ANALYSIS",
      link: "#",
    },
    {
      icon: <FaNewspaper className={styles.icon} />,
      title: "EDUCATIONAL ARTICLES",
      link: "#",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemLeft = {
    hidden: {
      x: -100,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.8,
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const itemRight = {
    hidden: {
      x: 100,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.8,
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const icon = {
    hover: {
      rotate: [0, 10, -5, 0],
      scale: 1.2,
      transition: {
        duration: 0.6,
      },
    },
  };

  const header = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.section
      className={styles.educationSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="container">
        <motion.div className={styles.header} variants={header}>
          <h2 className={styles.mainTitle}>ABET Global Education</h2>
          <div className={styles.description}>
            <p>Comprehensive Financial Education and Training Resources</p>
            <p>
              Benefit from our unique educational support, featuring a robust
              financial education library, online courses, seminars, books, and
              videos.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={`row row-cols-lg-5 row-cols-2 ${styles.educationGrid}`}
          variants={container}
        >
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              className={`col ${styles.educationItem}`}
              variants={index % 2 === 0 ? itemLeft : itemRight}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className={styles.iconWrapper}
                variants={icon}
                whileHover="hover"
              >
                {item.icon}
              </motion.div>
              <h3 className={styles.itemTitle}>
                {item.title.split(" ").map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    <br />
                  </React.Fragment>
                ))}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AbetEducationSection;

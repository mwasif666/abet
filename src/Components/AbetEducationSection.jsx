import React from "react";
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
      link: "#",
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

  return (
    <section className={styles.educationSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>ABET Global Education</h2>
          <div className={styles.description}>
            <p>Comprehensive Financial Education and Training Resources</p>
            <p>
              Benefit from our unique educational support, featuring a robust
              financial education library, online courses, seminars, books, and
              videos.
            </p>
          </div>
        </div>

        <div className={`row row-cols-lg-5 row-cols-2 ${styles.educationGrid}`}>
          {educationItems.map((item, index) => (
            <div key={index} className={`col ${styles.educationItem}`}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.itemTitle}>
                {item.link ? (
                  <a className={styles.itemLink}>
                    {item.title.split(" ").map((word, i) => (
                      <React.Fragment key={i}>{word}</React.Fragment>
                    ))}
                  </a>
                ) : (
                  <>
                    {item.title.split(" ").map((word, i) => (
                      <React.Fragment key={i}>
                        {word}
                        <br />
                      </React.Fragment>
                    ))}
                  </>
                )}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AbetEducationSection;

import React from "react";
import styles from "./ContactBanner.module.css";

const ContactBanner = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.contactContainer}>
        <div className={styles.contactContent}>
          <h1 className={styles.contactTitle}>Contact us</h1>
          <h2 className={styles.contactSubtitle}>
            Customer Service and Support
          </h2>
          <p className={styles.contactDescription}>
            Contact us for answers to all of your trading questions.
          </p>
        </div>
        <div className={styles.contactImage}>
          {/* <img
            src="https://abet.leosagitrades.com/wp-content/uploads/2021/11/shape-1.svg"
            alt="Contact illustration"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;

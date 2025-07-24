import React from "react";
import styles from "./ContactCards.module.css";

const ContactCards = () => {
  return (
    <div className={`container ${styles.contactCardsContainer}`}>
      <h2 className={styles.sectionTitle}>You can reach us by:</h2>

      <div className="row">
        {/* Email Card */}
        <div className="col-md-4 mb-4">
          <div className={`card h-100 ${styles.contactCard}`}>
            <div className={`card-body ${styles.cardBody}`}>
              <div className={styles.cardHeader}>
                <i className={`fas fa-envelope ${styles.cardIcon}`}></i>
                <h5 className={styles.cardTitle}>Email</h5>
              </div>
              <ul className={`list-unstyled ${styles.contactList}`}>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>Support</span>
                  <a
                    href="mailto:support@abetglobal.com"
                    className={styles.contactLink}
                  >
                    support@abetglobal.com
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>Information</span>
                  <a
                    href="mailto:info@abetglobal.com"
                    className={styles.contactLink}
                  >
                    info@abetglobal.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phone Card */}
        <div className="col-md-4 mb-4">
          <div className={`card h-100 ${styles.contactCard}`}>
            <div className={`card-body ${styles.cardBody}`}>
              <div className={styles.cardHeader}>
                <i className={`fas fa-phone-alt ${styles.cardIcon}`}></i>
                <h5 className={styles.cardTitle}>Phone</h5>
              </div>
              <ul className={`list-unstyled ${styles.contactList}`}>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>Call Now</span>
                  <a href="tel:+35924928517" className={styles.contactLink}>
                    +35924928517
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>WhatsApp</span>
                  <a
                    href="https://wa.me/+447548718055"
                    className={styles.contactLink}
                  >
                    +447548718055
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>
                    Monday through Friday
                  </span>
                  <span className={styles.contactValue}>24/5</span>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>
                    Saturday and Sunday
                  </span>
                  <span className={styles.contactValue}>
                    9:00 a.m. to 6:00 p.m. GMT
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mail Card */}
        <div className="col-md-4 mb-4">
          <div className={`card h-100 ${styles.contactCard}`}>
            <div className={`card-body ${styles.cardBody}`}>
              <div className={styles.cardHeader}>
                <i className={`fas fa-map-marker-alt ${styles.cardIcon}`}></i>
                <h5 className={styles.cardTitle}>Mail</h5>
              </div>
              <ul className={`list-unstyled ${styles.contactList}`}>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>Write Us at</span>
                  <address className={styles.contactAddress}>
                    1618, Sq Manastirski livadi,
                    <br />
                    34 Ralevista street, sofia,
                    <br />
                    Bulgaria, P.O.Box 1404
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;

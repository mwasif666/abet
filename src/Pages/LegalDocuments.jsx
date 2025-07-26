import React from "react";
import styles from "../style/LegalDocuments.module.css";
import {
  FaFileContract,
  FaExclamationTriangle,
  FaComments,
  FaCogs,
  FaBolt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const LegalDocuments = () => {
  const documentsLeft = [
    {
      title: "Client Agreement",
      url: "https://abet.leosagitrades.com/wp-content/uploads/2025/02/Client-Agreement.pdf",
      icon: <FaFileContract className={styles.documentIcon} />,
      color: "#3498db",
    },
    {
      title: "Risk Disclosure",
      url: "https://abet.leosagitrades.com/wp-content/uploads/2024/10/Risk-Disclosure.pdf",
      icon: <FaExclamationTriangle className={styles.documentIcon} />,
      color: "#e74c3c",
    },
    {
      title: "Complaint Management",
      url: "https://abet.leosagitrades.com/wp-content/uploads/2024/10/Complaint-Management.pdf",
      icon: <FaComments className={styles.documentIcon} />,
      color: "#2ecc71",
    },
  ];

  const documentsRight = [
    {
      title: "Complaint Handling Procedure",
      url: "https://abet.leosagitrades.com/wp-content/uploads/2024/10/Complaint-Handeling-Procedure.pdf",
      icon: <FaCogs className={styles.documentIcon} />,
      color: "#9b59b6",
    },
    {
      title: "Execution Policy",
      url: "https://abet.leosagitrades.com/wp-content/uploads/2024/10/Execution-Policy.pdf",
      icon: <FaBolt className={styles.documentIcon} />,
      color: "#f39c12",
    },
  ];

  return (
    <div className={styles.legalDocumentsWrapper}>
      <div className={`container ${styles.legalDocuments}`}>
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className={styles.pageTitle}>Legal Documents</h1>
            <p className={styles.pageSubtitle}>
              Access all our legal policies and agreements
            </p>
            <div className={styles.titleUnderline}></div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className={`card ${styles.documentCard}`}>
              <div className={`card-header ${styles.cardHeader}`}>
                <h3 className={styles.cardTitle}>Agreements & Policies</h3>
              </div>
              <div className="card-body p-0">
                <ul className="list-group list-group-flush">
                  {documentsLeft.map((doc, index) => (
                    <li
                      key={index}
                      className={`list-group-item ${styles.listItem}`}
                    >
                      <a
                        href={doc.url}
                        className={styles.documentLink}
                        style={{ "--icon-color": doc.color }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className={styles.iconWrapper}>{doc.icon}</span>
                        <span className={styles.documentTitle}>
                          {doc.title}
                        </span>
                        <FaExternalLinkAlt
                          className={styles.externalLinkIcon}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={`card ${styles.documentCard}`}>
              <div className={`card-header ${styles.cardHeader}`}>
                <h3 className={styles.cardTitle}>Procedures & Guidelines</h3>
              </div>
              <div className="card-body p-0">
                <ul className="list-group list-group-flush">
                  {documentsRight.map((doc, index) => (
                    <li
                      key={index}
                      className={`list-group-item ${styles.listItem}`}
                    >
                      <a
                        href={doc.url}
                        className={styles.documentLink}
                        style={{ "--icon-color": doc.color }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className={styles.iconWrapper}>{doc.icon}</span>
                        <span className={styles.documentTitle}>
                          {doc.title}
                        </span>
                        <FaExternalLinkAlt
                          className={styles.externalLinkIcon}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalDocuments;

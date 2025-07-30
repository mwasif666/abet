import React, { useState } from "react";
import styles from "./ForexAccordion.module.css";

const AccountAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "What are the different types of trading accounts at ABET Global?",
      content:
        "ABET Global offers four types of trading accounts: Micro, Raw Spread, Standard, and Prime. Each account has specific features such as leverage options, minimum deposits, and spreads to suit different trading styles and experience levels.",
    },
    {
      title: "What is the minimum deposit requirement for each account?",
      content:
        "For Micro, Standard, and Prime accounts, the minimum deposit is $1000. The Raw Spread account also has a $10 minimum deposit, making it affordable for traders at all levels.",
    },
    {
      title: "What leverage options are available?",
      content:
        "ABET Global offers leverage up to 1:1000 for Micro, Standard, and Prime accounts. The Raw Spread account provides leverage up to 1:500, allowing traders to maximize their positions based on risk appetite.",
    },
    {
      title: "What are spreads, and how low can they be at ABET Global?",
      content:
        "The spread represents the price difference between buying and selling an asset. At ABET Global, spreads on major currency pairs can be as low as 0.5 pips (Raw Spread) or 1 pip (Micro, Standard, Prime accounts), ensuring competitive pricing.",
    },
    {
      title: "Are there any commissions on trades?",
      content:
        "No, ABET Global does not charge any commission on trades across all account types, which helps traders save on costs.",
    },
    {
      title: "What are the contract sizes for different accounts?",
      content:
        "For the Micro account, 1 lot equals 1,000 units, while for Raw Spread, Standard, and Prime accounts, 1 lot equals 100,000 units, catering to different trading volumes.",
    },
    {
      title: "Does ABET Global offer negative balance protection?",
      content:
        "Yes, ABET Global provides negative balance protection across all accounts, ensuring traders do not lose more than their deposited amount.",
    },
    {
      title: "Is hedging allowed?",
      content:
        "Yes, hedging is allowed on all account types at ABET Global. This helps traders manage risk by holding offsetting positions.",
    },
    {
      title: "Are Islamic accounts available?",
      content:
        "Yes, Islamic (swap-free) accounts are available for traders who follow Shariah law, offering an interest-free trading environment.",
    },
    {
      title: "What are the trading bonuses offered?",
      content:
        "Currently, the Prime account offers bonus facilities, while the other account types do not provide any trading bonuses.",
    },
  ];

  return (
    <div className={`${styles.accordionContainer} container`}>
      <div className="accordion" id="forexAccordion">
        {accordionItems.map((item, index) => (
          <div className={`${styles.cardWrapper} card`} key={index}>
            <div className={`${styles.cardHeader} card-header`}>
              <button
                className={`${styles.cardHeaderButton} btn btn-link`}
                type="button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`collapse-${index}`}
              >
                <span className={styles.title}>{item.title}</span>
                <div className={styles.rightIconGroup}>
                  <div
                    className={`${styles.normalIcon} ${
                      activeIndex === index ? styles.hidden : ""
                    }`}
                  >
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-chevron-down"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                  </div>
                  <div
                    className={`${styles.activeIcon} ${
                      activeIndex === index ? "" : styles.hidden
                    }`}
                  >
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-chevron-up"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
            <div
              id={`collapse-${index}`}
              className={`${styles.cardExpand} collapse ${
                activeIndex === index ? "show" : ""
              }`}
            >
              <div className="card-body">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <p className="panel-title">
                      <span>{item.content}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountAccordion;

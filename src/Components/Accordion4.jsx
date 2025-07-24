import React, { useState } from "react";
import styles from "./ForexAccordion.module.css";

const Accordion4 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "What is Precious Metals Trading?",
      content:
        "Precious metals trading involves buying and selling metals like gold, silver, platinum, and palladium, either physically or through financial instruments like futures contracts, spot prices, and options. Investors trade these metals to profit from price fluctuations or as a hedge against inflation and market instability.",
    },
    {
      title: "Why Trade Precious Metals with ABET Global?",
      content: (
        <>
          ABET Global offers multiple benefits for precious metals traders:
          <ul>
            <li>
              No requotes: Trade gold and silver without any delays in
              execution.
            </li>
            <li>
              Alternative investment: A strong option for diversifying beyond
              Forex.
            </li>
            <li>No swap fees on any accounts.</li>
            <li>
              High leverage: Trade with leverage up to 1:1000, allowing for
              larger exposure with a smaller investment.
            </li>
            <li>No additional fees, ensuring transparency.</li>
          </ul>
        </>
      ),
    },
    {
      title: "What Precious Metals Can I Trade with ABET Global?",
      content: (
        <>
          With ABET Global, you can trade key precious metals including:
          <ul>
            <li>Gold: A safe-haven asset and long-term investment.</li>
            <li>Silver: Known for industrial use and monetary value.</li>
            <li>
              Platinum & Palladium: Rare and valuable metals used in industries
              such as automotive and healthcare.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How Does Leverage Work in Precious Metals Trading?",
      content:
        "You can take control of a bigger position than you initially invested because of leverage. For example, with leverage up to 1:1000, a $100 deposit can control a position worth $100,000. However, leverage amplifies both potential gains and losses, so it should be used carefully.",
    },
    {
      title: "What is the Difference Between Going Long and Going Short?",
      content: (
        <>
          <ul>
            <li>
              Going Long means you buy precious metals, expecting their price to
              rise.
            </li>
            <li>
              Going Short means you sell metals you don't own, expecting their
              price to fall. Because of this flexibility, traders can make
              profits in markets that are rising or dropping.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "What Are the Trading Conditions for Precious Metals?",
      content: (
        <>
          <p>
            <strong>Trading conditions include:</strong>
          </p>
          <ul>
            <li>
              Margin requirements: Calculated as Lots × Contract Size × Open
              Price ÷ Lowest of Account or Symbol Leverage.
            </li>
            <li>
              Hedging margin: A 50% margin applies for hedged positions when
              margin levels exceed 100%.
            </li>
            <li>
              No automatic rollover: Expiring contracts must be monitored as
              ABET Global does not offer rollover for expiring instruments.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "What Factors Affect the Prices of Precious Metals?",
      content: (
        <>
          Several factors drive price fluctuations in the precious metals
          market, such as:
          <ul>
            <li>
              Global political and economic instability: Precious metals,
              especially gold, act as a haven during uncertain times.
            </li>
            <li>
              Demand from industries: Silver, platinum, and palladium are
              heavily used in industries like electronics and automotive.
            </li>
            <li>
              Investment speculation: Financial institutions and investors
              contribute to price movements through large-scale buying and
              selling.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Are There Any Swap Fees in Precious Metals Trading?",
      content:
        "Swap fees are applied if positions remain open overnight. However, ABET Global offers no swap fees on Raw Spread, Standard, Micro and Prime accounts, providing an advantage for longer-term traders.",
    },
    {
      title: "What Are the Advantages of Precious Metals as an Investment?",
      content: (
        <>
          Precious metals are:
          <ul>
            <li>
              Stores of wealth: Gold and silver retain value during economic
              downturns.
            </li>
            <li>
              Hedges against inflation: Precious metals often appreciate when
              inflation rises.
            </li>
            <li>
              Diversification: They provide an alternative investment to
              currencies and stocks, balancing your portfolio.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Why Do Precious Metals Like Gold and Silver Retain Value?",
      content:
        "Precious metals have intrinsic qualities such as durability, rarity, and global demand, making them valuable regardless of economic conditions. Gold, for example, is not significantly affected by production levels, instead being influenced by political and economic factors, thus making it a reliable asset in times of uncertainty.",
    },
    {
      title: "What Makes Platinum and Palladium Attractive Investments?",
      content:
        "Platinum and palladium are highly valued for their rarity and industrial applications, particularly in the automotive, electronics, and healthcare sectors. Their prices can often exceed gold, particularly during periods of industrial growth, though they are more volatile than gold.",
    },
    {
      title: "How Do Futures Contracts Work in Precious Metals Trading?",
      content:
        "Futures contracts allow traders to lock in prices for future transactions, helping protect against sudden price fluctuations. By trading futures, investors can profit whether the market is rising or falling, making them a flexible investment tool.",
    },
    {
      title: "How Can I Start Trading Precious Metals with ABET Global?",
      content:
        "To begin, simply open an account with ABET Global, deposit funds, and access the trading platform. Choose from metals like gold, silver, platinum, or palladium, and start trading with high leverage and no hidden fees.",
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
                    {typeof item.content === "string" ? (
                      <p className="panel-title">
                        <span>{item.content}</span>
                      </p>
                    ) : (
                      item.content
                    )}
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

export default Accordion4;

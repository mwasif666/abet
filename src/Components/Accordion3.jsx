import React, { useState } from "react";
import styles from "./ForexAccordion.module.css";

const Accordion3 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "What is Oil and Energy Trading?",
      content:
        "Oil and energy trading involves buying and selling energy commodities like crude oil, natural gas, and other energy resources. Traders speculate on the price movements of these commodities, aiming to make a profit by buying low and selling high or selling high and buying low. The dynamics of global supply and demand have an impact on these markets.",
    },
    {
      title: "Why Should I Trade Oil and Energy with ABET Global?",
      content: (
        <>
          ABET Global offers several advantages for energy traders:
          <ul>
            <li>
              High volatility, which means significant price movement
              opportunities.
            </li>
            <li>Trade oil, the world's most traded commodity.</li>
            <li>
              You can earn from both rising and declining markets by going long
              or short.
            </li>
            <li>Start trading with a margin as low as $10</li>
            <li>
              No overnight financing charges on oil trades, reducing trading
              costs.
            </li>
            <li>
              No additional fees, ensuring transparency and no hidden costs.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "What Makes Energy Trading Volatile?",
      content: (
        <>
          Energy prices are highly volatile due to several factors:
          <ul>
            <li>
              Political unrest in areas that produce oil may cause supply to be
              disrupted.
            </li>
            <li>
              Environmental factors, such as extreme weather, can impact supply
              and demand.
            </li>
            <li>
              Economic conditions also play a role; during periods of economic
              growth, energy consumption rises, while it falls during downturns.
              These factors contribute to rapid price fluctuations, creating
              opportunities for traders.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Can I Trade Oil and Energy 24/7?",
      content:
        "No, oil and energy trading is typically available five days a week. However, oil trading is a global 24-hour market, so you can take advantage of price changes around the clock on trading days.",
    },
    {
      title: "What Does It Mean to Go Long or Short in Energy Trading?",
      content:
        "Going long means buying a commodity (e.g., oil) in anticipation that its price will rise. Going short means selling a commodity you don't own, expecting its price to fall. ABET Global allows you to do both, depending on the market's direction, providing flexibility to profit in both rising and falling markets.",
    },
    {
      title: "What is the Minimum Margin Requirement for Oil Trading?",
      content:
        "The minimum margin requirement for oil trading at ABET Global is calculated as: Lots × Contract Size × Open Price ÷ Lower of Account Leverage or Symbol Leverage This allows you to start trading with as little as $5 in margin.",
    },
    {
      title:
        "Are There Any Fees or Financing Charges for Holding Oil Positions Overnight?",
      content:
        "No, ABET Global does not charge overnight financing fees on oil trades, making it a cost-effective option for traders looking to hold positions for longer periods.",
    },
    {
      title: "What Happens If I Hold an Oil Position Over the Weekend?",
      content:
        "If you keep an oil position open over the weekend, you will not be charged a swap fee.",
    },
    {
      title: "What Happens If Energy Prices Drop to Zero?",
      content:
        "In the rare event that energy prices, such as oil or natural gas, drop to zero, ABET Global will close all open positions at the last available price. This ensures that you are not left with unmanageable losses.",
    },
    {
      title:
        "Does ABET Global Offer Automatic Contract Rollover for Expiring Instruments?",
      content:
        "No, ABET Global does not offer automatic contract rollovers for expiring instruments. All open positions will be closed on the expiration date, so you must monitor your trades and manage them accordingly.",
    },
    {
      title: "What Are the Key Factors Affecting Energy Prices?",
      content: (
        <>
          Energy prices are driven by several factors:
          <ul>
            <li>Global supply and demand conditions.</li>
            <li>
              Political and environmental events, such as wars, sanctions, or
              natural disasters.
            </li>
            <li>
              Economic cycles, with prices rising during economic growth and
              falling during downturns. These factors make energy markets
              particularly volatile and ideal for short-term traders looking to
              capitalize on price movements.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How Can I Manage Risk in Oil and Energy Trading?",
      content: (
        <>
          Risk management is essential in energy trading due to high volatility.
          Some strategies include:
          <ul>
            <li>Setting stop-loss orders to limit potential losses.</li>
            <li>
              Exercise caution when using leverage since it can increase gains
              as well as losses.
            </li>
            <li>
              Diversifying your portfolio to minimize exposure to a single
              market.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How Do I Start Trading Oil and Energy with ABET Global?",
      content:
        "To start trading, simply open an account with ABET Global, deposit funds, and access the trading platform. You can then choose your preferred energy commodity, such as oil or natural gas, and start trading with low margins and no hidden fees.",
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

export default Accordion3;

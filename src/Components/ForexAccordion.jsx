import React, { useState } from "react";
import styles from "./ForexAccordion.module.css";

const ForexAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "What is Forex Trading?",
      content:
        "Forex trading, also known as currency trading or FX trading, involves exchanging one currency for another in a global, decentralized marketplace. Traders participate to speculate on currency movements or hedge against risks. The FX market, which is open 24 hours a day, five days a week, is the largest financial market in the world.",
    },
    {
      title: "Why is Forex Trading Popular?",
      content:
        "Forex trading is popular because of its liquidity, accessibility, and 24/5 availability. Traders can start with relatively low capital and access various currency pairs, with opportunities to profit in rising and falling markets. Leveraged trading, which allows traders to control larger positions with smaller investments, also attracts many participants.",
    },
    {
      title: "How Does Forex Trading Work?",
      content:
        "Forex trading works by speculating on the price movement of currency pairs. For example, if you think the euro will strengthen against the dollar (EUR/USD), you buy euros (go long) and sell dollars. You make profits when the market moves in your favor; you lose when it goes against you.",
    },
    {
      title: "What are Currency Pairs in Forex Trading?",
      content:
        "The exchange rate between two currencies is represented by currency pairings. The base currency is the first one, while the quote currency is the second. For instance, the base currency in EUR/USD is EUR, whereas the quote currency is USD. If the price is 1.20, it means 1 euro can be exchanged for 1.20 US dollars.",
    },
    {
      title: "Why Trade Forex with ABET Global?",
      content: (
        <>
          ABET Global offers several advantages for forex traders:
          <ul>
            <li>
              Access to over 50 currency pairs, including major, cross, and
              exotic currencies.
            </li>
            <li>Trade 24/5 with leverage up to 1:1000.</li>
            <li>
              Zero swap fees on Raw Spread, Micro, Standard and Prime Accounts.
            </li>
            <li>Tight spreads with no re-quotes and no hidden fees.</li>
            <li>
              Real-time market pricing and a user-friendly online trading
              platform.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "What is Leverage, and How Does it Work in Forex Trading?",
      content:
        "With the help of leverage, traders may manage greater positions with less capital. For example, ABET Global offers leverage up to 1:1000, meaning you can control $1,000,000 worth of currency with just $1,000. While leverage can increase potential profits, it also amplifies potential losses, making risk management crucial.",
    },
    {
      title: "What is a Swap Fee in Forex Trading?",
      content:
        "We do not charge a swap fee for the first 45 days. After 45 days, a daily trade holding fee will apply.",
    },
    {
      title: "What are the Forex Trading Hours with ABET Global?",
      content:
        "Forex trading hours at ABET Global are Monday to Friday, from 00:05 to 23:50 GMT+2. The market is open 24 hours a day during these days, allowing traders to execute trades at their convenience, except on weekends.",
    },
    {
      title:
        "What are the Leverage Limits on Specific Currency Pairs at ABET Global?",
      content: (
        <>
          ABET Global provides different leverage limits for certain currency
          pairs:
          <ul>
            <li>
              1:50 leverage on EURDKK, EURHKD, GBPDKK, USDDKK, USDHKD, and
              USDCNH.
            </li>
            <li>1:100 leverage on USDTRY and EURTRY.</li>
            <li>1:400 leverage on all CHF currency pairs.</li>
          </ul>
          These limits are in place to manage risk, as certain pairs may be more
          volatile than others.
        </>
      ),
    },
    {
      title: "How Can I Start Trading Forex with ABET Global?",
      content:
        "To start trading with ABET Global, you need to open an account, which you can fund in your local currency. Once your account is set up, you'll have access to over 50 currency pairs and a user-friendly trading platform where you can buy and sell currencies at your convenience. The platform offers real-time pricing, tight spreads, and the flexibility to trade with various leverage options.",
    },
    {
      title: "What Tools Does ABET Global Provide for Forex Traders?",
      content:
        "ABET Global offers advanced charting tools, real-time price feeds, educational resources, and automated trading strategies. These tools help traders make informed decisions and effectively manage their trades. Additionally, ABET Global provides 24/5 customer support to assist traders at every step.",
    },
    {
      title: "What Should I Consider Before Trading Forex?",
      content:
        "Before trading forex, it's essential to understand the risks involved, including the potential for significant losses due to leverage. You should also be aware of market volatility, currency pair liquidity, and economic factors that affect currency prices. Using proper risk management strategies, such as setting stop-losses and not over-leveraging, is crucial for long-term success.",
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

export default ForexAccordion;

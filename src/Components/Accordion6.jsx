import React, { useState } from "react";
import styles from "./ForexAccordion.module.css";

const Accordion6 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "What is Cryptocurrency Trading?",
      content:
        "Cryptocurrency trading involves buying and selling digital assets like Bitcoin, Ethereum, and other altcoins on a decentralized network. Traders speculate on the price movements of these assets to make a profit. Unlike traditional markets, cryptocurrency trading is available 24/7.",
    },
    {
      title: "Why Trade Cryptocurrencies with ABET Global?",
      content: (
        <>
          ABET Global offers several advantages for cryptocurrency traders, such
          as:
          <ul>
            <li>24/7 trading access all week long.</li>
            <li>Zero commissions on all trades.</li>
            <li>
              Leverage up to 1:500, allowing you to control larger positions
              with a smaller investment.
            </li>
            <li>
              The option to go long (buy) or short (sell), depending on market
              conditions.
            </li>
            <li>
              Tight spreads with no re-quotes, ensuring you get competitive
              pricing.
            </li>
            <li>A solid alternative investment to forex trading.</li>
          </ul>
        </>
      ),
    },
    {
      title:
        "What is Leverage in Cryptocurrency Trading, and How Does It Work?",
      content:
        "With less capital, traders may expand their market exposure through the use of leverage. ABET Global offers leverage up to 1:500, meaning you can control a $500,000 position with just $1,000. While leverage can magnify profits, it also increases the potential for losses, so proper risk management is crucial.",
    },
    {
      title: "Can I Trade Cryptocurrencies Anytime?",
      content:
        "Yes, cryptocurrency trading with ABET Global is available 24/7, unlike traditional financial markets. This means you can trade at any time of the day or week, taking advantage of market movements whenever they occur.",
    },
    {
      title: "What is the Swap Fee for Cryptocurrency Trading?",
      content:
        "Swap fees are charged when you hold a cryptocurrency position overnight, from Monday to Friday. If you hold a position overnight on Friday, you will be charged triple the swap fee to account for the weekend. Swap fees are processed at 00:00 GMT+2 and may take a few minutes to complete.",
    },
    {
      title:
        "How Does ABET Global Ensure Service Quality in Cryptocurrency Trading?",
      content:
        "ABET Global maintains high-quality service by performing brief server maintenance on weekends. During this time, cryptocurrency trading will be unavailable. The downtime is short and ensures optimal performance throughout the week. Additionally, trading conditions may vary depending on market dynamics, and availability can change as per market conditions.",
    },
    {
      title: "What Does It Mean to Go Long or Short in Cryptocurrency Trading?",
      content:
        "Going long means buying a cryptocurrency, and speculating that its value will rise. Going short means selling a cryptocurrency you don't own, speculating that its price will fall. ABET Global allows traders to take either position, giving you flexibility to trade in both rising and falling markets.",
    },
    {
      title: "What Are Tight Spreads, and Why Are They Important?",
      content:
        "A tight spread means there is a small difference between the buy and sell price of a cryptocurrency. This is important because it reduces the cost of entering and exiting trades. ABET Global offers tight spreads with no re-quotes, which ensures traders get the best possible prices without delays.",
    },
    {
      title: "What Are the Margin Requirements for Cryptocurrency Trading?",
      content:
        "When hedging positions on derivatives, ABET Global maintains a margin requirement of 50%, provided the margin level is above 100%. This ensures traders have enough funds to cover potential losses while maintaining their open positions.",
    },
    {
      title: "What Should I Consider Before Trading Cryptocurrencies?",
      content:
        "Before trading cryptocurrencies, it's important to understand the volatility of these markets. Prices can change rapidly, leading to a high potential for both profits and losses. You should also be aware of the risks involved with leverage, as it can amplify both gains and losses. Using proper risk management strategies, such as setting stop-losses and not over-leveraging, is crucial for long-term success.",
    },
    {
      title: "How Can I Start Trading Cryptocurrencies with ABET Global?",
      content:
        "To start trading with ABET Global, simply open an account, fund it in your local currency, and access the cryptocurrency market via the platform. You'll have the ability to trade 24/7 with leverage, go long or short, and enjoy zero commissions and tight spreads on all trades.",
    },
    {
      title:
        "What are the Advantages of Cryptocurrency as an Investment Option?",
      content:
        "Cryptocurrencies are a popular investment option because of their high volatility, offering opportunities for significant profits in a short time. They also provide a diversification opportunity away from traditional assets like stocks or forex. With ABET Global, you can trade these assets without commissions and take advantage of flexible leverage options.",
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

export default Accordion6;

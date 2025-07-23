import React, { useState } from "react";
import styles from "./ForexAccordion.module.css";

const Accordion2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "What is Stock indices trading?",
      content:
        "Stock indices trading involves speculating on the price movements of stock market indices. Instead of buying individual stocks, traders invest in indices, which represent the performance of a group of companies in a specific market. This allows traders to gain exposure to the entire market without purchasing shares in each company.",
    },
    {
      title:
        "What are the advantages of trading Stock indices with ABET Global?",
      content: (
        <>
          ABET Global offers several advantages for Stock indices trading,
          including:
          <ul>
            <li>
              Cost-efficient access to global markets: You can trade on major
              indices from around the world without high fees.
            </li>
            <li>
              Flexibility: Profit from both rising and falling markets by going
              long (buy) or short (sell).
            </li>
            <li>
              High leverage: With leverage up to 1:500, you can maximize your
              market exposure with a smaller investment.
            </li>
            <li>
              Transparent trading conditions: No hidden fees ensure that you
              only pay for your trades.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "What are the commonly traded global stock indices?",
      content: (
        <>
          Some of the major global indices include:
          <ul>
            <li>
              S&amp;P 500 (US500): Represents 500 large companies in the US.
            </li>
            <li>
              FTSE 100 (UK100): Tracks the top 100 companies listed on the
              London Stock Exchange.
            </li>
            <li>
              Nikkei 225 (JP225): Japan's largest index, covering top companies
              listed on the Tokyo Stock Exchange.
            </li>
            <li>
              DAX (GER40): Germany's key index, including the largest 40
              companies on the Frankfurt Stock Exchange.
            </li>
            <li>
              NASDAQ 100 (US100): Focuses on 100 of the largest non-financial
              companies in the US.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How does leverage work in Stock indices trading?",
      content:
        "With leverage, you can start with a smaller investment and gain influence over a larger position. For example, with leverage of 1:500, you only need to deposit 1/500th of the total trade value. This amplifies both potential profits and losses, so it's important to manage your risk effectively.",
    },
    {
      title: "What are margin requirements, and how are they calculated?",
      content: (
        <>
          Margin is the minimum amount of capital required to open and maintain
          a position. Margin requirements are calculated based on:
          <ul>
            <li>Lot size: The number of units being traded.</li>
            <li>Contract size: The total value of the contract.</li>
            <li>
              Opening price: The market price at the time the trade is
              initiated.
            </li>
          </ul>
          <p>
            Margins allow traders to control larger positions with less capital,
            but they must maintain enough funds in their accounts to avoid
            margin calls.
          </p>
        </>
      ),
    },
    {
      title: "What are dividend adjustments in Stock indices trading?",
      content:
        "When companies within an index pay dividends, the index's value is adjusted. To compensate for this, ABET Global applies dividend adjustments to client accounts holding positions on the ex-dividend date. Long positions receive a credit, while short positions are typically unaffected.",
    },
    {
      title: "What are swap fees, and when are they applied?",
      content:
        "Swap fees are interest charges applied to trades that remain open overnight. They are based on the interbank interest rate of the respective index's currency. Long positions are charged the interbank rate plus a markup, while short positions may receive the rate minus a markup. Swap fees are tripled for trades held over the weekend.",
    },
    {
      title: "How does ABET Global ensure transparent trading conditions?",
      content:
        "ABET Global provides a straightforward and transparent trading experience by eliminating additional fees. Clients pay no extra charges aside from standard spreads and swap rates, ensuring that the cost of each trade is clear and easy to calculate.",
    },
    {
      title:
        "How does Stock indices trading help in portfolio diversification?",
      content:
        "Stock indices trading allows investors to gain exposure to a wide range of companies across different sectors. This helps diversify risk, as the performance of an index tends to be less volatile than individual stocks. By trading indices, investors can hedge against market movements while participating in global economic trends.",
    },
    {
      title: "What are the risks associated with Stock indices trading?",
      content:
        "The primary risks in Stock indices trading include market volatility, leverage amplification, and sudden price movements due to political or economic events. Leverage enhances possible losses even as it can maximize earnings. Therefore, proper risk management, including stop-loss orders and limiting leverage use, is crucial.",
    },
    {
      title: "Can I trade Stock indices during market downturns?",
      content:
        "Yes, with ABET Global, you can profit from both market upswings and downturns. If you believe an index will fall, you can go short (sell) and potentially earn profits from the decline.",
    },
    {
      title:
        "Are there any hidden costs when trading Stock indices with ABET Global?",
      content:
        "No, ABET Global prides itself on transparent pricing with no hidden costs. Clients only pay the spreads and swap fees associated with their trades, and there are no additional charges.",
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

export default Accordion2;

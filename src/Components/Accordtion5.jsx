import React, { useState } from "react";
import styles from "./ForexAccordion.module.css";

const Accordion5 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title:
        "What Is MetaTrader 5 (MT5) and How Does It Differ from MetaTrader 4 (MT4)?",
      content:
        "MetaTrader 5 (MT5), developed by MetaQuotes, is a sophisticated trading platform offering extensive tools and features for traders. Unlike its predecessor, MetaTrader 4 (MT4), which primarily targets forex trading, MT5 supports multiple asset classes, including stocks, commodities, cryptocurrencies, and indices. With enhanced charting capabilities, more order types, additional timeframes, and a more intuitive user interface, MT5 caters to both novice and seasoned traders.",
    },
    {
      title: "What Are the Key Benefits of Using MetaTrader 5 (MT5)?",
      content: (
        <>
          MetaTrader 5 (MT5) provides a range of benefits that enhance trading
          efficiency and decision-making:
          <ul>
            <li>
              Advanced Charting and Analysis: MT5 offers 21 timeframes and 38
              technical indicators, enabling traders to conduct detailed
              technical analysis and develop robust trading strategies.
            </li>
            <li>
              Multiple Asset Classes: By enabling trading across a range of
              asset classes, such as cryptocurrencies, indices, stocks,
              commodities, and currency, MT5 increases traders' access to a
              wider range of market opportunities.
            </li>
            <li>
              Algorithmic Trading: MT5 supports the use of Expert Advisors
              (EAs), allowing for automated trading strategies that can operate
              based on pre-set rules.
            </li>
            <li>
              Diverse Order Types and Enhanced Timeframes: The platform supports
              additional order types, such as buy stop limit and sell stop
              limit, providing flexibility in managing trades.
            </li>
            <li>
              User-Friendly Interface: A streamlined, intuitive interface makes
              it easy for traders to navigate and utilize the platform's
              features effectively.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How to Get Started with MetaTrader 5 on Abet Global?",
      content: (
        <>
          To start trading with MetaTrader 5 on Abet Global, follow these simple
          steps:
          <ul>
            <li>
              Download the MT5 Platform: Head over to the Abet Global website
              and download the MT5 platform for your specific device (PC, Mac,
              Android, iPhone, etc.).
            </li>
            <li>
              Create an Account: Sign up for a trading account with Abet
              Global—choose a demo account for practice or a live account for
              real trading.
            </li>
            <li>
              Log In: Use the login credentials provided by Abet Global to
              access your MT5 account.
            </li>
            <li>
              Customize Your Platform: Set up your trading environment by adding
              indicators, choosing chart settings, and arranging your workspace
              to suit your preferences.
            </li>
            <li>
              Start Trading: Explore various assets, analyze the markets, and
              begin trading.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Is MetaTrader 5 Available on Mobile Devices?",
      content: (
        <>
          Yes, MetaTrader 5 is compatible with mobile devices, providing the
          flexibility to trade on the go:
          <ul>
            <li>
              Android Devices: Download the MT5 app from the Google Play Store.
            </li>
            <li>iOS Devices: Get the MT5 app from the Apple App Store.</li>
          </ul>
          <p>
            The mobile versions maintain most features found in the desktop
            version, including trading, charting, and account management.
          </p>
        </>
      ),
    },
    {
      title: "What Is Algorithmic Trading and How Does MT5 Support It?",
      content:
        "Algorithmic trading refers to the use of automated trading systems, such as Expert Advisors (EAs), to execute trades based on pre-defined criteria. MetaTrader 5 supports algorithmic trading, enabling traders to either create their own EAs or utilize pre-existing ones to automate their trading strategies. This feature allows for continuous market engagement, even when the trader is not actively monitoring the market.",
    },
    {
      title: "How Do I Customize Charts and Indicators in MT5?",
      content: (
        <>
          Customizing charts and indicators in MetaTrader 5 is straightforward:
          <ul>
            <li>
              Open a Chart: Right-click on an asset in the Market watch window
              and choose "Chart Window."
            </li>
            <li>
              Add Indicators: Navigate to the "Insert" menu, select
              "Indicators," and choose from the wide range of available
              technical indicators.
            </li>
            <li>
              Modify Chart Properties: Right-click on the chart, select
              "Properties," and adjust settings such as colors, gridlines, and
              other visual elements.
            </li>
            <li>
              Save Templates: Save your custom chart settings as a template for
              future use by right-clicking on the chart and selecting "Template"
              &gt; "Save Template."
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "What Types of Accounts Can I Use on MT5 with Abet Global?",
      content: (
        <>
          Abet Global supports various account types on the MT5 platform:
          <ul>
            <li>
              Standard Account: Ideal for general trading with full access to
              all MT5 features.
            </li>
            <li>
              Micro Account: Perfect for traders preferring smaller trading
              volumes.
            </li>
            <li>
              ECN Account: Designed for high-frequency traders, offering tighter
              spreads and direct access to the interbank market.
            </li>
          </ul>
          <p>
            These account options cater to different trading preferences and
            styles.
          </p>
        </>
      ),
    },
    {
      title: "How Does MT5 Handle Risk Management?",
      content: (
        <>
          MetaTrader 5 includes several tools to help traders manage risk
          effectively:
          <ul>
            <li>
              Stop-Loss and Take-Profit Orders: These orders allow traders to
              automatically close a trade at a predetermined profit or loss
              level.
            </li>
            <li>
              Trailing Stop: A dynamic stop-loss order that adjusts with market
              movements, helping to lock in profits.
            </li>
            <li>
              Margin Requirements: MT5 displays current margin levels and
              requirements, aiding traders in managing leverage and preventing
              margin calls.
            </li>
          </ul>
          <p>
            These risk management tools are essential for protecting your
            trading capital.
          </p>
        </>
      ),
    },
    {
      title: "What Is the Market Depth Feature in MT5?",
      content:
        "The Market Depth feature in MT5 provides real-time insights into the market's liquidity by showing the volume of buy and sell orders at various price levels. This tool helps traders gauge market sentiment and potential price movements, offering valuable information for making informed trading decisions.",
    },
    {
      title: "How Do I Update or Upgrade My MetaTrader 5 Platform?",
      content: (
        <>
          Updating MetaTrader 5 is typically an automatic process. But you can
          manually look for updates by doing the following:
          <ul>
            <li>
              Navigating to the Help Menu: Click on "Help" in the MT5 interface.
            </li>
            <li>
              Selecting "Check for Updates": Follow the on-screen instructions
              to update your platform.
            </li>
          </ul>
          <p>
            Keeping your MT5 platform updated ensures access to the latest
            features and security enhancements.
          </p>
        </>
      ),
    },
    {
      title: "Can MetaTrader 5 Be Accessed via a Web Browser?",
      content:
        "Yes, MetaTrader 5 offers a WebTrader version that can be accessed directly through a web browser. Simply visit the Abet Global website, log in with your account credentials, and start trading without needing to download any software.",
    },
    {
      title: "Where Can I Learn More About Using MetaTrader 5?",
      content: (
        <>
          Abet Global provides a wealth of educational resources to help you
          master MT5:
          <ul>
            <li>
              Tutorial Videos: Watch step-by-step video guides on using MT5's
              features.
            </li>
            <li>
              Webinars: Attend live sessions with trading experts covering
              advanced strategies and platform functionality.
            </li>
            <li>
              User Manuals: Access detailed documentation that explains all the
              functionalities of MT5.
            </li>
          </ul>
          <p>
            These resources are designed to help you maximize your trading
            potential with MetaTrader 5.
          </p>
        </>
      ),
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

export default Accordion5;

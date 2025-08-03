import React, { useState } from "react";
import { Accordion, Button, Form, Card } from "react-bootstrap";
import styles from "./ForexDictionary.module.css";

const ForexDictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLetter, setActiveLetter] = useState("A");
  const [activeKey, setActiveKey] = useState(null);

  const forexTerms = {
    A: [
      {
        term: "Arbitrage",
        definition:
          "The practice of selling or buying a currency to profit from prices that are opposite in various markets. It is taking an equal and opposite position in a comparable market at the same time to profit from slight price differentials.",
      },
      {
        term: "Ask",
        definition:
          'The price at which a trader agrees to buy a specific currency is referred to as the "ask" (or "ask price").',
      },
      {
        term: "Asset",
        definition:
          'The term "asset" describes a valuable object or resource, such as a currency or pair of currencies.',
      },
      {
        term: "ATR",
        definition:
          "Average True Range - a technical analysis indicator that measures market volatility.",
      },
      {
        term: "Accumulation Index",
        definition:
          "A technical indicator that uses price and volume to assess whether a stock is being accumulated or distributed.",
      },
    ],
    B: [
      {
        term: "Base Currency",
        definition:
          'The first specified currency in a currency pair is referred to as the "base currency." For instance, the GBP serves as the base currency in the GBP/USD pairing.',
      },
      {
        term: "Bear Market",
        definition:
          'The price of a declining asset, currency, or security is referred to as a "bear market," which is the opposite of a bull market.',
      },
      {
        term: "Bull Market",
        definition:
          "This phrase, which contrasts with a bear market, refers to a situation in which the value of a security, currency, or asset is increasing.",
      },
      {
        term: "Bid",
        definition:
          'The price at which a trader is willing to sell a specific currency is called a "bid" (or "bid price").',
      },
      {
        term: "Buy Limit Order",
        definition:
          'An order to push through a transaction at a given price or below is known as a purchase limit order, where "limit" refers to the price barrier.',
      },
    ],
    C: [
      {
        term: "Carry Trade",
        definition:
          "Carry trading is the practice of an investor taking out a loan at an interest rate that is less than average to purchase assets that may yield better returns.",
      },
      {
        term: "Closed Position",
        definition:
          "Closing a position is ending a transaction and realizing any associated gains or losses.",
      },
      {
        term: "Closing Market Rate",
        definition:
          "It is sometimes expressed as the closing price and denotes the last price at which a currency is traded in a given time, day, or candle.",
      },
      {
        term: "Currency Appreciation",
        definition:
          '"Currency appreciation" is the term used to describe when the value of one currency increases relative to another.',
      },
      {
        term: "Currency Futures",
        definition:
          "Contracts known as currency futures specify the price at which a currency can be purchased or sold at a specific future date.",
      },
    ],
    D: [
      {
        term: "Daily Chart",
        definition:
          "A graph that details the changes in a specific currency's value over a single trading day.",
      },
      {
        term: "Day Trade",
        definition: "An opening and closing FX trade on the same day.",
      },
      {
        term: "Demo Account",
        definition: "A forex trading account that uses virtual funds.",
      },
      {
        term: "Depth of Market",
        definition:
          "The number of active orders for buying and selling a currency that span a wide range of prices.",
      },
      {
        term: "Drawdown",
        definition:
          'The term "drawdown" refers to the time between a currency\'s high and its subsequent low price.',
      },
    ],
    E: [
      {
        term: "ECN Broker",
        definition:
          "They embody a unique class of brokers. Electronic Communications Networks (ECNs) are used by ECN brokers to give their clients access to liquidity providers.",
      },
      {
        term: "Exchange Rate",
        definition:
          "The exchange rate, or the price at which one currency can be traded for another, is what the forex market is based on.",
      },
      {
        term: "Execution",
        definition:
          "This is the phrase used to describe the beginning and end of a deal.",
      },
      {
        term: "Exposure",
        definition:
          'The phrase "exposure" refers to both the amount invested in a currency and the accompanying market risks.',
      },
    ],
    F: [
      {
        term: "Fill Price",
        definition:
          "Fill Price talks about the completion of an order and the price at which it was finished.",
      },
      {
        term: "Fill or Kill",
        definition:
          "An investor may decide to use a fill or kill order if they have a specific price in mind for a currency transaction.",
      },
      {
        term: "Floating Exchange Rate",
        definition:
          "The word is used to refer to any exchange rate that is not fixed at the moment.",
      },
      {
        term: "Forex Chart",
        definition:
          "A forex chart is a computer chart that shows points and price changes associated with a currency pair, much like a daily chart.",
      },
      {
        term: "Forex Scalping",
        definition:
          "A well-known trading strategy that is predicated on the idea that you are more likely to make money through quick trade opening and closing.",
      },
    ],
    G: [
      {
        term: "Gap",
        definition:
          "A price gap occurs when the price of a currency opens significantly higher or lower than its previous closing price.",
      },
      {
        term: "Grid Trading",
        definition:
          "A trading strategy that involves placing buy and sell orders at regular intervals above and below a set price.",
      },
    ],
    H: [
      {
        term: "Hard Currency",
        definition:
          "In contrast to a soft currency, a hard currency is typically thought of as reliable since it is most resilient during periods of political and economic unrest.",
      },
      {
        term: "Hedge",
        definition:
          "A trading strategy that lowers the risk connected with volatile markets to protect investors.",
      },
    ],
    I: [
      {
        term: "Intervention",
        definition:
          "Intervention is the term used to describe acts taken by a country's central bank to influence the value of its currency.",
      },
    ],
    L: [
      {
        term: "Leverage",
        definition:
          "Forex brokers provide a feature called leverage, which lets a trader increase their purchasing power.",
      },
      {
        term: "Limit Order",
        definition:
          "Expressing a request to start or stop a transaction at a future price.",
      },
      {
        term: "Liquidity",
        definition:
          "The quantity (or volume) of a particular currency that is presently being traded actively.",
      },
      {
        term: "Long Position",
        definition:
          "In contrast to a short position, a long position involves purchasing a base currency to make money as the market price rises.",
      },
      {
        term: "Lot",
        definition:
          "One lot is equivalent to 100,000 units of the currency you have chosen to trade with.",
      },
    ],
    M: [
      {
        term: "Margin",
        definition:
          'The term "margin" describes the minimum account balance needed to keep an open position.',
      },
      {
        term: "Margin Call",
        definition:
          "This alert informs you that to maintain the activity of your remaining positions, you must make an additional deposit to raise your margin.",
      },
      {
        term: "Market Order",
        definition:
          "A market order, which directs a deal to be performed as soon as possible at the best price available, is necessary for traders who wish to trade instantly.",
      },
      {
        term: "Micro Lot",
        definition:
          "A micro lot in currency pairs is 1,000 units of the base currency.",
      },
    ],
    O: [
      {
        term: "One Cancels the Other (OCO)",
        definition:
          "A combination of two limit orders, whereby the execution of one causes the other to automatically be canceled.",
      },
      {
        term: "Open Position",
        definition:
          "A straightforward phrase used to express a trader's position on a currency pair, subject to any potential gains or losses.",
      },
      {
        term: "Over-the-Counter",
        definition:
          'In the age of internet forex trading, the phrase "over-the-counter trade" is rarely used to describe the conventional method of completing a currency transaction.',
      },
      {
        term: "Overnight Position",
        definition:
          "When a trader chooses to hold onto a position over the night and into the following trading day.",
      },
    ],
    P: [
      {
        term: "Pip",
        definition:
          'Representing the smallest conceivable price change within an exchange rate, "percentage in point" is what it stands for.',
      },
      {
        term: "Profit-Taking",
        definition: "Closing a forex trade to receive the associated profit.",
      },
      {
        term: "P&L",
        definition: 'P&L is a common term meaning "profit and loss."',
      },
    ],
    Q: [
      {
        term: "Quote Currency",
        definition:
          'The second stated currency in any currency pair is always referred to as the "quote currency." For instance, the GBP is the quote currency in the USD/GBP pairing.',
      },
    ],
    R: [
      {
        term: "Rally",
        definition:
          'The term "rally" describes the price resurgence of a currency following a period of either short-term or long-term depreciation.',
      },
      {
        term: "Resistance",
        definition: "The value at which a currency struggles to rise above.",
      },
      {
        term: "Risk Management",
        definition:
          "Because the forex market is notoriously volatile, traders need to use risk management to protect their wealth.",
      },
      {
        term: "Rollover Rate",
        definition:
          "The interest that a trader must pay (or earn) while holding an open position overnight is known as the rising rollover rate.",
      },
    ],
    S: [
      {
        term: "Short Position",
        definition:
          "In contrast to a long position, this one involves taking a position that gains from a currency's market price fall.",
      },
      {
        term: "Slippage",
        definition:
          'When a trader performs a trade that closes at a higher price than anticipated, it\'s referred to as "slippage."',
      },
      {
        term: "Soft Currency",
        definition:
          "A soft currency is the opposite of a hard currency in that it is typically regarded as unstable because it is frequently the target of negative economic and political developments.",
      },
      {
        term: "Speculator",
        definition:
          "Speculators are a specific kind of trader since they are prepared to accept significant risks when trading.",
      },
      {
        term: "Spike",
        definition:
          "Used to characterize a sudden, rapid change in the value of a currency that takes place either upward or downward.",
      },
      {
        term: "Spread",
        definition:
          "Any currency pair's spread is the difference between the ask and bid prices.",
      },
      {
        term: "Stop-Loss Order",
        definition:
          "A market order that instructs you to buy or sell a currency at a specific price.",
      },
    ],
    T: [
      {
        term: "Take-Profit Order (T/P)",
        definition:
          "A market order that provides that all profits are to be taken when a position reaches a specified price or range, effectively closing the trade.",
      },
      {
        term: "Technical Analysis",
        definition:
          "Technical analysis is a tool used by investors to predict future changes in the forex market's price.",
      },
    ],
    V: [
      {
        term: "Volatility",
        definition:
          "This addresses the level of uncertainty (and associated price swings) surrounding a certain currency, currency pair, or security.",
      },
    ],
    Y: [
      {
        term: "Yield",
        definition:
          'The return on any forex investment is referred to as the "yield" and is typically shown as a percentage on a trading platform.',
      },
    ],
  };
  const alphabet = Object.keys(forexTerms).sort();

  const filteredTerms = Object.entries(forexTerms).reduce(
    (acc, [letter, terms]) => {
      const filtered = terms.filter((termObj) =>
        termObj.term.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filtered.length > 0) acc[letter] = filtered;
      return acc;
    },
    {}
  );

  const handleLetterClick = (letter) => {
    setActiveLetter(letter);
    setSearchTerm("");
  };

  return (
    <div className={`container ${styles.container}`}>
      <h1 className={styles.title}>Forex Dictionary</h1>
      <p className={styles.description}>
        Comprehensive guide to forex trading terminology with clear definitions
        to help both beginners and experienced traders.
      </p>

      <div className={styles.searchContainer}>
        <Form.Group className={styles.searchInput}>
          <Form.Control
            type="text"
            placeholder="Search for a term..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (e.target.value === "") setActiveLetter("A");
            }}
          />
        </Form.Group>
      </div>

      <div className={styles.letterButtons}>
        {alphabet.map((letter) => (
          <Button
            key={letter}
            variant={
              activeLetter === letter ||
              (searchTerm && Object.keys(filteredTerms).includes(letter))
                ? "var(--main-color)"
                : "outline-pri"
            }
            className={styles.letterButton}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </Button>
        ))}
      </div>

      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        {(searchTerm
          ? Object.entries(filteredTerms)
          : Object.entries(forexTerms).filter(
              ([letter]) => letter === activeLetter
            )
        ).map(([letter, terms]) => (
          <div key={letter} className={styles.letterSection}>
            <h3 className={styles.letterHeading}>{letter}</h3>
            {terms.map((termObj, index) => (
              <Accordion.Item
                key={`${letter}-${index}`}
                eventKey={`${letter}-${index}`}
                className={styles.accordionItem}
              >
                <Accordion.Header className={styles.accordionHeader}>
                  {termObj.term}
                </Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                  <p>{termObj.definition}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </div>
        ))}
      </Accordion>

      {searchTerm && Object.keys(filteredTerms).length === 0 && (
        <div className={styles.noResults}>
          <p>No terms found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default ForexDictionary;

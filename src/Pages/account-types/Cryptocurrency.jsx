import React from "react";
import styles from "./Forex.module.css";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";
import RawSpreadTable from "./PriceSection";
import Phone from "../../assets/phone.png";
import { NavLink, useLocation } from "react-router-dom";
import StandardPrice from "./StandardPrice";
import ForexBenefits from "../../Components/ForexBenefits";
import ForexAccordion from "../../Components/ForexAccordion";

const Cryptocurrency = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className={styles.rawSpreadAccount}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.section}`}>
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className={styles.heroTitle}>Forex</h2>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Navigation - Desktop */}
      <section className={`${styles.navSection} ${styles.section} `}>
        <Container>
          <Row>
            <Col>
              <Navbar className={styles.navbar}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className={`mx-auto ${styles.navMenu}`}>
                    <NavLink
                      to="/account-types/forex"
                      className={`${styles.navLink} ${
                        isActive("/account-types/forex") ? styles.active : ""
                      }`}
                    >
                      Forex
                    </NavLink>

                    <NavLink
                      to="/account-types/indices"
                      className={`${styles.navLink} ${
                        isActive("/account-types/indice") ? styles.active : ""
                      }`}
                    >
                      Indices
                    </NavLink>

                    <NavLink
                      to="/account-types/energies"
                      className={`${styles.navLink} ${
                        isActive("/account-types/energies") ? styles.active : ""
                      }`}
                    >
                      Energies
                    </NavLink>

                    <NavLink
                      to="/account-types/metals"
                      className={`${styles.navLink} ${
                        isActive("/account-types/metals") ? styles.active : ""
                      }`}
                    >
                      Metals
                    </NavLink>
                    <NavLink
                      to="/account-types/cryptocurrency"
                      className={`${styles.navLink} ${
                        isActive("/account-types/cryptocurrency")
                          ? styles.active
                          : ""
                      }`}
                    >
                      Cryptocurrency
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="row">
        <ForexBenefits />
      </div>

      {/* Fast Execution Section */}
      <section className={`${styles.section2} ${styles.highlightSection}`}>
        <Container>
          <Row>
            <Col>
              <h2 className={styles.sectionTitle}>
                Over 500 Global Investment Instruments Available.
              </h2>
              <p className={styles.sectionText}>
                Select the market that aligns with your investment strategies
                and begin trading with your preferred instruments. ABET Global
                offers a wide range <br /> of options, including Forex, Stocks,
                Metals & Commodities, FX Indices, and Indices transactions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <div className="container">
          <Row className="mt-5">
            <p>
              Forex Trading Hours (GMT+2, DST may apply)
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clock"
                viewBox="0 0 16 16"
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg>{" "}
              Monday – Friday: 00:05 – 23:50
            </p>
            <div className="mt-5">
              <p>
                ** If you leave an open position for the next trading day, you
                pay or you obtain the certain amount, calculated on the basis of
                interest rates difference of two currencies in currency pair.
                This operation is called “swap.” In the trading terminal, “swap”
                is automatically converted into the deposit currency. The
                operation is conducted at 00:00 (GMT+2 time zone, please note
                DST may apply) and can take several minutes. From Wednesday to
                Thursday swap is charged for three days.
                <br />
              </p>
              <p className="mt-3">
                *** Min. level for placing pending orders at a current market
                price.
              </p>
              <p className="mt-3">
                ****For all account types, the leverage for EURDKK, EURHKD,
                GBPDKK, USDDKK, USDHKD, and USDCNH is capped at 1:50, and for
                USDTRY, EURTRY it is capped at 1:100.
              </p>
              <p className="mt-3">
                For all account types, the leverage is capped at 1:400 for all
                CHF currency pairs.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Swap Information:</h4>
              <p>
                If you hold a position overnight, a swap fee or gain is
                calculated based on the interest rate differential between the
                two currencies in the pair. This swap is automatically converted
                into your deposit currency at 00:00 GMT+2 and may take several
                minutes to process. From Wednesday to Thursday, the swap fee is
                charged for three days.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Leverage Limits:</h4>
              <p className="mb-3">For all account types:</p>
              <ul>
                <li>
                  1:50 leverage on EURDKK, EURHKD, GBPDKK, USDDKK, USDHKD, and
                  USDCNH.
                </li>
                <li>1:100 leverage on USDTRY and EURTRY.</li>
                <li>1:400 leverage on all CHF currency pairs.</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Understanding Forex Trading</h4>
              <p>
                Forex trading, also known as currency or FX trading, involves
                the exchange of currencies in a global, decentralized
                marketplace. This system, in place since after World War II,
                replaced the Bretton Woods Agreement, which had pegged
                currencies to gold reserves.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Forex Trading Marketplace</h4>
              <p>
                The forex market is the largest and most liquid in the world,
                facilitated by advances in online transactions, global travel,
                communication, and transportation. These factors have fostered a
                rapidly growing and dynamic marketplace where currencies are
                essential for facilitating global commerce.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Online Forex Trading</h4>
              <p>
                Retail forex traders, who are individuals participating for
                speculative purposes or risk hedging, represent a significant
                and growing segment of the market. These traders engage through
                brokers like ABET Global or banks, using trading accounts
                typically funded in their local currency to buy and sell
                currencies online or by phone.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Trading Forex via a Broker</h4>
              <p>
                Using a broker such as ABET Global provides clients with
                real-time market pricing and buy/sell quotes through an online
                trading platform. Clients can choose their transaction prices
                and execute trades at their convenience.
              </p>
            </div>
          </Row>
        </div>
      </section>
      <ForexAccordion />
    </div>
  );
};

export default Cryptocurrency;

import React from "react";
import styles from "./Forex.module.css";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";

import { NavLink, useLocation } from "react-router-dom";
import Benefit3 from "../../Components/Benefit3";
import Accordion3 from "../../Components/Accordion3";

const Energies = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className={styles.rawSpreadAccount}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.section}`}>
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className={styles.heroTitle}>Energies</h2>
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
                        isActive("/account-types/indices") ? styles.active : ""
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
        <Benefit3 />
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
            <div className="mt-4">
              <h4 className="mb-3">
                Key Details on Margin and Swap for Cash Energy Trades
              </h4>

              <ul>
                <li>
                  A swap fee for 3 days is applied to positions held open at the
                  close of trading on Friday.
                </li>
                <li>
                  The minimum level for placing pending orders is based on the
                  current market price.
                </li>
              </ul>
              <p>
                For Cash Energy symbols, the margin requirement is calculated as
                Margin Requirement = [Lots x contract size x open price] ÷
                [Lower of Account Leverage or Symbol Leverage].
              </p>
              <p>To learn more about margin percentages for Cash Energy</p>
              <p>
                When hedging positions on derivatives, the margin remains at
                50%, provided the margin level exceeds 100%.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">
                Essential Guidelines for Margin and Pending Orders
              </h4>
              <ul>
                <li>
                  The minimum level for placing pending orders is tied to the
                  current market price.
                </li>
                <li>
                  Margin requirements are calculated as follows: Lots x Contract
                  Size x Opening Price x Margin Percentage, independent of your
                  account’s leverage.
                </li>
                <li>
                  When hedging positions on derivatives with a margin level
                  above 100%, the margin remains at 50%.
                </li>
                <li>
                  These spreads and conditions apply to all ABET Global trading
                  account types.
                </li>
                <li>
                  The company does not offer automatic rollover for contracts
                  with expiration dates. Any open positions will be closed on
                  the maturity date.
                </li>
              </ul>
              <p>
                In the rare case that energy instrument prices (OIL, BRENT,
                NGAS, etc.) drop to zero, all positions will be closed at the
                last available price, as trading platforms cannot process
                negative prices.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Understanding Energy Market Dynamics:</h4>
              <p>
                Energy prices are characterized by high volatility, largely
                driven by political and environmental factors. Global economic
                conditions also significantly influence energy demand, with
                consumption rising during periods of economic growth and
                decreasing during downturns. Additionally, extreme weather
                events can disrupt energy supplies, especially crude oil and
                natural gas, impacting demand for related consumer services.
                Political instability in key energy-producing regions further
                adds to the market’s unpredictability. Oil trading is a 24-hour
                global market, making it ideal for day traders who capitalize on
                rapid price changes.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">EXTRA</h4>
              <h4 className="mb-3">Additional Trading Conditions:</h4>
              <ul>
                <li>
                  The minimum margin requirement is calculated as: [Lots x
                  Contract Size x Open Price] ÷ [Lowest of Account Leverage or
                  Symbol Leverage].
                </li>
                <li>
                  A 50% margin applies to hedged positions when the margin level
                  exceeds 100%.
                </li>
                <li>
                  ABET Global does not offer automatic contract rollover for
                  expiring instruments. All open positions will close on the
                  expiration date.
                </li>
                <li>
                  If energy prices (e.g., oil, natural gas) drop to zero, ABET
                  Global will close all open positions at the last available
                  price.
                </li>
              </ul>
              <p>
                Please click here to learn more about Cash Energy’s margin
                percentages.
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
      <Accordion3 />
    </div>
  );
};

export default Energies;

import React from "react";
import styles from "./Forex.module.css";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";

import { NavLink, Link, useLocation } from "react-router-dom";

import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import Benefit7 from "../../Components/Benefit7";
import { FaArrowRight } from "react-icons/fa";

const Spreads = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className={styles.rawSpreadAccount}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.section}`}>
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className={styles.heroTitle}>Spreads</h2>
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
                      to="/account-types/execution-policy"
                      className={`${styles.navLink} ${
                        isActive("/account-types/execution-policy")
                          ? styles.active
                          : ""
                      }`}
                    >
                      Execution Policy
                    </NavLink>

                    <NavLink
                      to="/account-types/spreads"
                      className={`${styles.navLink} ${
                        isActive("/account-types/spreads") ? styles.active : ""
                      }`}
                    >
                      Spreads
                    </NavLink>

                    <NavLink
                      to="/account-types/margin-leverage"
                      className={`${styles.navLink} ${
                        isActive("/account-types/margin-leverage")
                          ? styles.active
                          : ""
                      }`}
                    >
                      Margin & Leverage
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="row">
        <Benefit7 />
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
            <div>
              <Button
                variant=""
                size="sm"
                href="https://secure.abetglobal.com/account/register"
                className={styles.ctaButton}
              >
                Open Account
              </Button>
            </div>
          </Row>
        </Container>
      </section>
      <section>
        <div className="container">
          <Row className="mt-5">
            <div className="mt-5 text-center">
              <p>
                <BiSolidQuoteAltLeft />
                <i>
                  <strong>
                    To maintain competitive spreads, we strive to secure the
                    most favorable prices from our liquidity providers.
                    Real-time data from these providers is aggregated to ensure
                    our clients receive the best bid and ask prices available.
                    Our advanced electronic pricing engine updates prices on all
                    currency pairs three times per second, ensuring our rates
                    align with the current global forex market conditions.
                  </strong>
                </i>
                <BiSolidQuoteAltRight />
              </p>
              <h4> Chief Dealer, ABET Global</h4>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">
                Experience Tight Spreads and Superior Pricing at ABET Global
              </h4>
              <p>
                ABET Global offers some of the tightest spreads in the market,
                starting as low as 0.1 pips. By aggregating real-time prices
                from multiple liquidity providers, we ensure our clients receive
                the best possible bid and ask prices. Our advanced electronic
                pricing engine refreshes prices three times per second, ensuring
                they reflect the most accurate and current global forex market
                levels.
              </p>
            </div>

            <div className="mt-4">
              <h4 className="mb-3">Commitment to Execution of Quality</h4>
              <p>
                No matter the account type or trade size, ABET Global is
                committed to offering tight spreads for all clients. We
                recognize that optimal spreads only benefit traders if paired
                with high-quality execution, and this is why we prioritize
                precision in every trade.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Variable Spreads for Flexible Trading</h4>
              <p>
                ABET Global operates with variable spreads, just like the
                interbank forex market. Unlike fixed spreads, which often come
                with higher costs and limitations during market news, our
                variable spreads offer flexibility without trading restrictions,
                even during significant news events.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Fractional Pip Pricing for Precision</h4>
              <ul>
                <li>
                  In addition to competitive spreads, ABET Global provides
                  fractional pip pricing. This 5-digit quoting system allows
                  clients to capitalize on even the smallest price movements,
                  offering tighter spreads and more precise trade execution
                  compared to traditional 4-digit quotes.
                </li>
                <li>Access ABET Spreads and Trading Conditions</li>
                <li>
                  To explore ABET Global’s spreads and conditions across various
                  instruments, please refer to the following:
                </li>
              </ul>
            </div>
            <div className="mt-4 mb-5">
              <h4 className="mb-3">Abet Spreads / Conditions</h4>
              <p className="d-flex flex-column gap-2">
                <span>
                  To view Abet Spreads / Conditions for Forex
                  <Link
                    to="/account-types/forex"
                    className="ms-2 text-decoration-none"
                  >
                    Click Here <FaArrowRight className="ms-1" />
                  </Link>
                </span>
                <span>
                  To view Abet Spreads / Conditions for Indices
                  <Link
                    to="/account-types/indices"
                    className="ms-2 text-decoration-none"
                  >
                    Click Here <FaArrowRight className="ms-1" />
                  </Link>
                </span>
                <span>
                  To view Abet Spreads / Conditions for Energies
                  <Link
                    to="/account-types/energies"
                    className="ms-2 text-decoration-none"
                  >
                    Click Here <FaArrowRight className="ms-1" />
                  </Link>
                </span>
                <span>
                  To view Abet Spreads / Conditions for Metals
                  <Link
                    to="/account-types/metals"
                    className="ms-2 text-decoration-none"
                  >
                    Click Here <FaArrowRight className="ms-1" />
                  </Link>
                </span>
                <span>
                  To view Abet Spreads / Conditions for Cryptocurrency
                  <Link
                    to="/account-types/cryptocurrency"
                    className="ms-2 text-decoration-none"
                  >
                    Click Here <FaArrowRight className="ms-1" />
                  </Link>
                </span>
              </p>
            </div>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Spreads;

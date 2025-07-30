import React from "react";
import styles from "./Forex.module.css";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";
import RawSpreadTable from "./PriceSection";
import Phone from "../../assets/phone.png";
import { NavLink, useLocation } from "react-router-dom";
import StandardPrice from "./StandardPrice";
import ForexBenefits from "../../Components/ForexBenefits";
import ForexAccordion from "../../Components/ForexAccordion";
import Benefit6 from "../../Components/Benefit6";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const Execution = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className={styles.rawSpreadAccount}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.section}`}>
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className={styles.heroTitle}>Execution Policy</h2>
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
                      to="/execution-policy"
                      className={`${styles.navLink} ${
                        isActive("/execution-policy") ? styles.active : ""
                      }`}
                    >
                      Execution Policy
                    </NavLink>

                    <NavLink
                      to="/spreads"
                      className={`${styles.navLink} ${
                        isActive("/spreads") ? styles.active : ""
                      }`}
                    >
                      Spreads
                    </NavLink>

                    <NavLink
                      to="/margin-leverage"
                      className={`${styles.navLink} ${
                        isActive("/margin-leverage") ? styles.active : ""
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
        <Benefit6 />
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
                    At ABET Global, we prioritize execution quality to ensure
                    our clients can swiftly enter the market at optimal prices.
                    We strongly oppose any practices, such as re-quoting or
                    order rejection, which diminish execution efficiency. As
                    former interbank dealers, we understand that poor execution
                    can turn a profitable strategy into a losing one. Our
                    mission is to consistently deliver the best execution
                    possible.
                  </strong>
                </i>
                <BiSolidQuoteAltRight />
              </p>
              <h4>-Founder of ABET Global</h4>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Leading in Order Execution</h4>
              <p>
                Since 2022, ABET Global has been a leader in providing a no
                re-quotes, no order rejection policy. We guarantee 100% order
                execution, with 99.35% of orders filled in less than one second.
              </p>
            </div>

            <div className="mt-4">
              <h4 className="mb-3">Order Placement</h4>
              <p>
                Our trading platform supports various order types, including
                market, limit, stop, and trailing stop orders, allowing clients
                to place orders anytime during trading hours. Telephone trading
                is also available for those who prefer direct interaction with
                our dealers. Account balances are updated in real-time based on
                market fluctuations. Note that clients may hold up to 300 open
                positions simultaneously, including pending orders.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Market Order Fills</h4>
              <p>
                At ABET Global, we guarantee fills on market orders up to 50
                lots (5 million USD) per transaction. For larger trades, you can
                break the order into smaller segments.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Stop-Loss and Limit Order Fills</h4>
              <p>
                We recognize the importance of risk management tools such as
                stop-loss and limit orders, guaranteeing fills up to 50 lots at
                the best available market price.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Holiday and Weekend Execution</h4>
              <p>
                In the event of market gaps between a Friday close and a Sunday
                opening, ABET Global executes all pending orders at the first
                available market price for the relevant position size.
              </p>
            </div>
            <div className="mt-4 mb-5">
              <h4 className="mb-3">Volatile or Illiquid Markets</h4>
              <p>
                During volatile or illiquid market conditions, ABET Global
                leverages its liquidity partnerships to ensure the best possible
                order execution.
                <br />
              </p>
              <p>
                For further details, please review our Order Execution Policy.
              </p>
            </div>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Execution;

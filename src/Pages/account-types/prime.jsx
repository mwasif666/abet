import React from "react";
import styles from "./Micro.module.css";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";
import RawSpreadTable from "./PriceSection";
import Phone from "../../assets/phone.png";
import { NavLink, useLocation } from "react-router-dom";
import MicroTable from "./PriceSection";
import PrimeTable from "./PrimeTable";

const Prime = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className={styles.rawSpreadAccount}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.section}`}>
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className={styles.heroTitle}>Abet Global Prime Account</h2>
              <p className={styles.heroSubtitle}>Prime Leverage, Prime Gains</p>
              <Button
                variant=""
                size="sm"
                href="https://secure.abetglobal.com/account/register"
                className={styles.ctaButton}
              >
                Open Account
              </Button>
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
                      to="/micro"
                      className={`${styles.navLink} ${
                        isActive("/micro") ? styles.active : ""
                      }`}
                    >
                      Micro
                    </NavLink>

                    <NavLink
                      to="/raw-spread"
                      className={`${styles.navLink} ${
                        isActive("/raw-spread") ? styles.active : ""
                      }`}
                    >
                      Raw Spread
                    </NavLink>

                    <NavLink
                      to="/standard"
                      className={`${styles.navLink} ${
                        isActive("/standard") ? styles.active : ""
                      }`}
                    >
                      Standard
                    </NavLink>

                    <NavLink
                      to="/prime/"
                      className={`${styles.navLink} ${
                        isActive("/prime/") ? styles.active : ""
                      }`}
                    >
                      Prime
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Section */}
      <section className={styles.section}>
        <Container>
          <Row>
            <Col md={6} className="mt-5">
              <h2 className={styles.sectionTitle}>
                Why Choose Our Micro Account?
              </h2>
              <p className={styles.sectionText}>
                Elevate your trading experience with the Abet Global Prime
                Account, designed for professionals and beginners alike. With a
                minimum deposit of just $10, floating spreads as low as 1 pip,
                and leverage up to 1:1000, this account offers unbeatable
                flexibility, zero commissions, and market execution to maximize
                your trading potential.
              </p>
              <img
                src={Phone}
                alt="Trading App"
                className={`img-fluid ${styles.featureImage}`}
              />
            </Col>
            <Col md={6}>
              <PrimeTable />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Fast Execution Section */}
      <section className={`${styles.section2} ${styles.highlightSection}`}>
        <Container>
          <Row>
            <Col>
              <h2 className={styles.sectionTitle}>Fast order execution</h2>
              <p className={styles.sectionText}>
                Trade seamlessly with lightning-fast market execution, ensuring
                that your orders are processed <br /> instantly without slippage
                or delays for optimal results.
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

      {/* Trading Features Section */}
      <section className={styles.section}>
        <Container>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className={`card ${styles.cardContainer}`}>
                <div className={`card-body ${styles.cardBody}`}>
                  <div className={styles.cardHeader}>
                    <h3 className={`card-title ${styles.title}`}>
                      No Restrictions on Trading – Scalping Allowed
                    </h3>
                  </div>
                  <div className={styles.cardContent}>
                    <p className={`card-text ${styles.text}`}>
                      Enjoy unrestricted trading freedom! Our Prime Account
                      supports scalping, hedging, and automated strategies,
                      enabling you to trade the way you prefer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className={`card ${styles.cardContainer}`}>
                <div className={`card-body ${styles.cardBody}`}>
                  <div className={styles.cardHeader}>
                    <h3 className={`card-title ${styles.title}`}>
                      Level II Pricing – Market Depth
                    </h3>
                  </div>
                  <div className={styles.cardContent}>
                    <p className={`card-text ${styles.text}`}>
                      Access deeper insights with Level II market pricing,
                      providing a clear view of market liquidity and depth to
                      enhance your trading strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Flexible Features Section */}
      <section className={`${styles.section} ${styles.highlightSection}`}>
        <Container>
          <Row className="d-flex align-items-center">
            <Col md={6}>
              <h3 className={styles.sectionTitle}>
                Flexible Funding and Withdrawal Options
              </h3>
              <p className={styles.sectionText}>
                Simplify your trading journey with secure and versatile deposit
                and withdrawal options designed to cater to global traders’
                needs.
              </p>

              <h3 className={styles.sectionTitle}>Flexible Lot Sizing</h3>
              <p className={styles.sectionText}>
                Control your risk effectively with customizable lot sizes
                ranging from micro to standard lots, suitable for traders of all
                levels.
              </p>
            </Col>
            <Col md={6}>
              <div className="row ">
                <div className="col-12 mb-4">
                  <div className={`card ${styles.cardContainer}`}>
                    <div className={`card-body ${styles.cardBody}`}>
                      <div className={styles.cardHeader}>
                        <h3 className={`card-title ${styles.title2}`}>
                          Forex, CFDs on Commodities and Global Indices
                        </h3>
                      </div>
                      <div className={styles.cardContent}>
                        <p className={`card-text ${styles.text2}`}>
                          Diversify your portfolio with Forex, CFDs on
                          commodities, and global indices, gaining access to a
                          variety of global markets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <div className={`card ${styles.cardContainer}`}>
                    <div className={`card-body ${styles.cardBody}`}>
                      <div className={styles.cardHeader}>
                        <h3 className={`card-title ${styles.title2}`}>
                          Leverage up to 1:1000
                        </h3>
                      </div>
                      <div className={styles.cardContent}>
                        <p className={`card-text ${styles.text2}`}>
                          Amplify your trading power with leverage up to 1:1000,
                          enabling you to open larger positions with a minimal
                          investment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <div className={`card ${styles.cardContainer}`}>
                    <div className={`card-body ${styles.cardBody}`}>
                      <div className={styles.cardHeader}>
                        <h3 className={`card-title ${styles.title2}`}>
                          All Major Account Currencies Supported
                        </h3>
                      </div>
                      <div className={styles.cardContent}>
                        <p className={`card-text ${styles.text2}`}>
                          Trade seamlessly in USD and other major currencies,
                          ensuring convenience for traders worldwide.
                          <br />
                          Take your trading to the next level with the Abet
                          Global Prime Account. Leverage, trade, and grow with a
                          platform built for excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Prime;

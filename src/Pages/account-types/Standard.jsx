import React from "react";
import styles from "./Micro.module.css";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";
import RawSpreadTable from "./PriceSection";
import Phone from "../../assets/phone.png";
import { NavLink, useLocation } from "react-router-dom";
import StandardPrice from "./StandardPrice";

const Standard = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className={styles.rawSpreadAccount}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.section}`}>
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className={styles.heroTitle}>Abet Global Standard Account</h2>
              <p className={styles.heroSubtitle}>
                MStandard Climbs, Trades Win!
              </p>
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
                      to="/account-types/micro"
                      className={`${styles.navLink} ${
                        isActive("/account-types/micro") ? styles.active : ""
                      }`}
                    >
                      Micro
                    </NavLink>

                    <NavLink
                      to="/account-types/raw-spread"
                      className={`${styles.navLink} ${
                        isActive("/account-types/raw-spread")
                          ? styles.active
                          : ""
                      }`}
                    >
                      Raw Spread
                    </NavLink>

                    <NavLink
                      to="/account-types/standard"
                      className={`${styles.navLink} ${
                        isActive("/account-types/standard") ? styles.active : ""
                      }`}
                    >
                      Standard
                    </NavLink>

                    <NavLink
                      to="/account-types/prime/"
                      className={`${styles.navLink} ${
                        isActive("/account-types/prime/") ? styles.active : ""
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
                Experience trading like never before with Abet Global’s Micro
                Account! Designed for both beginners and seasoned traders, it
                offers minimal deposits, floating spreads, and high leverage.
                Enjoy flexibility, fast execution, and powerful tools to
                maximize your trading potential. Trade smarter with a
                user-focused account that delivers big on every detail.
              </p>
              <img
                src={Phone}
                alt="Trading App"
                className={`img-fluid ${styles.featureImage}`}
              />
            </Col>
            <Col md={6}>
              <StandardPrice />
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
                Our advanced trading infrastructure ensures lightning-fast
                market execution, so you never miss a trading opportunity.{" "}
                <br /> React instantly to market changes and maximize your
                results with ultra-low latency.
              </p>
            </Col>
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
                      Embrace complete trading freedom with no restrictions on
                      strategies. Scalping, hedging, or expert
                      advisors—everything is supported, letting you implement
                      your preferred approach confidently.
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
                      Access precise market depth insights with Level II
                      pricing. Analyze liquidity, understand order flow, and
                      make well-informed trading decisions with transparent data
                      at your fingertips.
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
                Easily manage your funds with various deposit and withdrawal
                methods tailored for convenience and security. Trade globally
                without limitations or delays in managing your capital.
              </p>

              <h3 className={styles.sectionTitle}>Flexible Lot Sizing</h3>
              <p className={styles.sectionText}>
                With a contract size of 1 Lot = 1,000, trade at your comfort
                level. Whether you’re starting small or scaling up, our lot
                sizing caters to your goals.
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
                          Diversify your portfolio by trading Forex,
                          commodities, and global indices. Broaden your
                          opportunities across major financial markets with
                          seamless execution.
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
                          Amplify your potential with leverage as high as
                          1:1000. Trade larger positions with smaller capital
                          while managing risk effectively with negative balance
                          protection.
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
                          Choose the currency that suits your needs. Our Micro
                          Account supports USD and other major currencies,
                          offering convenience and flexibility for global
                          traders.
                          <br />
                          Take your trading to the next level with Abet Global’s
                          Micro Account—built for flexibility, speed, and
                          growth.
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

export default Standard;

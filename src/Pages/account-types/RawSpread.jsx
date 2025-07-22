import React from "react";
import styles from "./Micro.module.css";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";
import RawSpreadTable from "./PriceSection";
import Phone from "../../assets/phone.png";
import { NavLink, useLocation } from "react-router-dom";

const RawSpread = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className={styles.rawSpreadAccount}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.section}`}>
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className={styles.heroTitle}>
                Abet Global Raw Spread Account
              </h2>
              <p className={styles.heroSubtitle}>Leverage the Raw Advantage!</p>
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
                Why Choose Our Raw Spread Account?
              </h2>
              <p className={styles.sectionText}>
                Maximize your trading potential with Abet Global's Raw Spread
                Account, designed for professionals seeking precision and
                efficiency. With spreads starting from 0 pips, leverage up to
                1:500, and advanced trading tools, this account ensures a
                seamless trading experience. Perfect for those who demand speed,
                transparency, and flexibility in global markets.
              </p>
              <img
                src={Phone}
                alt="Trading App"
                className={`img-fluid ${styles.featureImage}`}
              />
            </Col>
            <Col md={6}>
              <RawSpreadTable />
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
                Our Raw Spread Account offers ultra-fast market execution,
                powered by cutting-edge technology. Make split-second <br />
                decisions and execute trades without delays for optimal results.
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
                      Trade with freedom! Whether you prefer scalping, hedging,
                      or using expert advisors, our account has no restrictions,
                      allowing you to apply any strategy confidently.
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
                      Manage your funds effortlessly with secure and versatile
                      funding options. Enjoy fast withdrawals and hassle-free
                      deposits tailored to meet your trading needs.
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
                With a contract size of 1 Lot = 100,000, trade as per your
                comfort level. Our account supports micro, mini, and standard
                lot sizes for tailored trading.
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
                          Diversify your trading portfolio with Forex, CFDs on
                          commodities, and global indices. Expand your reach in
                          multiple financial markets effortlessly.
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
                          Leverage up to 1:1500
                        </h3>
                      </div>
                      <div className={styles.cardContent}>
                        <p className={`card-text ${styles.text2}`}>
                          Amplify your trading power with leverage up to 1:500,
                          allowing you to control larger positions while
                          maintaining a strategic risk approach.
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
                          Flexibility is key! Our account supports USD and other
                          major currencies, offering global convenience for
                          traders worldwide.
                          <br />
                          Take advantage of the Abet Global Raw Spread Account
                          for unmatched precision, speed, and trading freedom.
                          Join now and elevate your trading experience!
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

export default RawSpread;

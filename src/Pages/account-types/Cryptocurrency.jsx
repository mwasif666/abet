import React from "react";
import styles from "./Forex.module.css";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";
import RawSpreadTable from "./PriceSection";
import Phone from "../../assets/phone.png";
import { NavLink, useLocation } from "react-router-dom";
import StandardPrice from "./StandardPrice";
import ForexBenefits from "../../Components/ForexBenefits";
import ForexAccordion from "../../Components/ForexAccordion";
import Benefit5 from "../../Components/Benefit5";
import Accordion6 from "../../Components/Accordion6";

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
              <h2 className={styles.heroTitle}>Cryptocurrency</h2>
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
        <Benefit5 />
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
            <div className="mt-4">
              <h4 className="mb-3">Cryptocurrency Trading Hours:</h4>
              <p>Trading is available 24/7.</p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Swap Fees for Cryptocurrencies:</h4>
              <p className="mb-3">
                Swap fees apply from Monday to Friday, with triple fees charged
                for positions held overnight on Fridays. The swap process takes
                place at 00:00 GMT+2 (DST may apply) and may take a few minutes
                to complete.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Hedging and Margin Requirements:</h4>
              <p>
                When hedging positions on derivatives, the margin remains at
                50%, provided the margin level is above 100%.
              </p>
              <p>
                Please click here to learn more about the dynamic margin
                percentage.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Maintenance and Service Quality:</h4>
              <p>
                To maintain high-quality service, ABET Global’s servers undergo
                brief maintenance during the weekend, during which
                cryptocurrency trading will be unavailable. Trading conditions
                may vary depending on market conditions, and the availability of
                cryptocurrency trading is subject to change.
                <br />
              </p>
              <p>
                For detailed information, please refer to our Terms and
                Conditions.
                <br />
              </p>
              <p>
                Click here for additional information about risks related to
                trading cryptocurrency.
              </p>
            </div>
          </Row>
        </div>
      </section>
      <Accordion6 />
    </div>
  );
};

export default Cryptocurrency;

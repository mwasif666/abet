import React from "react";
import styles from "./Micro.module.css";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";
import RawSpreadTable from "./PriceSection";
import Phone from "../../assets/phone.png";
import { NavLink, useLocation } from "react-router-dom";
import MicroTable from "./PriceSection";
import BenefitsSection from "../../Components/BenefitSection";
import PackagesTable from "../../Components/PricingSection";
import AccountAccordion from "../../Components/AccountAccordion";

const AccountTypes = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className={styles.rawSpreadAccount}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.section}`}>
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className={styles.heroTitle}>Account Types</h2>
              {/* <p className={styles.heroSubtitle}>Micro Magic, Mega Impact!</p> */}
              {/* <Button
                variant=""
                size="sm"
                href="https://secure.abetglobal.com/account/register"
                className={styles.ctaButton}
              >
                Open Account
              </Button> */}
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
        <BenefitsSection />
      </section>
      <section>
        <div className="container">
          <div className="mt-4">
            <h4 className="mb-3">
              What makes Abet Global a compelling choice?
            </h4>
            <p>Trade the world’s most popular markets</p>
            <p>Find your next trade with access to a wide range of markets.</p>
            <p>
              Discover the Benefits of Investing with a Reliable and Regulated
              Broker
            </p>
          </div>
          <div className="mt-4">
            <h4 className="mb-3">Seamless Accessibility</h4>
            <p>
              Access Our Services Anytime, Anywhere, on Desktop, Mobile, and
              Tablet
            </p>
          </div>
          <div className="mt-4">
            <h4 className="mb-3">Diversify Your Portfolio</h4>
            <p>
              Trade Gold, Indices, and Over 2000 Other Financial Instruments
              Convenient Transactions: Benefit from Local Payment Methods and
              Round-the-Clock 24/5 Support.
            </p>
            <p>
              At Abet Global, we recognize the unique requirements of our
              customers, which is why we provide a diverse range of trusted
              platforms and award-winning account types to cater to your
              individual needs. Select from our extensive collection of options,
              ensuring you find the perfect fit for your trading journey
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <PackagesTable />
      </section>

      <section>
        <div className="container">
          <div className="mt-4">
            <h4 className="mb-3">Account Types</h4>
            <p>
              We offer a range of account types with excellent trading
              conditions to suit any trader.
            </p>
            <p>
              Experience 2+ Years of Excellence and Innovation as We Offer
              Premium Access to Financial Markets, Empowered by Our Advanced
              Execution Model. Unlock a World of Investment Opportunities Across
              Multiple Asset Classes, with Thousands of Instruments at Your
              Fingertips.
            </p>
            <p>Based on MT5 account spreads.</p>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <AccountAccordion />
      </section>
    </div>
  );
};

export default AccountTypes;

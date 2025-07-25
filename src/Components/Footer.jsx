import React from "react";
import styles from "../style/Footer.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import Logo from "../assets/logowhite.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className={styles.mainFooter}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>Register Right Now & Get The Special Promo</h2>
              <p className="promo">Sign-in & Get 30-days Free Demo Account</p>
            </Col>
            <Col md={6} className="text-md-end">
              <Button
                href="https://www.secure.abetglobal.com/account/register"
                variant="primary"
                className={`${styles.btn_main} me-3`}
              >
                Register Now
              </Button>
              <Button
                href="#"
                variant="outline-primary"
                className={`${styles.btn_main2} me-3`}
              >
                Try Demo
              </Button>
            </Col>
          </Row>
          <div className={styles.footer_company}>
            <Row>
              {/* Logo and Address */}
              <Col lg={6} className="mb-4">
                <div className={styles.logoContainer}>
                  <img
                    src={Logo}
                    alt="ABET Global Logo"
                    className="img-fluid"
                  />
                </div>
                <address className={styles.address}>
                  <p>
                    1618, Sq Manastirski livadi, 34 Ralevista street, sofia,
                    Bulgaria, P.O.Box 1404.
                  </p>
                  <ul className={styles.contactList}>
                    <li>
                      <p>Info@abetglobal.com</p>
                    </li>
                    <li>
                      <p>+35924928517</p>
                    </li>
                  </ul>
                  <p>
                    ABET LLC offers trading services, owned by Abet LLC with
                    company number A000000977, with a registered address at 9
                    Cassius Webster Building, Grace, Complex, P.O Box 1330, The
                    Valley, AI-2640 Anguilla.
                  </p>
                </address>
              </Col>

              <div className="mb-4 col-lg-3 col-6">
                <h3 className={styles.footerHeading}>Quick Link</h3>
                <ul className={styles.footerLinks}>
                  <li>
                    <Link onClick={handleClick} to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a href="https://api.whatsapp.com/send/?phone=%2B447548718055&text&type=phone_number&app_absent=0">
                      Support
                    </a>
                  </li>
                  <li>
                    <Link onClick={handleClick} to="/faqs">
                      FAQ's
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleClick} to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Get The App */}
              <div className="mb-4 col-lg-3 col-6">
                <h3 className={styles.footerHeading}>Get The App</h3>
                <div className={styles.appButtons}>
                  <a href="#">
                    <img
                      src="https://abet.leosagitrades.com/wp-content/uploads/2024/06/Download-Buttons-06.png"
                      alt="Download App"
                      className="img-fluid mb-2"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://abet.leosagitrades.com/wp-content/uploads/2024/06/Download-Buttons-05.png"
                      alt="Download App"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              {/* Footer Navigation Columns */}
            </Row>
          </div>
          <Row xs={2} lg={4}>
            {/* Trading Accounts */}
            <Col className="mb-4">
              <h3 className={styles.footerHeading}>Trading Accounts</h3>
              <ul className={styles.footerLinks}>
                <li>
                  <Link onClick={handleClick} to="/account-types/micro/">
                    Micro
                  </Link>
                </li>
                <li>
                  <Link onClick={handleClick} to="/account-types/raw-spread/">
                    Raw Spread
                  </Link>
                </li>
                <li>
                  <Link onClick={handleClick} to="/account-types/standard/">
                    Standard
                  </Link>
                </li>
                <li>
                  <Link onClick={handleClick} to="/account-types/prime/">
                    Prime
                  </Link>
                </li>
              </ul>
            </Col>

            {/* Trading Instruments */}
            <Col className="mb-4">
              <h3 className={styles.footerHeading}>Trading Instruments</h3>
              <ul className={styles.footerLinks}>
                <li>
                  <Link onClick={handleClick} to="/account-types/forex/">
                    Forex
                  </Link>
                </li>
                <li>
                  <Link onClick={handleClick} to="/account-types/indices/">
                    Indices
                  </Link>
                </li>
                <li>
                  <Link onClick={handleClick} to="/account-types/energies/">
                    Energies
                  </Link>
                </li>
                <li>
                  <Link onClick={handleClick} to="/account-types/metals/">
                    Metals
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleClick}
                    to="/account-types/cryptocurrency/"
                  >
                    Cryptocurrency
                  </Link>
                </li>
              </ul>
            </Col>

            {/* Trading Conditions */}
            <Col className="mb-4">
              <h3 className={styles.footerHeading}>Trading Conditions</h3>
              <ul className={styles.footerLinks}>
                <li>
                  <Link
                    onClick={handleClick}
                    to="/account-types/execution-policy/"
                  >
                    Execution Policy
                  </Link>
                </li>
                <li>
                  <Link onClick={handleClick} to="/account-types/spreads/">
                    Spreads
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleClick}
                    to="/account-types/margin-leverage/"
                  >
                    Margin and Leverage
                  </Link>
                </li>
              </ul>
            </Col>

            {/* MT5 Platforms */}
            <Col className="mb-4">
              <h3 className={styles.footerHeading}>MT5 Platforms</h3>
              <ul className={styles.footerLinks}>
                <li>
                  <Link onClick={handleClick} to="/meta-trader-5/">
                    MT5 for PC
                  </Link>
                </li>
                <li>
                  <Link onClick={handleClick} to="/meta-trader-5/">
                    MT5 for Mac
                  </Link>
                </li>
                <li>
                  <Link onClick={handleClick} to="/meta-trader-5/">
                    MT5 WebTrader
                  </Link>
                </li>
                <li>
                  <Link onClick={handleClick} to="/meta-trader-5/">
                    MT5 iPad
                  </Link>
                </li>
                <li>
                  <Link onClick={handleClick} to="/meta-trader-5/">
                    MT5 iPhone
                  </Link>
                </li>
                <li>
                  <Link onClick={handleClick} to="/meta-trader-5/">
                    MT5 for Android
                  </Link>
                </li>
                <li>
                  <Link onClick={handleClick} to="/meta-trader-5/">
                    MT5 for Android Tablet
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>

          {/* Legal Links */}
          <div className={styles.legalLinks}>
            <ul>
              <li>
                <Link onClick={handleClick} to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="https://abet.leosagitrades.com/legal-documents">
                  Legal Documents
                </a>
              </li>
              <li>
                <a href="https://abet.leosagitrades.com/blogs">Blogs</a>
              </li>
              <li>
                <a href="https://abet.leosagitrades.com/risk-disclosure/">
                  Risk Disclosure
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Text */}
          <div className={styles.legalText}>
            <p>
              <strong>Legal:</strong> This website is operated by ABET Global
              with registered address at Suite No 1618, Sq Manastirski livadi,
              34 Ralevista street, sofia, Bulgaria, P.O.Box 1404.
            </p>
            <p>
              ABET Global provides trading services, owned by ABET LLC, whose
              company number is A000000977, and whose registered address is 9
              Cassius Webster Building, Grace Complex, P.O. Box 1330, The
              Valley, AI-2640 Anguilla.
            </p>
            <p>
              <strong>Risk Warning:</strong> ABET Global provides trading in
              complex financial instruments like contracts for difference (CFDs)
              that are traded on leverage, and foreign exchange (Currencies, or
              "Currency"). Given that leverage can be used both favorably and
              unfavorably, they are very risky. These products might not be
              suitable for all investors due to the possibility of losing all
              invested funds. It's best to limit your risk exposure to amounts
              you can afford to lose. Before making a choice, be sure you
              understand the dangers involved in trading, your skill level, and
              your investing objectives. Seek outside legal assistance if
              necessary.
            </p>
            <p>
              ABET Global does not offer advice, input, or recommendations
              regarding buying, holding, or selling of a CFD. ABET Global offers
              only execution-based services and is not a financial counselor.
              Please do not consider this correspondence to be an offer or a
              request to carry out a trade.
            </p>
            <p>
              This website is not directed towards any jurisdiction and is not
              intended for use in any way that would break local laws or
              regulations.
            </p>
            <p>
              This website does not offer any products or services for minors.
              Residents of Iran, Turkey, or the United States are not intended
              users of the products and services that are available on this
              website.
            </p>
          </div>

          {/* Copyright and Social */}
          <Row className={styles.copyrightSection}>
            <Col md={6} className="mb-3 mb-md-0">
              <div className={styles.socialIcons}>
                <a
                  href="https://www.facebook.com/abetglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/company/abetglobal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/abet.global"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="http://t.me/abet_global"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram />
                </a>
              </div>
            </Col>
            <Col md={6} className="text-md-end">
              <p>Copyright © 2025 ABET Global All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

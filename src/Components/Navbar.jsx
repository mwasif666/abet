import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Offcanvas,
} from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FiSearch, FiPhone } from "react-icons/fi";
import Logo from "../assets/logo.png";

const CustomNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const megaMenuRef = useRef(null);
  const tradingLinkRef = useRef(null);
  const platformsLinkRef = useRef(null);
  const location = useLocation();

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const toggleMegaMenu = (menuName, e) => {
    e.preventDefault();
    setActiveMegaMenu(activeMegaMenu === menuName ? null : menuName);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  // Close mega menu when clicking outside or route changes
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target) &&
        tradingLinkRef.current &&
        !tradingLinkRef.current.contains(event.target) &&
        platformsLinkRef.current &&
        !platformsLinkRef.current.contains(event.target)
      ) {
        closeMegaMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mega menu when route changes
  useEffect(() => {
    closeMegaMenu();
  }, [location.pathname]);

  // Close mega menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      closeMegaMenu();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Contact Bar */}
      <div className={styles.topContactBar}>
        <Container className="d-flex justify-content-between align-items-center">
          <div className={styles.contactInfo}>
            <span className="me-3">
              <FiPhone className={styles.contactIcon} /> +447548718055
            </span>
            <span>24/5 LIVE SUPPORT</span>
          </div>
          <div className={styles.topLinks}>
            <Link to="/transfers" className={styles.topLink}>
              Transfers and payments
            </Link>
            <Form className={`d-flex ${styles.searchForm}`}>
              <FormControl
                type="search"
                placeholder="Search..."
                className={styles.searchInput}
                aria-label="Search"
              />
              <Button variant="outline-light" className={styles.searchButton}>
                <FiSearch />
              </Button>
            </Form>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" className={styles.mainNavbar}>
        <Container>
          <Navbar.Brand as={Link} to="/" className={styles.brand}>
            <img src={Logo} alt="ABET Global" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={handleShow}
            className={styles.navbarToggle}
          />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={showOffcanvas}
            onHide={handleClose}
            className={styles.offcanvas}
          >
            <Offcanvas.Header closeButton className={styles.offcanvasHeader}>
              <Offcanvas.Title
                id="offcanvasNavbarLabel"
                className={styles.offcanvasTitle}
              >
                <img src="./logowhite.png" alt="ABET Global" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className={`justify-content-end flex-grow-1 pe-3 ${styles.navLinks}`}
              >
                <Nav.Link
                  as={NavLink}
                  to="/"
                  className={styles.navLink}
                  onClick={() => {
                    handleClose();
                    closeMegaMenu();
                  }}
                  exact
                >
                  Home
                </Nav.Link>
                <div ref={tradingLinkRef}>
                  <Nav.Link
                    as={NavLink}
                    to="#"
                    className={styles.navLink}
                    onClick={(e) => toggleMegaMenu("trading", e)}
                    onMouseEnter={() => setActiveMegaMenu("trading")}
                  >
                    Trading
                  </Nav.Link>
                </div>
                <div ref={platformsLinkRef}>
                  <Nav.Link
                    as={NavLink}
                    to="#"
                    className={styles.navLink}
                    onClick={(e) => toggleMegaMenu("platforms", e)}
                    onMouseEnter={() => setActiveMegaMenu("platforms")}
                  >
                    Platforms
                  </Nav.Link>
                </div>
                <Nav.Link
                  as={NavLink}
                  to="/promotions"
                  className={styles.navLink}
                  onClick={() => {
                    handleClose();
                    closeMegaMenu();
                  }}
                >
                  Promotions
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/about"
                  className={styles.navLink}
                  onClick={() => {
                    handleClose();
                    closeMegaMenu();
                  }}
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/partnership"
                  className={styles.navLink}
                  onClick={() => {
                    handleClose();
                    closeMegaMenu();
                  }}
                >
                  Partnership
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Trading Mega Menu */}
      {activeMegaMenu === "trading" && (
        <div
          className={styles.megaMenu}
          onMouseLeave={closeMegaMenu}
          ref={megaMenuRef}
        >
          <Container>
            <div className="row">
              <div className="col-md-3">
                <div className={styles.megaMenuColumn}>
                  <img
                    src="https://abet.leosagitrades.com/wp-content/uploads/2024/06/Logo-Icons-Black-250x90-1.png"
                    alt="ABET Global"
                    className={styles.megaMenuLogo}
                  />
                  <div className={styles.megaMenuContent}>
                    Abet Global offers a wide range of options, including Forex,
                    Stocks, Metals & Commodities, FX Indices, and Indices
                    transactions.
                  </div>
                  <Button
                    as="a"
                    href="https://www.secure.abetglobal.com/account/register"
                    className={styles.megaMenuButton}
                    onClick={closeMegaMenu}
                  >
                    Open Account
                  </Button>
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.megaMenuColumn}>
                  <h3 className={styles.megaMenuTitle}>
                    <Link to="/account-types" onClick={closeMegaMenu}>
                      Account Type
                    </Link>
                  </h3>
                  <ul className={styles.megaMenuList}>
                    <li>
                      <Link to="/account-types/micro" onClick={closeMegaMenu}>
                        Micro
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/account-types/raw-spread"
                        onClick={closeMegaMenu}
                      >
                        Raw Spread
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/account-types/standard"
                        onClick={closeMegaMenu}
                      >
                        Standard
                      </Link>
                    </li>
                    <li>
                      <Link to="/account-types/prime" onClick={closeMegaMenu}>
                        Prime
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.megaMenuColumn}>
                  <h3 className={styles.megaMenuTitle}>Instruments</h3>
                  <ul className={styles.megaMenuList}>
                    <li>
                      <Link to="/forex" onClick={closeMegaMenu}>
                        Forex
                      </Link>
                    </li>
                    <li>
                      <Link to="/indices" onClick={closeMegaMenu}>
                        Indices
                      </Link>
                    </li>
                    <li>
                      <Link to="/energies" onClick={closeMegaMenu}>
                        Energies
                      </Link>
                    </li>
                    <li>
                      <Link to="/metals" onClick={closeMegaMenu}>
                        Metals
                      </Link>
                    </li>
                    <li>
                      <Link to="/cryptocurrency" onClick={closeMegaMenu}>
                        Cryptocurrency
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.megaMenuColumn}>
                  <h3 className={styles.megaMenuTitle}>Trading Conditions</h3>
                  <ul className={styles.megaMenuList}>
                    <li>
                      <Link to="/execution-policy" onClick={closeMegaMenu}>
                        Execution Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/spreads" onClick={closeMegaMenu}>
                        Spreads
                      </Link>
                    </li>
                    <li>
                      <Link to="/margin-leverage" onClick={closeMegaMenu}>
                        Margin & Leverage
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Platforms Mega Menu */}
      {/* {activeMegaMenu === "platforms" && (
        <div
          className={styles.platformsMegaMenu}
          onMouseLeave={closeMegaMenu}
          ref={megaMenuRef}
        >
          <Container>
            <div className="row">
              <div className="col-md-4">
                <div className={styles.platformsHeader}>
                  <img
                    src="https://abet.leosagitrades.com/wp-content/uploads/2024/06/Logo-Icons-Black-250x90-1.png"
                    alt="ABET Global"
                    className={styles.platformsLogo}
                  />
                  <p className={styles.platformsIntro}>
                    At ABET Global, we offer option contracts, leverage, and the
                    advantage of 24/7 trading, empowering you to expand and
                    diversify your investment strategies like never before!
                  </p>
                  <Button
                    href="https://www.secure.abetglobal.com/account/register"
                    className={styles.platformsButton}
                    onClick={closeMegaMenu}
                  >
                    Open Account
                  </Button>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-4">
                    <div className={styles.platformsSection}>
                      <h3 className={styles.platformsSectionTitle}>PC / MAC</h3>
                      <ul className={styles.platformsList}>
                        <li className={styles.checked}>
                          <Link to="/platforms/mt5-pc" onClick={closeMegaMenu}>
                            <span className={styles.platformIcon}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M13.1458647,7289.43426 C13.1508772,7291.43316 13.1568922,7294.82929 13.1619048,7297.46884 C16.7759398,7297.95757 20.3899749,7298.4613 23.997995,7299 C23.997995,7295.84873 24.002005,7292.71146 23.997995,7289.71311 C20.3809524,7289.71311 16.7649123,7289.43426 13.1458647,7289.43426 M4,7289.43526 L4,7296.22153 C6.72581454,7296.58933 9.45162907,7296.94113 12.1724311,7297.34291 C12.1774436,7294.71736 12.1704261,7292.0908 12.1704261,7289.46524 C9.44661654,7289.47024 6.72380952,7289.42627 4,7289.43526 M4,7281.84344 L4,7288.61071 C6.72581454,7288.61771 9.45162907,7288.57673 12.1774436,7288.57973 C12.1754386,7285.96017 12.1754386,7283.34361 12.1724311,7280.72405 C9.44461153,7281.06486 7.97197,7281.42567 4,7281.84344 M24,7288.47179 C20.3879699,7288.48578 16.7759398,7288.54075 13.1619048,7288.55175 C13.1598997,7285.88921 13.1598997,7283.22967 13.1619048,7280.56914 C16.7689223,7280.01844 20.3839599,7279.50072 23.997995,7279 C24,7282.15826 23.997995,7285.31353 24,7288.47179" />
                              </svg>
                            </span>
                            MT5 for PC
                          </Link>
                        </li>
                        <li className={styles.checked}>
                          <Link to="/platforms/mt5-mac" onClick={closeMegaMenu}>
                            <span className={styles.platformIcon}>
                              <svg
                                aria-hidden="true"
                                viewBox="0 0 384 512"
                                fill="currentColor"
                              >
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                              </svg>
                            </span>
                            MT5 for Mac
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/platforms/mt5-webtrader"
                            onClick={closeMegaMenu}
                          >
                            <span className={styles.platformIcon}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z"
                                />
                              </svg>
                            </span>
                            MT5 for WebTrader
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={styles.platformsSection}>
                      <h3 className={styles.platformsSectionTitle}>
                        SmartPhones
                      </h3>
                      <ul className={styles.platformsList}>
                        <li className={styles.checked}>
                          <Link
                            to="/platforms/mt5-iphone"
                            onClick={closeMegaMenu}
                          >
                            <span className={styles.platformIcon}>
                              <svg
                                aria-hidden="true"
                                viewBox="0 0 384 512"
                                fill="currentColor"
                              >
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                              </svg>
                            </span>
                            MT5 for iPhone
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/platforms/mt5-android"
                            onClick={closeMegaMenu}
                          >
                            <span className={styles.platformIcon}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M18.06 9.33002C17.8107 9.33002 17.5716 9.42905 17.3953 9.60534C17.219 9.78162 17.12 10.0207 17.12 10.27V14.53C17.12 14.7793 17.219 15.0184 17.3953 15.1947C17.5716 15.371 17.8107 15.47 18.06 15.47C18.3093 15.47 18.5484 15.371 18.7247 15.1947C18.901 15.0184 19 14.7793 19 14.53V10.27C19 10.0207 18.901 9.78162 18.7247 9.60534C18.5484 9.42905 18.3093 9.33002 18.06 9.33002Z" />
                                <path d="M5.94 9.33002C5.6907 9.33002 5.4516 9.42905 5.27532 9.60534C5.09904 9.78162 5 10.0207 5 10.27V14.53C5 14.7793 5.09904 15.0184 5.27532 15.1947C5.4516 15.371 5.6907 15.47 5.94 15.47C6.1893 15.47 6.4284 15.371 6.60468 15.1947C6.78096 15.0184 6.88 14.7793 6.88 14.53V10.27C6.88 10.0207 6.78096 9.78162 6.60468 9.60534C6.4284 9.42905 6.1893 9.33002 5.94 9.33002Z" />
                                <path d="M7.56 9.33002V15.73C7.56 15.8705 7.58767 16.0097 7.64145 16.1395C7.69522 16.2693 7.77403 16.3873 7.87339 16.4866C7.97275 16.586 8.09071 16.6648 8.22053 16.7186C8.35034 16.7723 8.48948 16.8 8.63 16.8H9.31V19.07C9.31 19.3193 9.40903 19.5584 9.58532 19.7347C9.7616 19.911 10.0007 20.01 10.25 20.01C10.4993 20.01 10.7384 19.911 10.9147 19.7347C11.091 19.5584 11.19 19.3193 11.19 19.07V16.8H12.81V19.07C12.81 19.3193 12.909 19.5584 13.0853 19.7347C13.2616 19.911 13.5007 20.01 13.75 20.01C13.9993 20.01 14.2384 19.911 14.4147 19.7347C14.591 19.5584 14.69 19.3193 14.69 19.07V16.8H15.37C15.6538 16.8 15.9259 16.6873 16.1266 16.4866C16.3273 16.286 16.44 16.0138 16.44 15.73V9.33002H7.56Z" />
                              </svg>
                            </span>
                            MT5 for Android
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={styles.platformsSection}>
                      <h3 className={styles.platformsSectionTitle}>Tablets</h3>
                      <ul className={styles.platformsList}>
                        <li className={styles.checked}>
                          <Link
                            to="/platforms/mt5-ipad"
                            onClick={closeMegaMenu}
                          >
                            <span className={styles.platformIcon}>
                              <svg
                                aria-hidden="true"
                                viewBox="0 0 384 512"
                                fill="currentColor"
                              >
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                              </svg>
                            </span>
                            MT5 for iPad
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/platforms/mt5-android-tablet"
                            onClick={closeMegaMenu}
                          >
                            <span className={styles.platformIcon}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M18.06 9.33002C17.8107 9.33002 17.5716 9.42905 17.3953 9.60534C17.219 9.78162 17.12 10.0207 17.12 10.27V14.53C17.12 14.7793 17.219 15.0184 17.3953 15.1947C17.5716 15.371 17.8107 15.47 18.06 15.47C18.3093 15.47 18.5484 15.371 18.7247 15.1947C18.901 15.0184 19 14.7793 19 14.53V10.27C19 10.0207 18.901 9.78162 18.7247 9.60534C18.5484 9.42905 18.3093 9.33002 18.06 9.33002Z" />
                                <path d="M5.94 9.33002C5.6907 9.33002 5.4516 9.42905 5.27532 9.60534C5.09904 9.78162 5 10.0207 5 10.27V14.53C5 14.7793 5.09904 15.0184 5.27532 15.1947C5.4516 15.371 5.6907 15.47 5.94 15.47C6.1893 15.47 6.4284 15.371 6.60468 15.1947C6.78096 15.0184 6.88 14.7793 6.88 14.53V10.27C6.88 10.0207 6.78096 9.78162 6.60468 9.60534C6.4284 9.42905 6.1893 9.33002 5.94 9.33002Z" />
                                <path d="M7.56 9.33002V15.73C7.56 15.8705 7.58767 16.0097 7.64145 16.1395C7.69522 16.2693 7.77403 16.3873 7.87339 16.4866C7.97275 16.586 8.09071 16.6648 8.22053 16.7186C8.35034 16.7723 8.48948 16.8 8.63 16.8H9.31V19.07C9.31 19.3193 9.40903 19.5584 9.58532 19.7347C9.7616 19.911 10.0007 20.01 10.25 20.01C10.4993 20.01 10.7384 19.911 10.9147 19.7347C11.091 19.5584 11.19 19.3193 11.19 19.07V16.8H12.81V19.07C12.81 19.3193 12.909 19.5584 13.0853 19.7347C13.2616 19.911 13.5007 20.01 13.75 20.01C13.9993 20.01 14.2384 19.911 14.4147 19.7347C14.591 19.5584 14.69 19.3193 14.69 19.07V16.8H15.37C15.6538 16.8 15.9259 16.6873 16.1266 16.4866C16.3273 16.286 16.44 16.0138 16.44 15.73V9.33002H7.56Z" />
                              </svg>
                            </span>
                            MT5 for Android Tablet
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )} */}
    </>
  );
};

export default CustomNavbar;

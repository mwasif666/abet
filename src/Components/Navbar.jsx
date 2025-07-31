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
import { FiSearch, FiPhone, FiChevronLeft } from "react-icons/fi";
import Logo from "../assets/logo.png";
import LogoWhite from "../assets/logowhite.png";
import { IoLogoWindows } from "react-icons/io5";
import { MdOutlineDesktopMac } from "react-icons/md";

const CustomNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [showMobileMegaMenu, setShowMobileMegaMenu] = useState(false);
  const [mobileMenuTitle, setMobileMenuTitle] = useState("");
  const [mobileMenuContent, setMobileMenuContent] = useState(null);
  const megaMenuRef = useRef(null);
  const tradingLinkRef = useRef(null);
  const platformsLinkRef = useRef(null);
  const location = useLocation();

  const handleClose = () => {
    setShowOffcanvas(false);
    setShowMobileMegaMenu(false);
  };

  const handleShow = () => {
    setShowOffcanvas(true);
    setActiveMegaMenu(null);
  };

  const toggleMegaMenu = (menuName, e) => {
    e.preventDefault();
    setActiveMegaMenu(activeMegaMenu === menuName ? null : menuName);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  const handleMobileMegaMenu = (menuName) => {
    setMobileMenuTitle(menuName === "trading" ? "Trading" : "Platforms");
    setShowMobileMegaMenu(true);

    if (menuName === "trading") {
      setMobileMenuContent(
        <>
          <div className={styles.mobileMegaMenuColumn}>
            <h3 className={styles.mobileMegaMenuTitle}>Account Type</h3>
            <ul className={styles.mobileMegaMenuList}>
              <li>
                <Link to="/micro" onClick={handleClose}>
                  Micro
                </Link>
              </li>
              <li>
                <Link to="/raw-spread" onClick={handleClose}>
                  Raw Spread
                </Link>
              </li>
              <li>
                <Link to="/standard" onClick={handleClose}>
                  Standard
                </Link>
              </li>
              <li>
                <Link to="/prime" onClick={handleClose}>
                  Prime
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.mobileMegaMenuColumn}>
            <h3 className={styles.mobileMegaMenuTitle}>Instruments</h3>
            <ul className={styles.mobileMegaMenuList}>
              <li>
                <Link to="/forex" onClick={handleClose}>
                  Forex
                </Link>
              </li>
              <li>
                <Link to="/indices" onClick={handleClose}>
                  Indices
                </Link>
              </li>
              <li>
                <Link to="/energies" onClick={handleClose}>
                  Energies
                </Link>
              </li>
              <li>
                <Link to="/metals" onClick={handleClose}>
                  Metals
                </Link>
              </li>
              <li>
                <Link to="/cryptocurrency" onClick={handleClose}>
                  Cryptocurrency
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.mobileMegaMenuColumn}>
            <h3 className={styles.mobileMegaMenuTitle}>Trading Conditions</h3>
            <ul className={styles.mobileMegaMenuList}>
              <li>
                <Link to="/execution-policy" onClick={handleClose}>
                  Execution Policy
                </Link>
              </li>
              <li>
                <Link to="/spreads" onClick={handleClose}>
                  Spreads
                </Link>
              </li>
              <li>
                <Link to="/margin-leverage" onClick={handleClose}>
                  Margin & Leverage
                </Link>
              </li>
            </ul>
          </div>
        </>
      );
    } else {
      setMobileMenuContent(
        <>
          <div className={styles.mobileMegaMenuColumn}>
            <h3 className={styles.mobileMegaMenuTitle}>PC / MAC</h3>
            <ul className={styles.mobileMegaMenuList}>
              <li className={styles.platform_icons}>
                <IoLogoWindows className={styles.platform_icon_style} />
                <Link to="/meta-trader-5" onClick={handleClose}>
                  MT5 for PC
                </Link>
              </li>
              <li className={styles.platform_icons}>
                <img
                  src="./mac2.png"
                  className={styles.images_megamenu}
                  alt=""
                />
                <Link to="/meta-trader-5" onClick={handleClose}>
                  MT5 for Mac
                </Link>
              </li>
              <li className={styles.platform_icons}>
                <MdOutlineDesktopMac className={styles.platform_icon_style} />
                <Link to="/meta-trader-5" onClick={handleClose}>
                  MT5 for WebTrader
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.mobileMegaMenuColumn}>
            <h3 className={styles.mobileMegaMenuTitle}>SmartPhones</h3>
            <ul className={styles.mobileMegaMenuList}>
              <li className={styles.platform_icons}>
                <img
                  src="./mac2.png"
                  className={styles.images_megamenu}
                  alt=""
                />
                <Link to="/meta-trader-5" onClick={handleClose}>
                  MT5 for IPhone
                </Link>
              </li>
              <li className={styles.platform_icons}>
                <img
                  src="./andriod.png"
                  className={styles.images_megamenu}
                  alt=""
                />
                <Link to="/meta-trader-5" onClick={handleClose}>
                  MT5 for Android
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.mobileMegaMenuColumn}>
            <h3 className={styles.mobileMegaMenuTitle}>Tablets</h3>
            <ul className={styles.mobileMegaMenuList}>
              <li className={styles.platform_icons}>
                <img
                  src="./mac2.png"
                  className={styles.images_megamenu}
                  alt=""
                />
                <Link to="/execution-policy" onClick={handleClose}>
                  MT5 for IPad
                </Link>
              </li>
              <li className={styles.platform_icons}>
                <img
                  src="./andriod.png"
                  className={styles.images_megamenu}
                  alt=""
                />
                <Link to="/spreads" onClick={handleClose}>
                  MT5 for Android
                </Link>
              </li>
            </ul>
          </div>
        </>
      );
    }
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
    handleClose();
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
        <Container>
          <div className="row ">
            <div className="col-lg-6 col-12">
              <div className={styles.contactInfo}>
                <span className="me-3">
                  <a
                    href="https://wa.me/447548718055"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.phoneLink}
                  >
                    <FiPhone className={styles.contactIcon} /> +447548718055
                  </a>
                </span>
                <span>
                  <Link to="/contact" className={styles.contactLink}>
                    Contact Us 24/5
                  </Link>
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className={styles.topLinks}>
                <a
                  href="https://secure.abetglobal.com/"
                  className={styles.topLink}
                >
                  Transfers and payments
                </a>
                <Form className={`d-flex ${styles.searchForm}`}>
                  <FormControl
                    type="search"
                    placeholder="Search..."
                    className={styles.searchInput}
                    aria-label="Search"
                  />
                  <Button
                    variant="outline-light"
                    className={styles.searchButton}
                  >
                    <FiSearch />
                  </Button>
                </Form>
              </div>
            </div>
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
                <img src={LogoWhite} alt="ABET Global" />
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
                  onMouseEnter={() => {
                    closeMegaMenu();
                  }}
                >
                  Home
                </Nav.Link>
                <div ref={tradingLinkRef}>
                  <Nav.Link
                    as={NavLink}
                    to="#"
                    className={styles.navLink}
                    onClick={(e) => {
                      if (window.innerWidth < 992) {
                        e.preventDefault();
                        handleMobileMegaMenu("trading");
                      } else {
                        toggleMegaMenu("trading", e);
                      }
                    }}
                    onMouseEnter={() => {
                      if (window.innerWidth >= 992) {
                        setActiveMegaMenu("trading");
                      }
                    }}
                  >
                    Trading
                  </Nav.Link>
                </div>
                <div ref={platformsLinkRef}>
                  <Nav.Link
                    as={NavLink}
                    to="#"
                    className={styles.navLink}
                    onClick={(e) => {
                      if (window.innerWidth < 992) {
                        e.preventDefault();
                        handleMobileMegaMenu("platforms");
                      } else {
                        toggleMegaMenu("platforms", e);
                      }
                    }}
                    onMouseEnter={() => {
                      if (window.innerWidth >= 992) {
                        setActiveMegaMenu("platforms");
                      }
                    }}
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
                  onMouseEnter={() => {
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
                  onMouseEnter={() => {
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
                  onMouseEnter={() => {
                    closeMegaMenu();
                  }}
                >
                  Partnership
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/refer-a-friend"
                  className={styles.navLink}
                >
                  Refer a Friend
                </Nav.Link>
                <Nav.Link as={NavLink} to="/partner" className={styles.navLink}>
                  Become a Partner
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Trading Mega Menu */}
      {activeMegaMenu === "trading" && (
        <Container className={styles.container}>
          <div
            className={styles.megaMenu}
            onMouseLeave={closeMegaMenu}
            ref={megaMenuRef}
          >
            <div className="row">
              <div className="col-md-3">
                <div className={styles.megaMenuColumn}>
                  <img
                    src={Logo}
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
                    <Link to="/account-type">Account Type</Link>
                  </h3>
                  <ul className={styles.megaMenuList}>
                    <li>
                      <Link to="/micro" onClick={closeMegaMenu}>
                        Micro
                      </Link>
                    </li>
                    <li>
                      <Link to="/raw-spread" onClick={closeMegaMenu}>
                        Raw Spread
                      </Link>
                    </li>
                    <li>
                      <Link to="/standard" onClick={closeMegaMenu}>
                        Standard
                      </Link>
                    </li>
                    <li>
                      <Link to="/prime" onClick={closeMegaMenu}>
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
          </div>
        </Container>
      )}

      {/* Platforms Mega Menu */}
      {activeMegaMenu === "platforms" && (
        <Container>
          <div
            className={styles.megaMenu}
            onMouseLeave={closeMegaMenu}
            ref={megaMenuRef}
          >
            <div className="row">
              <div className="col-md-3">
                <div className={styles.megaMenuColumn}>
                  <img
                    src={Logo}
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
                  <h3 className={styles.megaMenuTitle}>PC / MAC</h3>
                  <ul className={styles.megaMenuList}>
                    <li className={styles.platform_icons}>
                      <IoLogoWindows className={styles.platform_icon_style} />
                      <Link to="/meta-trader-5" onClick={closeMegaMenu}>
                        MT5 for PC
                      </Link>
                    </li>
                    <li className={styles.platform_icons}>
                      <img
                        src="./mac2.png"
                        className={styles.images_megamenu}
                        alt=""
                      />
                      <Link to="/meta-trader-5" onClick={closeMegaMenu}>
                        MT5 for Mac
                      </Link>
                    </li>
                    <li className={styles.platform_icons}>
                      <MdOutlineDesktopMac
                        className={styles.platform_icon_style}
                      />
                      <Link to="/meta-trader-5" onClick={closeMegaMenu}>
                        MT5 for WebTrader
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.megaMenuColumn}>
                  <h3 className={styles.megaMenuTitle}>SmartPhones</h3>
                  <ul className={styles.megaMenuList}>
                    <li className={styles.platform_icons}>
                      <img
                        src="./mac2.png"
                        className={styles.images_megamenu}
                        alt=""
                      />
                      <Link to="/meta-trader-5" onClick={closeMegaMenu}>
                        MT5 for IPhone
                      </Link>
                    </li>
                    <li className={styles.platform_icons}>
                      <img
                        src="./andriod.png"
                        className={styles.images_megamenu}
                        alt=""
                      />
                      <Link to="/meta-trader-5" onClick={closeMegaMenu}>
                        MT5 for Android
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.megaMenuColumn}>
                  <h3 className={styles.megaMenuTitle}>Tablets</h3>
                  <ul className={styles.megaMenuList}>
                    <li className={styles.platform_icons}>
                      <img
                        src="./mac2.png"
                        className={styles.images_megamenu}
                        alt=""
                      />
                      <Link to="/execution-policy" onClick={closeMegaMenu}>
                        MT5 for IPad
                      </Link>
                    </li>
                    <li className={styles.platform_icons}>
                      <img
                        src="./andriod.png"
                        className={styles.images_megamenu}
                        alt=""
                      />
                      <Link to="/spreads" onClick={closeMegaMenu}>
                        MT5 for Android
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}

      {/* Mobile Mega Menu Offcanvas */}
      <Offcanvas
        show={showMobileMegaMenu}
        onHide={() => setShowMobileMegaMenu(false)}
        placement="end"
        className={styles.mobileMegaMenuCanvas}
      >
        <Offcanvas.Header className={styles.mobileMegaMenuHeader}>
          <Button
            variant="link"
            onClick={() => setShowMobileMegaMenu(false)}
            className={styles.mobileMegaMenuBackButton}
          >
            <FiChevronLeft size={24} />
          </Button>
          <Offcanvas.Title className={styles.mobileMegaMenuTitle}>
            {mobileMenuTitle}
          </Offcanvas.Title>
          <div
            className={styles.mobileMegaMenuCloseButton}
            onClick={handleClose}
          >
            &times;
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.mobileMegaMenuBody}>
          {mobileMenuContent}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;

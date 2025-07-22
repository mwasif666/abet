import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Offcanvas,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FiSearch, FiPhone } from "react-icons/fi";
import Logo from "../assets/logo.png";

const CustomNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

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
                  onClick={handleClose}
                  exact
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="#"
                  className={styles.navLink}
                  onClick={handleClose}
                  onMouseEnter={() => setShowMegaMenu(true)}
                >
                  Trading
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/platforms"
                  className={styles.navLink}
                  onClick={handleClose}
                >
                  Platforms
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/promotions"
                  className={styles.navLink}
                  onClick={handleClose}
                >
                  Promotions
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/about"
                  className={styles.navLink}
                  onClick={handleClose}
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/partnership"
                  className={styles.navLink}
                  onClick={handleClose}
                >
                  Partnership
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Mega Menu */}
      {showMegaMenu && (
        <div
          className={styles.megaMenu}
          onMouseLeave={() => setShowMegaMenu(false)}
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
                  >
                    Open Account
                  </Button>
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.megaMenuColumn}>
                  <h3 className={styles.megaMenuTitle}>
                    <Link to="/account-types">Account Type</Link>
                  </h3>
                  <ul className={styles.megaMenuList}>
                    <li>
                      <Link to="/account-types/micro">Micro</Link>
                    </li>
                    <li>
                      <Link to="/account-types/raw-spread">Raw Spread</Link>
                    </li>
                    <li>
                      <Link to="/account-types/standard">Standard</Link>
                    </li>
                    <li>
                      <Link to="/account-types/prime">Prime</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.megaMenuColumn}>
                  <h3 className={styles.megaMenuTitle}>Instruments</h3>
                  <ul className={styles.megaMenuList}>
                    <li>
                      <Link to="/forex">Forex</Link>
                    </li>
                    <li>
                      <Link to="/indices">Indices</Link>
                    </li>
                    <li>
                      <Link to="/energies">Energies</Link>
                    </li>
                    <li>
                      <Link to="/metals">Metals</Link>
                    </li>
                    <li>
                      <Link to="/cryptocurrency">Cryptocurrency</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.megaMenuColumn}>
                  <h3 className={styles.megaMenuTitle}>Trading Conditions</h3>
                  <ul className={styles.megaMenuList}>
                    <li>
                      <Link to="/execution-policy">Execution Policy</Link>
                    </li>
                    <li>
                      <Link to="/spreads">Spreads</Link>
                    </li>
                    <li>
                      <Link to="/margin-leverage">Margin & Leverage</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default CustomNavbar;

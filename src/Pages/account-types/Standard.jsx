import styles from "./Micro.module.css";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";
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
                Standard Climbs, Trades Win!
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
                Experience the perfect blend of affordability and performance
                with the Abet Global Standard Account. With a minimum deposit of
                just $10, floating spreads starting at 0.5 pips, and leverage up
                to 1:1000, this account is ideal for traders seeking reliability
                and flexibility. Designed to support your trading success, it
                offers advanced features and tools without compromising
                simplicity.
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
                Enjoy seamless trading with market execution, ensuring your
                trades are processed in real-time. Our technology-driven <br />
                platform eliminates delays for optimal results.
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
                      Trade without limits! Whether you prefer scalping,
                      hedging, or automated trading, our Standard Account
                      supports all strategies for ultimate trading freedom.
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
                      Gain actionable insights with Level II pricing. Understand
                      liquidity and market depth to make informed decisions and
                      refine your trading strategies.
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
                Manage your funds effortlessly with secure and versatile deposit
                and withdrawal methods, tailored to meet your trading needs.
              </p>

              <h3 className={styles.sectionTitle}>Flexible Lot Sizing</h3>
              <p className={styles.sectionText}>
                Trade with precision! Our account supports micro, mini, and
                standard lots, allowing you to control your trade sizes for
                strategic risk management.
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
                          commodities, and global indices, offering you access
                          to global financial markets.
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
                          Maximize your trading potential with leverage up to
                          1:1000, empowering you to control larger positions
                          with a smaller investment.
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
                          We support USD and other major currencies, making it
                          easy for traders worldwide to access global markets
                          with ease.
                          <br />
                          Leap financial success with the Abet Global Standard
                          Account—your gateway to professional trading!
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

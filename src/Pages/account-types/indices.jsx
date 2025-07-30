import React from "react";
import styles from "./Forex.module.css";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";
import RawSpreadTable from "./PriceSection";
import Phone from "../../assets/phone.png";
import { NavLink, useLocation } from "react-router-dom";
import StandardPrice from "./StandardPrice";
import ForexBenefits from "../../Components/ForexBenefits";
import ForexAccordion from "../../Components/ForexAccordion";
import Benefit2 from "../../Components/Benefit2";
import Accordion2 from "../../Components/Accordion2";

const Indices = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className={styles.rawSpreadAccount}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.section}`}>
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className={styles.heroTitle}>Indices</h2>
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
                      to="/forex"
                      className={`${styles.navLink} ${
                        isActive("/forex") ? styles.active : ""
                      }`}
                    >
                      Forex
                    </NavLink>

                    <NavLink
                      to="/indices"
                      className={`${styles.navLink} ${
                        isActive("/indices") ? styles.active : ""
                      }`}
                    >
                      Indices
                    </NavLink>

                    <NavLink
                      to="/energies"
                      className={`${styles.navLink} ${
                        isActive("/energies") ? styles.active : ""
                      }`}
                    >
                      Energies
                    </NavLink>

                    <NavLink
                      to="/metals"
                      className={`${styles.navLink} ${
                        isActive("/metals") ? styles.active : ""
                      }`}
                    >
                      Metals
                    </NavLink>
                    <NavLink
                      to="/cryptocurrency"
                      className={`${styles.navLink} ${
                        isActive("/cryptocurrency") ? styles.active : ""
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
        <Benefit2 />
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
            <div className="mt-5">
              <p>
                Stock indices trading with ABET Global provides investors with a
                cost-efficient and straightforward way to access global Stock
                markets. This trading method allows you to speculate on global
                economic trends, offering the flexibility to profit from both
                market upswings and downturns. Leverage of up to 1:500 is
                available to amplify trading positions, enabling greater
                exposure to market movements while diversifying portfolios.
                Additionally, no extra fees are applied, ensuring a transparent
                and direct trading experience.
                <br />
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Margin and Swap Calculations</h4>
              <p>
                Swap rates for Stock indices are based on the respective index
                currency’s interbank rate. For long positions, the interbank
                rate plus a markup is applied, while short positions receive the
                rate minus a markup. These adjustments occur daily at 00:00
                (GMT+2) and can take several minutes. For trades held open over
                the weekend, swaps are charged for three days. Margin
                requirements are calculated based on the lot size, contract
                size, and opening price. Hedged positions on derivatives
                maintain a 50% margin, provided the margin level exceeds 100%.
                It’s important to note that ABET Global does not offer automatic
                rollovers for contracts with an expiration date.
              </p>
            </div>

            <div className="mt-4">
              <h4 className="mb-3">
                Understanding Stock Indices: Global Market Indicators
              </h4>
              <p>
                Stock indices, commonly referred to as stock indices, measure
                the value of a particular section of the stock market. These
                indices are calculated based on a weighted average of selected
                stocks, reflecting the performance of a specific group of
                companies. Well-known examples include the NASDAQ, representing
                the US stock market, and indices like the S&P 500, FTSE 100, and
                Nikkei 225, which track the largest companies in the US, UK, and
                Japan, respectively.
                <br />
                <br />
                The primary function of stock indices is to indicate the overall
                direction of a particular stock market or a nation’s economy.
                However, as these indices are composed of multiple companies,
                significant movements by individual companies or sectors can
                greatly influence the index. Each index applies different
                weighting methods to calculate the contribution of individual
                stocks, with price-weighted and capitalization-weighted being
                the two primary methods.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Commonly Traded Indices by Category:</h4>
              <p>
                <strong>Price-Weighted Indices:</strong> Dow Jones (US30),
                Nikkei 225 (Japan225)
              </p>
              <p>
                <strong>Capitalization-Weighted Indices: </strong> DFTSE 100
                (UK100), ASX200 (Australia200), Hang Seng Index (HK50), DAX
                (Germany30), CAC 40 (France40), IBEX35 (Spain35)
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Key Global Stock Indices:</h4>

              <p>
                <strong>S&P 500 (US500):</strong> Launched in 1957 by Standard &
                Poor's, the S&P 500 is one of the most widely used benchmarks
                for the US Stock market, representing approximately 75% of the
                total market capitalization of American equities.
              </p>

              <p>
                <strong>ASX200 (Australia200):</strong> A market-capitalization
                weighted index covering stocks listed on the Australian
                Securities Exchange, one of the world's largest exchanges by
                daily turnover.
              </p>

              <p>
                <strong>Nikkei 225 (DP225):</strong> Japan's leading stock
                index, covering the top companies listed on the Tokyo Stock
                Exchange, the third largest stock exchange globally.
              </p>

              <p>
                <strong>GerMid50Cash:</strong> Tracks the performance of the 50
                largest German companies by market capitalization just below the
                DAX index.
              </p>

              <p>
                <strong>GerTech30Cash:</strong> Focuses on the 30 leading
                technology companies in Germany's Prime Standard segment below
                the DAX level.
              </p>

              <p>
                <strong>TaiwanCash:</strong> This index highlights the
                performance of Taiwan's large and mid-cap companies, with a
                strong presence in Information Technology, Financials, and
                Industrials.
              </p>

              <p>
                <strong>HSI (HK50):</strong> The Hang Seng Index has tracked the
                50 largest companies on the Hong Kong Stock Exchange since 1969,
                offering insight into Asia's second-largest stock exchange.
              </p>

              <p>
                <strong>FTSE 100 (UK100):</strong> Comprising the top 100
                companies by market capitalization listed on the London Stock
                Exchange, it is a leading indicator of the UK economy.
              </p>

              <p>
                <strong>NASDAQ 100 (US100):</strong> A subset of the NASDAQ
                Composite, featuring the 107 largest non-financial companies
                listed on the NASDAQ Stock Exchange.
              </p>

              <p>
                <strong>DJIA (US30):</strong> The Dow Jones Industrial Average
                tracks 30 major US companies and is the second-oldest stock
                index in the United States, calculated through the DJIA Divisor.
              </p>

              <p>
                <strong>DAX (GER40):</strong> Germany's premier stock index,
                covering 40 of the largest companies on the Frankfurt Stock
                Exchange.
              </p>

              <p>
                <strong>CAC 40 (FRA40):</strong> The French benchmark stock
                index, representing the top 40 companies by market
                capitalization on the Euronext Paris exchange.
              </p>

              <p>
                <strong>Capitalization-Weighted Indices:</strong> FTSE 100
                (UK100), ASX200 (Australia200), Hang Seng Index (HK50), DAX
                (Germany30), CAC 40 (France40), IBEX35 (Spain35)
              </p>

              <p>
                These indices serve as crucial indicators of market trends and
                economic performance, providing traders with valuable insights
                into regional and global markets.
              </p>
            </div>
          </Row>
        </div>
      </section>
      <Accordion2 />
    </div>
  );
};

export default Indices;

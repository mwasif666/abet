import React from "react";
import styles from "./Forex.module.css";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";
import RawSpreadTable from "./PriceSection";
import Phone from "../../assets/phone.png";
import { NavLink, useLocation } from "react-router-dom";
import StandardPrice from "./StandardPrice";
import ForexBenefits from "../../Components/ForexBenefits";
import ForexAccordion from "../../Components/ForexAccordion";
import Benefit4 from "../../Components/Benefit4";

const Metals = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className={styles.rawSpreadAccount}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.section}`}>
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className={styles.heroTitle}>Forex</h2>
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
                        isActive("/account-types/indices") ? styles.active : ""
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
        <Benefit4 />
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
          </Row>
        </Container>
      </section>
      <section>
        <div className="container">
          <Row className="mt-5">
            <div className="mt-4">
              <h4 className="mb-3">Trading Conditions:</h4>

              <ul>
                <li>
                  Margin requirements are calculated as [Lots x Contract Size x
                  Open Price] ÷ [Lowest of Account or Symbol Leverage].
                </li>
                <li>
                  If positions remain open overnight, swap fees are applied
                  based on interest rate differentials between currency pairs.
                </li>
                <li>
                  Margin levels are fixed at 50% for hedged positions when the
                  margin exceeds 100%.
                </li>
                <li>
                  ABET Global does not offer automatic rollover for expiring
                  financial contracts.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Understanding Precious Metals Trading:</h4>
              <p>
                Precious metals, including gold, silver, platinum, and
                palladium, are crucial commodities in the global market. Their
                high economic value and durability make them attractive
                investment assets, often traded via futures contracts, spot
                prices, forwards, and options.
              </p>
              <p>
                Globally, the precious metals market is dominated by key players
                from Asia, North America, and Europe. While Asia leads in
                consumption (China, India, and Singapore are major consumers),
                Europe and North America dominate the futures exchanges where
                these assets are actively traded.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">
                Gold and Precious Metals Market Overview:
              </h4>
              <p>
                Precious metals such as gold and silver are unique assets that
                retain value regardless of economic fluctuations, making them
                popular for long-term investments. These assets can also be
                traded for short-term gains via derivatives and contracts,
                offering investors flexibility without requiring physical
                ownership.
              </p>
              <p>
                Gold prices, unlike most commodities, are influenced less by
                production levels and more by global political and economic
                shifts, making it a strong hedge during uncertain times. Other
                metals like platinum, palladium, and silver also serve as
                valuable stores of wealth, especially during periods of monetary
                instability.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Price Influences and Volatility:</h4>
              <p>
                Several factors drive price fluctuations in the precious metals
                market, including speculative investments by global financial
                institutions, demand trends from jewelry buyers, and broader
                economic conditions. Rising wealth often increases demand for
                precious metal products, while investors seeking higher-risk
                options can cause certain metal prices to fall. Changes in
                demand for alternative financial assets also affect the pricing
                dynamics of precious metals.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">
                Evolution of Gold and Precious Metals Trading:
              </h4>
              <p>
                Gold and precious metals have long been symbols of wealth, with
                gold’s history dating back to prehistoric bartering systems. As
                early as 600 BC, gold coins were minted and used for trade, with
                the gold standard remaining in place until the 1930s. Known for
                its conductivity, malleability, and resistance to corrosion,
                gold is valued in industries ranging from jewelry and
                electronics to medicine. Despite the shift to fiat currencies in
                1976, gold continues to serve as a reliable investment.
              </p>
              <p>
                Silver, also used for monetary exchange for over 4,000 years,
                was a key asset until the silver standard ended in the 19th
                century. Today, silver remains a strong investment choice, with
                silver futures actively traded in global markets. Online trading
                has further simplified access to silver exchange-traded
                products, making it easier for investors to invest long-term.
              </p>
              <p>
                In contrast, platinum and palladium, though relatively new to
                the financial world, have gained prominence due to their rarity
                and industrial applications. Platinum, which is 10 times rarer
                than gold, has been used in jewelry, the automotive sector, and
                medicine since the 18th century. Palladium, discovered in the
                19th century, is now crucial for industries such as automobiles,
                electronics, and healthcare. These metals can surpass gold in
                price during periods of economic stability, though their
                volatility makes gold a safer long-term investment during
                uncertainty.
              </p>
              <p>
                Modern Precious Metals Trading Since the 1970s, gold and other
                precious metals have been popular trading commodities. Alongside
                Forex, these metals serve as essential tools for portfolio
                diversification, particularly during inflationary periods or
                political instability.
              </p>
              <p>
                Investors utilize futures contracts, a type of derivative, to
                mitigate risk by locking in prices for future transactions. This
                strategy helps protect against sudden price swings. Precious
                metals trading offers flexibility, allowing for-profit whether
                markets rise or fall. Investors can go long (buy) or go short
                (sell) based on market expectations, and can also trade multiple
                futures contracts to take advantage of price fluctuations,
                ensuring profits in both bullish and bearish conditions.
              </p>
            </div>
          </Row>
        </div>
      </section>
      <ForexAccordion />
    </div>
  );
};

export default Metals;

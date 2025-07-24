import React from "react";
import styles from "./Forex.module.css";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";

import { NavLink, Link, useLocation } from "react-router-dom";

import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import Benefit7 from "../../Components/Benefit7";
import { FaArrowRight } from "react-icons/fa";
import Benefit8 from "../../Components/Benefit8";

const Margin = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className={styles.rawSpreadAccount}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.section}`}>
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className={styles.heroTitle}>Margin & Leverage</h2>
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
                      to="/account-types/execution-policy"
                      className={`${styles.navLink} ${
                        isActive("/account-types/execution-policy")
                          ? styles.active
                          : ""
                      }`}
                    >
                      Execution Policy
                    </NavLink>

                    <NavLink
                      to="/account-types/spreads"
                      className={`${styles.navLink} ${
                        isActive("/account-types/spreads") ? styles.active : ""
                      }`}
                    >
                      Spreads
                    </NavLink>

                    <NavLink
                      to="/account-types/margin-leverage"
                      className={`${styles.navLink} ${
                        isActive("/account-types/margin-leverage")
                          ? styles.active
                          : ""
                      }`}
                    >
                      Margin & Leverage
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="row">
        <Benefit8 />
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
              <p>
                At ABET Global, clients benefit from flexible leverage options
                ranging from 1:1 to 1:1000, providing greater control over their
                trading strategies. With real-time risk exposure monitoring and
                negative balance protection, you can trade confidently without
                concerns about unexpected margin changes during weekends or
                overnight.
                <br />
              </p>
              <p>
                ABET Global offers consistent margin requirements and leverage
                across accounts, tailored according to your total account
                equity.
              </p>
            </div>

            <div className="mt-4">
              <div className="table-responsive">
                <table className="table table-bordered ha-table">
                  <thead className="ha-table__head table-dark2">
                    <tr className="ha-table__head-column">
                      <th className="ha-table__head-column-cell">Leverage</th>
                      <th className="ha-table__head-column-cell">
                        Total Equity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1:1 to 1:1000</td>
                      <td>$5 — $40,000</td>
                    </tr>
                    <tr>
                      <td>1:1 to 1:500</td>
                      <td>$40,001 — $80,000</td>
                    </tr>
                    <tr>
                      <td>1:1 to 1:200</td>
                      <td>$80,001 — $200,000</td>
                    </tr>
                    <tr>
                      <td>1:1 to 1:100</td>
                      <td>$200,001 +</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">
                Understanding Margin Requirements for Trading:
              </h4>
              <ul>
                <li>
                  Margin represents the collateral needed to manage credit risks
                  in trading. It is typically expressed as a percentage of the
                  position size, such as 5% or 1%. For example, a 1% margin
                  requires a $10,000 deposit for a $1,000,000 position. The
                  primary purpose of holding funds in your account is to meet
                  margin requirements.
                </li>
                <li>
                  For Forex, Gold, and Silver trades, new positions can be
                  opened as long as the margin requirement is less than or equal
                  to the available free margin. With no margin needed for
                  hedging, hedged positions can be opened even when the margin
                  level drops below 100%.
                </li>
                <li>
                  For other instruments, the margin requirement for hedged
                  positions is 50%. New hedged positions can be opened if the
                  total equity covers the final margin requirements.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Dynamic Margin for Cryptocurrencies:</h4>
              <ul>
                <li>
                  At ABET Global, leverage on Cryptocurrency CFDs is dynamic,
                  adjusting automatically based on the traded volume of each
                  instrument. As trading volume increases, so does the margin
                  percentage in proportion to the leverage.
                </li>
                <li>
                  Each instrument’s margin is calculated separately, ensuring
                  precise margin management across multiple open positions.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <div className="table-responsive">
                <table className="table table-bordered ha-table">
                  <thead className="ha-table__head table-dark2">
                    <tr className="ha-table__head-column">
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Lots
                          </div>
                        </div>
                      </th>
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Dynamic Margin Percentage
                          </div>
                        </div>
                      </th>
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Leverage
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="ha-table__body">
                    {/* Row 1 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            0-14
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            0.2%
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            1:500
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            14-43
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            0.4%
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            1:250
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            43-70
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">2%</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            1:50
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            70+
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            100%
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            1:1
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-2">
              <h4 className="mb-2">
                Example 1: USD base currency account trades 10 lots of BTCUSD at
                65,000 USD.
              </h4>
              <div className="table-responsive">
                <table className="table table-bordered ha-table">
                  <thead className="ha-table__head table-dark2">
                    <tr className="ha-table__head-column">
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Lots
                          </div>
                        </div>
                      </th>
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Dynamic Margin Percentage
                          </div>
                        </div>
                      </th>
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Actual Used Margin
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="ha-table__body">
                    {/* Row 1 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">10</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            0.2%
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            Lots x Contract Size x OpenPrice x MarginPercentage
                            = 10 x 1 x 65,000 x 0.2 % = 1,300 USD
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            {""}
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            {""}
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            Total Margin = 1,300 USD
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-2">
              <h4 className="mb-2">
                Example 2: USD base currency account trades 35 lots of BTCUSD at
                65,000 USD.
              </h4>
              <div className="table-responsive">
                <table className="table table-bordered ha-table">
                  <thead className="ha-table__head table-dark2">
                    <tr className="ha-table__head-column">
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Lots
                          </div>
                        </div>
                      </th>
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Dynamic Margin Percentage
                          </div>
                        </div>
                      </th>
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Actual Used Margin
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="ha-table__body">
                    {/* Row 1 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">10</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">14</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            Lots x Contract Size x OpenPrice x MarginPercentage
                            = 14 x 1 x 65,000 x 0.2 % = 1,820 USD
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">21</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            0.4%
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            Lots x Contract Size x OpenPrice x MarginPercentage
                            = 21 x 1 x 65,000 x 0.4 % = 5,460 USD
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            {""}
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            {""}
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            Total Margin = 7,280 USD
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-2">
              <h4 className="mb-2">
                Example 3: USD base currency account trades 75 lots of BTCUSD at
                65,000 USD.
              </h4>
              <div className="table-responsive">
                <table className="table table-bordered ha-table">
                  <thead className="ha-table__head table-dark2">
                    <tr className="ha-table__head-column">
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Lots
                          </div>
                        </div>
                      </th>
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Dynamic Margin Percentage
                          </div>
                        </div>
                      </th>
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Actual Used Margin
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="ha-table__body">
                    {/* Row 1 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">14</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            0.2%
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            Lots x Contract Size x OpenPrice x MarginPercentage
                            = 14 x 1 x 65,000 x 0.2 % = 1,820 USD
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">29</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            0.4%
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            Lots x Contract Size x OpenPrice x MarginPercentage
                            = 29 x 1 x 65,000 x 0.4 % = 7,540 USD
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">27</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">2%</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            Lots x Contract Size x OpenPrice x MarginPercentage
                            = 27 x 1 x 65,000 x 2 % = 35,100 USD
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">5</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            100%
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            Lots x Contract Size x OpenPrice x MarginPercentage
                            = 5 x 1 x 65,000 x 100 % = 325,000 USD
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 5 - Total */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text"></div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text"></div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            Total Margin = 369,460 USD
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <p>
                In cases where the account leverage is below the leverage value
                of the traded instrument, leverage decreases to meet the account
                leverage value.
              </p>

              <p>
                In the examples below, you can see how dynamic margin is
                calculated and restricted by account leverage. Kindly note that
                the values in the tables are for illustrative purposes only and
                should not be used for making trading calculations.
              </p>
            </div>
            <div className="mt-2">
              <h4 className="mb-4">Examples:</h4>
              <h4 className="mb-4">BTCUSD</h4>
              <div className="table-responsive">
                <table className="table table-bordered ha-table">
                  <thead className="ha-table__head table-dark2">
                    <tr className="ha-table__head-column">
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Lots
                          </div>
                        </div>
                      </th>
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Dynamic Margin Percentage
                          </div>
                        </div>
                      </th>
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Leverage
                          </div>
                        </div>
                      </th>
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Account Leverage
                          </div>
                        </div>
                      </th>
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Leverage Used
                          </div>
                        </div>
                      </th>
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Used Dynamic Margin Percentage
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="ha-table__body">
                    {/* Row 1 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            0-14
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            0.2%
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            1:500
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell" rowSpan="4">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            1:100
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            1:100
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">1%</div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            14–43
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            0.4%
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            1:250
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            1:100
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">1%</div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            43–70
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">2%</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            1:50
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            1:50
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">2%</div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            70+
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            100%
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            1:1
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            1:1
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            100%
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-2">
              <h4 className="mb-4">
                Example 4: USD base currency account with 1:100 account
                leverage, trades 75 lots of BTCUSD at 65,000 USD.
              </h4>

              <div className="table-responsive">
                <table className="table table-bordered ha-table">
                  <thead className="ha-table__head table-dark2">
                    <tr className="ha-table__head-column">
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Lots
                          </div>
                        </div>
                      </th>
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Dynamic Margin Percentage
                          </div>
                        </div>
                      </th>
                      <th className="ha-table__head-column-cell">
                        <div className="ha-table__head-column-cell-wrap">
                          <div className="ha-table__head-column-cell-text">
                            Actual Used Margin
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="ha-table__body">
                    {/* Row 1 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">14</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">1%</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            Lots x Contract Size x OpenPrice x MarginPercentage
                            = 14 x 1 x 65,000 x 1% = 9,100 USD
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">29</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">1%</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            Lots x Contract Size x OpenPrice x MarginPercentage
                            = 29 x 1 x 65,000 x 1% = 18,850 USD
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">27</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">2%</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            Lots x Contract Size x OpenPrice x MarginPercentage
                            = 27 x 1 x 65,000 x 2% = 35,100 USD
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">5</div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            100%
                          </div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            Lots x Contract Size x OpenPrice x MarginPercentage
                            = 5 x 1 x 65,000 x 100% = 325,000 USD
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Total Row */}
                    <tr className="ha-table__body-row">
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text"></div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text"></div>
                        </div>
                      </td>
                      <td className="ha-table__body-row-cell">
                        <div className="ha-table__body-row-cell-wrap">
                          <div className="ha-table__body-row-cell-text">
                            Total Margin = 388,050 USD
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="mb-3">
                Dynamic Margin for Equity Index, Thematic Index, and Cash Energy
                CFDs
              </h4>
              <p>
                <ul>
                  <li>
                    At ABET Global, the leverage for the Equity Index, Thematic
                    Index, and Cash CFDs is automatically adjusted. The leverage
                    applied is the lower value between your trading account
                    leverage and the leverage of the specific CFD symbol being
                    traded.
                  </li>
                  <li>
                    Margin calculations are performed separately for each
                    instrument. Therefore, if you hold multiple positions, the
                    margin is independently calculated for each one.
                  </li>
                  <li>The dynamic margin formula is as follows:</li>
                  <li>
                    <strong>Margin Requirement = </strong>Lots x Contract Size x
                    Open Price Lots x Contract Size x Open Price Lots x Contract
                    Size x Open Price ÷ Lower of (Account Leverage, Symbol
                    Leverage) Lower of (Account Leverage, Symbol Leverage) Lower
                    of (Account Leverage, Symbol Leverage)
                  </li>
                </ul>
                <p>For example:</p>
                <ol>
                  <li>
                    A client trades 10 lots of US30Cash at an opening price of
                    34,500 USD, with an account leverage of 1:200 and symbol
                    leverage of 1:500. Required Margin = (10 × 1 × 34,500) ÷ 200
                    = $1,725
                  </li>
                  <li>
                    A client trades 15 lots of US30Cash at an opening price of
                    34,500 USD, with an account leverage of 1:888 and symbol
                    leverage of 1:500. Required Margin = (15 × 1 × 34,500) ÷ 500
                    = $1,035
                  </li>
                </ol>
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Understanding Leverage:</h4>
              <p>
                <ul>
                  <li>
                    Leverage allows traders to control positions much larger
                    than the actual funds in their trading accounts. It is
                    represented as a ratio, such as 1:50, 1:100, or 1:500. For
                    instance, with $1,000 in your account, trading a position
                    size of 500,000 USD/JPY would imply a leverage of 1:500.
                  </li>
                  <li>
                    At ABET Global, you can trade on margin by accessing
                    short-term credit, enabling you to trade amounts exceeding
                    your account balance. Without this margin facility, you
                    would only be able to manage positions equal to the funds in
                    your account.
                  </li>

                  <li>
                    ABET Global continuously monitors client leverage ratios and
                    reserves the right to adjust them at its discretion,
                    including reducing leverage on a case-by-case basis without
                    prior notice.
                  </li>
                </ul>
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">ABET Global Leverage Options:</h4>
              <p>
                ABET Global offers flexible leverage options ranging from 1:1 to
                1:1000, depending on the type of account you choose. Margin
                requirements remain consistent throughout the week and are not
                affected by overnight or weekend trading. Clients also have the
                option to request adjustments to their leverage levels.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Leverage Risk Considerations:</h4>
              <p>
                Leverage can amplify profits from a relatively small initial
                investment, but it also increases the potential for significant
                losses if risk management practices are not followed. ABET
                Global offers a wide range of leverage options to accommodate
                various risk preferences but advises against trading near the
                maximum leverage of 1:1000 due to the heightened risks involved.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">
                Real-Time Margin Monitoring and Risk Management:
              </h4>
              <p>
                At ABET Global, you can effectively manage your risk by tracking
                your real-time used and free margin. The used margin represents
                the funds required to maintain a trade, calculated based on your
                leverage (e.g., at 1:100 leverage, 1% of the trade size is held
                as margin). The free margin is the remaining balance in your
                account, which adjusts according to your equity. This free
                margin can be used to open new positions or cover potential
                losses.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-3">Margin Call Policy</h4>
              <p>
                While clients are responsible for monitoring their trading
                activities, ABET Global enforces a margin call policy to prevent
                your risk from exceeding your account’s equity. If your account
                equity falls below 50% of the margin required for your open
                positions, you will receive a margin call alert to notify you of
                insufficient equity.
              </p>
            </div>
            <div className="mt-4 mb-5">
              <h4 className="mb-3">Stop-Out Level Protection</h4>
              <p>
                The stop-out level is the point at which ABET Global
                automatically closes open positions to protect against further
                losses. This occurs when the equity in your account drops to or
                below 10 to 20% based on account types.
              </p>
            </div>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Margin;

import React from "react";
import styles from "./RiskDisclosure.module.css";

const RiskDisclosure = () => {
  return (
    <div className={`container ${styles.riskDisclosureContainer}`}>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <div className={`card ${styles.disclosureCard}`}>
            <div className={`card-header ${styles.cardHeader}`}>
              <h2 className={styles.title}>Risk Disclosure</h2>
            </div>
            <div className={`card-body ${styles.cardBody}`}>
              <div className={styles.contentSection}>
                <p className={styles.paragraph}>
                  ABET Global provides trading services, owned by Abet LLC,
                  whose company number is A000000977, and whose registered
                  address is 9 Cassius Webster Building, Grace Complex, P.O. Box
                  1330, The Valley, Al-2640 Anguilla.
                </p>

                <div className={`alert ${styles.warningAlert}`}>
                  <h5 className={styles.warningTitle}>Risk Warning:</h5>
                  <p className={styles.paragraph}>
                    ABET Global provides trading on contracts for difference
                    (CFDs), which are complex financial instruments that are
                    traded on leverage, and foreign exchange (Forex, or "FX").
                    Given that leverage can be used both favorably and
                    unfavorably, they are very risky. These products might not
                    be suitable for all investors due to the possibility of
                    losing all invested funds. It's best to limit your
                    risk-taking to amounts you can afford to lose. Before making
                    a choice, be sure you understand the dangers involved in
                    trading, your skill level, and your investing objectives.
                    Seek outside legal assistance if necessary.
                  </p>
                </div>

                <p className={styles.paragraph}>
                  ABET Global: does not offer advice, input, or recommendations
                  regarding buying, holding, or selling of a CFD. ABET Global
                  offers only execution-based services and is not a financial
                  counselor. Please do not consider this correspondence to be an
                  offer or a request to carry out a trade. This website is not
                  directed towards any jurisdiction and is not intended for use
                  in any way that would break local laws or regulations.
                </p>

                <p className={styles.paragraph}>
                  This website does not offer any products or services for
                  minors. Residents of Iran, Turkey, or the United States are
                  not intended users of the products and services that are
                  available on this website.
                </p>
              </div>
            </div>
            <div className={`card-footer ${styles.cardFooter}`}>
              <p className={styles.footerText}>
                Please read and understand these risks before proceeding with
                any trading activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskDisclosure;

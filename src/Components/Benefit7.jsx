import React from "react";
import styles from "./BenefitsSection.module.css";

// SVG Icons for Deposit, Withdrawal, and Instruments
const DepositIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    style={{ enableBackground: "new 0 0 50 50" }}
  >
    <style>
      {`
        .st0{fill:none;stroke:#BC202E;stroke-width:0.9341;stroke-miterlimit:10;}
        .st1{fill:#BC202E;}
        .st2{fill:#FFFFFF;}
        .st3{fill:none;stroke:#BC202E;stroke-width:1.2375;stroke-linecap:round;stroke-miterlimit:10;}
        .st4{font-family:'Montserrat-Bold';}
        .st5{font-size:17.8961px;}
      `}
    </style>
    <text transform="matrix(1 0 0 1 1.494 41.5909)" className="st1 st4 st5">
      100%
    </text>
    <polygon
      className="st1"
      points="25,3.16 34.5,18.71 29.41,18.71 29.41,25 25.03,25 25.03,22.96 27.37,22.96 27.37,16.67 30.87,16.67 25,7.07 19.13,16.67 22.63,16.67 22.63,22.96 24.97,22.96 24.97,25 20.59,25 20.59,18.71 15.5,18.71"
    />
  </svg>
);

const Benefit7 = () => {
  const benefits = [
    {
      title: "Minimum Deposit",
      description:
        "Tight spreads on all major currency pairs starting at 0.1 pip",
      icon: (
        <img src="/images/icon14.png" alt="Leverage" width="48" height="48" />
      ),
    },
    {
      title: "Minimum Withdrawals",
      description: "More Than 500 Financial Instruments",
      icon: (
        <img src="/images/icon13.png" alt="Leverage" width="48" height="48" />
      ),
    },
    {
      title: "Instruments",
      description: "Trade without any extra fees",
      icon: (
        <img src="/images/icon15.png" alt="Leverage" width="48" height="48" />
      ),
    },
    {
      title: "Leverage",
      description:
        "The lowest spreads available for any kind of trading account",
      icon: (
        <img src="/images/icon16.png" alt="Leverage" width="48" height="48" />
      ),
    },
    {
      title: "No Hidden Charges",
      description: "The Best Execution Policy",
      icon: (
        <img src="/images/icon18.png" alt="No Charges" width="48" height="48" />
      ),
    },
    {
      title: "Spreads",
      description: "Pricing for fractional pip",
      icon: (
        <img src="/images/icon19.png" alt="Spreads" width="48" height="48" />
      ),
    },
  ];

  return (
    <section className={`${styles.benefits} py-5`}>
      <div className="container">
        <div className="text-center my-5">
          <h2 className={styles.sectionTitle}>
            Tight Spreads as Low as 0.1 Pips
          </h2>
        </div>

        <div className="row row-cols-lg-6 row-cols-2 g-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="col p-0">
              <div className={`${styles.benefitCard} h-100 py-3`}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>

                <p className={styles.benefitDescription}>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit7;

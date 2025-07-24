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

const Benefit8 = () => {
  const benefits = [
    {
      title: "Minimum Deposit",
      description: "Flexible Leverage Options",
      icon: (
        <img src="/images/icon17.png" alt="Leverage" width="48" height="48" />
      ),
    },
    {
      title: "Minimum Withdrawals",
      description: "Dynamic Margin for Cryptocurrencies and CFDs",
      icon: (
        <img src="/images/icon20.png" alt="Leverage" width="48" height="48" />
      ),
    },
    {
      title: "Instruments",
      description: "Real-Time Risk Monitoring",
      icon: <img src="/images/21.png" alt="Leverage" width="48" height="48" />,
    },
    {
      title: "Leverage",
      description: "Leverage Risk Considerations",
      icon: <img src="/images/22.png" alt="Leverage" width="48" height="48" />,
    },
    {
      title: "No Hidden Charges",
      description: "Stop-Out Level Protection",
      icon: (
        <img src="/images/23.png" alt="No Charges" width="48" height="48" />
      ),
    },
    {
      title: "Spreads",
      description: "Consistent Margin and Leverage Terms",
      icon: <img src="/images/24.png" alt="Spreads" width="48" height="48" />,
    },
  ];

  return (
    <section className={`${styles.benefits} py-5`}>
      <div className="container">
        <div className="text-center my-5">
          <h2 className={styles.sectionTitle}>
            Flexible Leverage Up to 1:1000 with ABET Global
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

export default Benefit8;

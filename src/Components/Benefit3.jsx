import React from "react";
import styles from "./BenefitsSection.module.css";

// SVG Icons for Deposit, Withdrawal, and Instruments
const DepositIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 50 50"
    style={{ enableBackground: "new 0 0 50 50" }}
    xmlSpace="preserve"
  >
    <style>{`
      .st0{fill:none;stroke:#BC202E;stroke-width:0.9341;stroke-miterlimit:10;}
      .st1{fill:#BC202E;}
      .st2{fill:#FFFFFF;}
      .st3{fill:none;stroke:#BC202E;stroke-width:1.2375;stroke-linecap:round;stroke-miterlimit:10;}
    `}</style>
    <g>
      <path
        className="st1"
        d="M35.85,32.69H14.15V3.28c0-1.34,1.09-2.43,2.43-2.43h16.83c1.34,0,2.43,1.09,2.43,2.43V32.69z M16.94,29.9   h16.12V3.63H16.94V29.9z"
      />
      <path
        className="st1"
        d="M40.78,32.69H9.22c-1.34,0-2.43-1.09-2.43-2.43v-4.06c0-1.34,1.09-2.43,2.43-2.43h6.32v2.79H9.58v3.36h30.85   v-3.36h-5.97v-2.79h6.32c1.34,0,2.43,1.09,2.43,2.43v4.06C43.21,31.6,42.12,32.69,40.78,32.69z"
      />
      <path
        className="st1"
        d="M25.02,29.15c-3.82,0-6.93-3.11-6.93-6.93s3.11-6.93,6.93-6.93c3.82,0,6.93,3.11,6.93,6.93   S28.84,29.15,25.02,29.15z M25.02,18.08c-2.28,0-4.14,1.86-4.14,4.14s1.86,4.14,4.14,4.14s4.14-1.86,4.14-4.14   S27.3,18.08,25.02,18.08z"
      />
      <g>
        <path
          className="st1"
          d="M25.38,24.47v0.7h-0.63v-0.68c-0.62-0.04-1.22-0.23-1.56-0.5l0.35-0.77c0.31,0.23,0.77,0.4,1.22,0.45v-1.05    c-0.7-0.17-1.48-0.4-1.48-1.3c0-0.67,0.48-1.24,1.48-1.35v-0.7h0.63v0.68c0.47,0.04,0.93,0.16,1.28,0.38l-0.31,0.77    c-0.32-0.18-0.65-0.29-0.96-0.33v1.07c0.7,0.16,1.46,0.4,1.46,1.28C26.85,23.78,26.37,24.35,25.38,24.47z M24.76,21.69V20.8    c-0.33,0.08-0.46,0.26-0.46,0.46C24.29,21.48,24.48,21.6,24.76,21.69z M25.84,23.21c0-0.22-0.18-0.34-0.45-0.43v0.87    C25.7,23.57,25.84,23.41,25.84,23.21z"
        />
      </g>
      <path
        className="st1"
        d="M15.55,8.08V5.79c1.96,0,3.55-1.59,3.55-3.55h2.29C21.38,5.46,18.77,8.08,15.55,8.08z"
      />
      <path
        className="st1"
        d="M34.45,8.08c-3.22,0-5.84-2.62-5.84-5.84h2.29c0,1.96,1.59,3.55,3.55,3.55V8.08z"
      />
      <polygon
        className="st1"
        points="25.02,49.15 18.52,38.52 22,38.52 22,34.21 25,34.21 25,35.61 23.4,35.61 23.4,39.91 21,39.91    25.02,46.48 29.03,39.91 26.64,39.91 26.64,35.61 25.04,35.61 25.04,34.21 28.03,34.21 28.03,38.52 31.52,38.52"
      />
    </g>
  </svg>
);

const WithdrawalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 50 50"
    style={{ enableBackground: "new 0 0 50 50" }}
    xmlSpace="preserve"
  >
    <style>{`
      .st0{fill:none;stroke:#BC202E;stroke-width:0.9341;stroke-miterlimit:10;}
      .st1{fill:#BC202E;}
      .st2{fill:#FFFFFF;}
      .st3{fill:none;stroke:#BC202E;stroke-width:1.2375;stroke-linecap:round;stroke-miterlimit:10;}
    `}</style>
    <g>
      <g>
        <path
          className="st1"
          d="M35.85,49.15H14.15V19.74c0-1.34,1.09-2.43,2.43-2.43h16.83c1.34,0,2.43,1.09,2.43,2.43V49.15z M16.94,46.37h16.12V20.1H16.94V46.37z"
        />
        <path
          className="st1"
          d="M40.78,49.15H9.22c-1.34,0-2.43-1.09-2.43-2.43v-4.06c0-1.34,1.09-2.43,2.43-2.43h6.32v2.79H9.58v3.36h30.85v-3.36h-5.97v-2.79h6.32c1.34,0,2.43,1.09,2.43,2.43v4.06C43.21,48.06,42.12,49.15,40.78,49.15z"
        />
        <path
          className="st1"
          d="M25.02,45.62c-3.82,0-6.93-3.11-6.93-6.93s3.11-6.93,6.93-6.93c3.82,0,6.93,3.11,6.93,6.93S28.84,45.62,25.02,45.62z M25.02,34.55c-2.28,0-4.14,1.86-4.14,4.14c0,2.28,1.86,4.14,4.14,4.14s4.14-1.86,4.14-4.14C29.16,36.41,27.3,34.55,25.02,34.55z"
        />
        <g>
          <path
            className="st1"
            d="M25.38,40.93v0.7h-0.63v-0.68c-0.62-0.04-1.22-0.23-1.56-0.5l0.35-0.77c0.31,0.23,0.77,0.4,1.22,0.45v-1.05c-0.7-0.17-1.48-0.4-1.48-1.3c0-0.67,0.48-1.24,1.48-1.35v-0.7h0.63v0.68c0.47,0.04,0.93,0.16,1.28,0.38l-0.31,0.77c-0.32-0.18-0.65-0.29-0.96-0.33v1.07c0.7,0.16,1.46,0.4,1.46,1.28C26.85,40.25,26.37,40.81,25.38,40.93z M24.76,38.15v-0.89c-0.33,0.08-0.46,0.26-0.46,0.46C24.29,37.95,24.48,38.07,24.76,38.15z M25.84,39.67c0-0.22-0.18-0.34-0.45-0.43v0.87C25.7,40.03,25.84,39.87,25.84,39.67z"
          />
        </g>
        <path
          className="st1"
          d="M15.55,24.54v-2.29c1.96,0,3.55-1.59,3.55-3.55h2.29C21.38,21.92,18.77,24.54,15.55,24.54z"
        />
        <path
          className="st1"
          d="M34.45,24.54c-3.22,0-5.84-2.62-5.84-5.84h2.29c0,1.96,1.59,3.55,3.55,3.55V24.54z"
        />
      </g>
      <polygon
        className="st1"
        points="25.02,0.85 31.52,11.48 28.03,11.48 28.03,15.79 25.04,15.79 25.04,14.39 26.64,14.39 26.64,10.09 29.03,10.09 25.02,3.52 21,10.09 23.4,10.09 23.4,14.39 25,14.39 25,15.79 22,15.79 22,11.48 18.52,11.48"
      />
    </g>
  </svg>
);

const InstrumentsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 50 50"
    style={{ enableBackground: "new 0 0 50 50" }}
    xmlSpace="preserve"
  >
    <style>{`
      .st0{fill:none;stroke:#BC202E;stroke-width:0.9341;stroke-miterlimit:10;}
      .st1{fill:#BC202E;}
      .st2{fill:#FFFFFF;}
      .st3{fill:none;stroke:#BC202E;stroke-width:1.2375;stroke-linecap:round;stroke-miterlimit:10;}
    `}</style>
    <g>
      <path
        className="st3"
        d="M23.58,2.44c8.65,0,15.66,7.01,15.66,15.66c0,4.86-2.21,9.2-5.68,12.07"
      />
      <rect x="20.48" y="30.4" className="st1" width="6.21" height="18.51" />
      <g>
        <line className="st3" x1="16.77" y1="36.69" x2="16.77" y2="45.65" />
        <line className="st3" x1="16.77" y1="33.65" x2="16.77" y2="34.14" />
      </g>
      <g>
        <path
          className="st1"
          d="M24.64,19.71v2.53c0.92-0.2,1.32-0.68,1.32-1.26C25.96,20.33,25.43,19.98,24.64,19.71z"
        />
        <path
          className="st1"
          d="M21.46,15.32c0,0.64,0.55,0.99,1.36,1.24v-2.6C21.84,14.18,21.46,14.71,21.46,15.32z"
        />
        <path
          className="st1"
          d="M23.58,5.28c-7.08,0-12.82,5.74-12.82,12.82c0,7.08,5.74,12.82,12.82,12.82c7.08,0,12.82-5.74,12.82-12.82 C36.4,11.02,30.66,5.28,23.58,5.28z M24.64,24.65v2.05h-1.83v-2c-1.81-0.11-3.55-0.68-4.56-1.46l1.01-2.23 c0.92,0.68,2.23,1.17,3.55,1.3v-3.06c-2.03-0.49-4.3-1.17-4.3-3.79c0-1.94,1.41-3.61,4.3-3.94V9.49h1.83v2 c1.37,0.11,2.71,0.48,3.72,1.12l-0.91,2.25c-0.93-0.53-1.89-0.84-2.8-0.95v3.11c2.03,0.48,4.27,1.15,4.27,3.74 C28.91,22.66,27.52,24.31,24.64,24.65z"
        />
      </g>
    </g>
  </svg>
);

const Benefit3 = () => {
  const benefits = [
    {
      title: "Minimum Deposit",
      description:
        "High volatility offers significant price movement opportunities.",
      icon: <DepositIcon />,
    },
    {
      title: "Minimum Withdrawals",
      description: "Trade oil, the world’s most traded commodity.",
      icon: <WithdrawalIcon />,
    },
    {
      title: "Instruments",
      description: "Go short or long based on market trends.",
      icon: <InstrumentsIcon />,
    },
    {
      title: "Leverage",
      description: "Start trading with a margin as low as $10",
      icon: (
        <img src="/images/icon1.png" alt="Leverage" width="48" height="48" />
      ),
    },
    {
      title: "No Hidden Charges",
      description: "No overnight financing charges on oil trades.",
      icon: (
        <img src="/images/icon2.png" alt="No Charges" width="48" height="48" />
      ),
    },
    {
      title: "Spreads",
      description: "No additional fees apply.",
      icon: (
        <img src="/images/icon3.png" alt="Spreads" width="48" height="48" />
      ),
    },
  ];

  return (
    <section className={`${styles.benefits} py-5`}>
      <div className="container">
        <div className="text-center my-5">
          <h2 className={styles.sectionTitle}>
            Advantages of Trading Forex with ABET Global
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

export default Benefit3;

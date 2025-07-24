import Accordion from "react-bootstrap/Accordion";
import Accordion5 from "../Components/Accordtion5";
import styles from "./MetaTrader.module.css";

const deviceData = [
  { image: "/webtrader.png", name: "webtrader" },
  { image: "/mac.png", name: "mac" },
  { image: "/ipad.png", name: "ipad" },
  { image: "/iphone.png", name: "webtrader" },
  { image: "/webtrader.png", name: "iphone" },
  { image: "/window.png", name: "tablet" },
  { image: "/tablet.png", name: "window" },
  { image: "/android.png", name: "android" },
];

const MetaTrader = () => {
  return (
    <>
      <div className="container my-5">
        <h1 className={`my-4 text-center ${styles.metaHeading}`}>
          MetaTrader 5
        </h1>
        <div className="row my-5">
          <div className="col-lg-6 d-flex align-items-center">
            <div>
              <h6 className={styles.metaFeature}>FEATURES</h6>
              <h1>Platforms Beyond Expectations!</h1>
            </div>
          </div>
          <div className="col-lg-6">
            <p className={styles.parameta}>
              Being ahead of the curve is not only beneficial but also essential
              in the fast-paced world of Forex trading. We at Abet Global
              provide our clients with state-of-the-art tools, and MetaTrader 5
              (MT5) is one such powerful instrument. For trading Forex and
              financial markets, MetaTrader 5 is the platform of choice for
              millions of traders and hundreds of brokers.
            </p>
          </div>
        </div>

        <div className={`row ${styles.metaimagediv}`}>
          <div className="col-lg-6 d-flex align-items-center">
            <div>
              <h2>
                Experience Superior Trading <br /> Platforms with Advanced
                Technology
              </h2>
              <p className={styles.parameta}>
                Explore our trading platforms designed with cutting-edge
                technology, ensuring secure management of your investments in
                Forex, Stocks, Metals & Commodities, FX Indices, and Indices
                markets. Enjoy ease of use and enhanced functionality for a
                seamless trading experience.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <img
                src="/webterminal_metatrader_medium.png"
                alt="webterminal_metatrader_medium"
              />
            </div>
          </div>
        </div>

        <div className="my-5">
          <div className="row row-cols-8">
            {deviceData.map((deviceData, index) => (
              <div className="col">
                <div key={index}>
                  <img
                    src={deviceData.image}
                    alt={deviceData.name}
                    height={50}
                    width={120}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row mt-5">
          <div className="mb-4">
            <h3>Everything You Need to Know About MetaTrader 5 (MT5) – FAQs</h3>
          </div>
          <div>
            <Accordion5 />
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaTrader;

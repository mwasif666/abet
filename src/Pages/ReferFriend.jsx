import React from "react";
import styles from "../style/Referfriend.module.css";
import Accordion from "react-bootstrap/Accordion";

const ReferFriend = () => {
  return (
    <>
      <div
        className="container"
        style={{
          height: "700px",
        }}
      >
        <div className="row d-flex align-items-center h-100">
          <div className="col-lg-6">
            <div className={styles.contant_banner}>
              <h5>REFER A FRIEND</h5>
              <h1>Refer Friends and Earn Rewards</h1>
              <p>
                Earn up to $100 for every friend you invite to trade with Abet
                Global. You can get more reward the more friends you recommend!
              </p>
              <div>
                <a href="#" className="btn">
                  LOGIN
                </a>
                <a href="#" className="btn">
                  SIGN UP
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.video}>
              <img
                src="/Refer-Friends-1.png"
                alt="Refer a Friend"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h5>SHARE AND EARN</h5>
          <h1>Get $100 in extra funds by referring friends to Abet Global.</h1>
        </div>
        <div>
          <div>
            <h2>Earn Together</h2>
            <h5>
              Both you and your friend can receive up to $100 each in extra
              trading funds.
            </h5>
          </div>
          <div>
            <h2>Earn Together</h2>
            <h5>
              Both you and your friend can receive up to $100 each in extra
              trading funds.
            </h5>
          </div>
          <div>
            <h2>Earn Together</h2>
            <h5>
              Both you and your friend can receive up to $100 each in extra
              trading funds.
            </h5>
          </div>
        </div>
        <div>
          <h5>TIERED REWARDS</h5>
          <h1>Maximise your earnings by unlocking all tiers.</h1>
          <h5>
            Our tiered reward structure ensures that the more your referred
            friend deposits and trades, the higher the rewards you both receive.
            Only volume traded on FX & metals counts toward unlocking rewards.
          </h5>
        </div>
        <div>
          <h5>EXTRA BENEFITS</h5>
          <h1>Become a Referral Champion and earn exclusive badges!</h1>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h1>Referral Starter</h1>
            <h5>Refer 5 friends and earn $10.</h5>
          </div>
          <div>
            <h1>Referral Influencer</h1>
            <h5>Refer 10 friends and earn $20.</h5>
          </div>
          <div>
            <h1>Referral Expert</h1>
            <h5>Refer 20 friends and earn $30.</h5>
          </div>
          <div>
            <h1>Referral Master</h1>
            <h5>Refer 30 friends and earn $40.</h5>
          </div>
          <div>
            <h1>Referral Champion</h1>
            <h5>Refer 50 friends and earn $100.</h5>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h5>BOOST YOUR FUNDS</h5>
          <h1>Start earning extra funds today!</h1>
        </div>
        <div>
          <h1>Step 1: Refer a friend</h1>
          <h5>
            Log in to your Abet Global Portal to find your unique referral link.
            Send it directly to friends or share it on social media to reach a
            wider audience.
          </h5>
        </div>
        <div>
          <h1>Step 2: Track progress</h1>
          <h5>
            Use the Portal to monitor your referrals and rewards. Keep track of
            your friends’ progress to guide them through the steps and ensure
            rewards for both of you.
          </h5>
        </div>
        <div>
          <h1>Step 3: Earn rewards</h1>
          <h5>
            You’ll receive a reward once your referred friend creates a live
            trading account, makes a deposit, and completes the required trades.
          </h5>
        </div>

        <div>
          <div>
            <h6>HOW TO START</h6>
            <h1>Watch our step-by-step guide on how to make referrals.</h1>
          </div>
          <div>
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "auto" }}
            ></video>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h6>FAQS</h6>
          <h1>Refer a Friend FAQs</h1>
          <div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What is the Refer a Friend program?
                </Accordion.Header>
                <Accordion.Body>
                  LOur Refer a Friend program lets you invite friends to upgrade
                  their trading journey with Abet Global. When they sign up and
                  trade, you both earn rewards. Minimum deposit and trading
                  volume requirements apply. Read the T&Cs.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How do I start referring friends?
                </Accordion.Header>
                <Accordion.Body>
                  If you have an Abet Global account, log in to your Portal to
                  get your unique referral link. Share it directly with friends
                  or post it on social media for wider reach. If you don’t trade
                  with us yet, create an account today, fund it, and start
                  referring to earn extra rewards
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  When will I receive my reward?
                </Accordion.Header>
                <Accordion.Body>
                  LRewards are credited after the 30-day referral period ends,
                  provided your friends have successfully opened an account and
                  started trading. The referral period starts with your friend’s
                  first deposit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How much is the reward?</Accordion.Header>
                <Accordion.Body>
                  The reward amount depends on how much your referred friend
                  deposits and trades within the 30-day referral period. You can
                  track their progress and your earnings in the Abet Global
                  Portal.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>

      <div>
        <h1>Explore More</h1>
        <div>
          <div>
            <img src="puzzle2-1.png" alt="puzzle" />
            <h1>Products</h1>
            <h5>
              Trade CFDs across FX, indices, shares, commodities, futures,
              crypto, & ETFs.
            </h5>
            <h2>Explore Products</h2>
          </div>
          <div>
            <img src="mt5-img-1.png" alt="platforn" />
            <h1>Platforms</h1>
            <h5>
              Choose the right trading platform for your needs – we offer MT4
              and MT5.
            </h5>
            <h2>See All Trading Platforms</h2>
          </div>
          <div>
            <img src="capital-market.png" alt="capital market" />
            <h1>Partnerships</h1>
            <h5>
              Introduce your network and enjoy competitive benefits by
              partnering with Abet Global.
            </h5>
            <h2>Join as a Partner</h2>
          </div>
        </div>
      </div>

      <div>
        <h5>GLOBAL BROKER</h5>
        <h1>Start trading online with Abet Global today!</h1>
        <a href="#" className="btn">
          Start Trading
        </a>
        <div>
          <img
            src="/crypto-payments.png"
            alt="Crypto Payments"
            style={{ width: "100%", height: "auto" }}
          />
          <img
            src="/mastercard-new.svg"
            alt="Master Card"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
};

export default ReferFriend;

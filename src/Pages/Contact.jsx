import React from "react";
import { Helmet } from "react-helmet";
import ContactBanner from "../Components/ContactBanner";
import ContactCards from "../Components/ContactCards";
import ContactForm from "../Components/ContactForm";
import TradingCTA from "../Components/TradingCTA";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Get in Touch with Abet Global Support Team</title>
        <meta
          name="description"
          content="Need assistance with forex, commodities, or MT5? Contact Abet Global's support team for fast, multilingual help available 24/7 via chat, email, and phone."
        />
      </Helmet>
      <ContactBanner />
      <ContactCards />
      <ContactForm />
      <TradingCTA />
    </>
  );
};

export default Contact;

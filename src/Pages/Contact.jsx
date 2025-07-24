import React from "react";
import ContactBanner from "../Components/ContactBanner";
import ContactCards from "../Components/ContactCards";
import ContactForm from "../Components/ContactForm";
import TradingCTA from "../Components/TradingCTA";

const Contact = () => {
  return (
    <>
      <ContactBanner />
      <ContactCards />
      <ContactForm />
      <TradingCTA />
    </>
  );
};

export default Contact;

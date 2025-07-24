import React from "react";
import ForexAccordion from "./ForexAccordion";
import Accordion2 from "./Accordion2";
import Accordion3 from "./Accordion3";
import Accordion4 from "./Accordion4";
import Accordion5 from "./Accordtion5";
import Accordion6 from "./Accordion6";

const FAQ = () => {
  return (
    <>
      <h1 className="my-5 text-center">FAQ's</h1>
      <div className="container">
        <h1 className="mt-5 mb-3">Forex</h1>
        <ForexAccordion />
        <h1 className="mt-5 mb-3">Indices</h1>
        <Accordion2 />
        <h1 className="mt-5 mb-3">Energies</h1>
        <Accordion3 />
        <h1 className="mt-5 mb-3">Metals</h1>
        <Accordion4 />
        <h1 className="mt-5 mb-3">Cryptocurrency</h1>
        <Accordion6 />
        <h1 className="mt-5 mb-3">Metatrader 5</h1>
        <Accordion5 />
      </div>
    </>
  );
};

export default FAQ;

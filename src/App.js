import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Trading from "./Pages/Trading";
import Platforms from "./Pages/Platforms";
import Promotions from "./Pages/Promotions";
import About from "./Pages/About";
import Partnership from "./Pages/Partnership";
import Transfers from "./Pages/Transfers";
import NotFound from "./Pages/NotFound";
import Footer from "./Pages/Footer";
import Micro from "./Pages/account-types/micro";
import RawSpread from "./Pages/account-types/RawSpread";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/about" element={<About />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/account-types/micro" element={<Micro />} />
        <Route path="/account-types/raw-spread" element={<RawSpread />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

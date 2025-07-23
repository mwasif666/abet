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
import Standard from "./Pages/account-types/Standard";
import Prime from "./Pages/account-types/prime";
import ReferFriend from "./Pages/ReferFriend";
import MetaTrader from "./Pages/MetaTrader";
import Forex from "./Pages/account-types/Forex";
import Indices from "./Pages/account-types/indices";
import Energies from "./Pages/account-types/Energies";
import Metals from "./Pages/account-types/Metals";
import Cryptocurrency from "./Pages/account-types/Cryptocurrency";

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
        <Route path="/account-types/standard" element={<Standard />} />
        <Route path="/account-types/forex" element={<Forex />} />
        <Route path="/account-types/indices" element={<Indices />} />
        <Route path="/account-types/energies" element={<Energies />} />
        <Route path="/account-types/metals" element={<Metals />} />
        <Route
          path="/account-types/cryptocurrency"
          element={<Cryptocurrency />}
        />
        <Route path="/account-types/prime" element={<Prime />} />
        <Route path="/refer-a-friend" element={<ReferFriend />} />
        <Route path="/meta-trader-5" element={<MetaTrader />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

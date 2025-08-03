import { useState, useEffect} from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import CustomNavbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Trading from "./Pages/Trading";
import Platforms from "./Pages/Platforms";
import Promotions from "./Pages/Promotions";
import About from "./Pages/About";
import Partnership from "./Pages/Partnership";
import Transfers from "./Pages/Transfers";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";
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
import Execution from "./Pages/account-types/execution-policy";
import Spreads from "./Pages/account-types/Spreads";
import Margin from "./Pages/account-types/Margin";
import Logo from "./assets/logo.png";
import BenefitsHome from "./Components/BenefitsHome";
import AddBlog from "./Pages/Blog/AddBlog";
import AbetApp from "./Pages/AbetApp";
import FAQ from "./Components/FAQ";
import Contact from "./Pages/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import LegalDocuments from "./Pages/LegalDocuments";
import RiskDisclosure from "./Components/Risk";
import BlogDetail from "./Pages/Blog/BlogDetail";
import BecomePartner from "./Pages/BecomePartner";
import AccountTypes from "./Pages/account-types/Accounttypes";
import Forexdictionary from "./Pages/ForexDic";
import Login from "./Pages/Authentication/Login";
import AddUser from "./Pages/User/AddUser";
import UserList from "./Pages/User/UserList";
import { AdminRoutes, PrivateRoutes, PublicRoutes } from "./middleware/RouteMiddleware";
import { ToastContainer } from "react-toastify";
import BlogList from "./Pages/Blog/BlogList";

const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const hideNavbarFooter = ["/login"].includes(
    location.pathname.toLocaleLowerCase()
  );
  return (
    <>
      {!hideNavbarFooter && <CustomNavbar />}
      {<ToastContainer />}
      <main>{children}</main>
      {!hideNavbarFooter && <Footer />}
    </>
  );
};

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <img src={Logo} alt="Logo" />
        <p className="video-description">Trade Anytime Anywhere</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

const AppWrapper = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Preloader />}
      <div className={`app-content ${loading ? "content-hidden" : ""}`}>
        <LayoutWrapper>
          <Routes location={location}>
           
              <Route path="/" element={<Home />} />
              <Route path="/trading" element={<Trading />} />
              <Route path="/platforms" element={<Platforms />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/about" element={<About />} />
              <Route path="/partnership" element={<Partnership />} />
              <Route path="/transfers" element={<Transfers />} />
              <Route path="/micro" element={<Micro />} />
              <Route path="/raw-spread" element={<RawSpread />} />
              <Route path="/standard" element={<Standard />} />
              <Route path="/forex" element={<Forex />} />
              <Route path="/indices" element={<Indices />} />
              <Route path="/energies" element={<Energies />} />
              <Route path="/metals" element={<Metals />} />
              <Route path="/cryptocurrency" element={<Cryptocurrency />} />
              <Route path="/prime" element={<Prime />} />
              <Route path="/execution-policy" element={<Execution />} />
              <Route path="/spreads" element={<Spreads />} />
              <Route path="/margin-leverage" element={<Margin />} />
              <Route path="/refer-a-friend" element={<ReferFriend />} />
              <Route path="/meta-trader-5" element={<MetaTrader />} />
              <Route path="/benefithome" element={<BenefitsHome />} />
              <Route path="/AbetApp" element={<AbetApp />} />
              <Route path="/faqs" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/legal-documents" element={<LegalDocuments />} />
              <Route path="/risk" element={<RiskDisclosure />} />
              <Route path="/blog-details/:id" element={<BlogDetail />} />
              <Route path="/partner" element={<BecomePartner />} />
              <Route path="/account-type" element={<AccountTypes />} />
              <Route path="/forex-dictionary" element={<Forexdictionary />} />
              <Route path="*" element={<NotFound />} />
            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/add-blog" element={<AddBlog />} />
              <Route path="/add-blog/:id" element={<AddBlog />} />
            </Route>
            <Route element={<AdminRoutes />}>
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/add-user/:id" element={<AddUser />} />
              <Route path="/user-list" element={<UserList />} />
              <Route path="/blog-list" element={<BlogList/>} />
            </Route>
              
          </Routes>
        </LayoutWrapper>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;

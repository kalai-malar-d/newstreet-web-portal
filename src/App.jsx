import "./App.css";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Partners from "./pages/Partners/Partners.jsx";
import Careers from "./pages/Careers/Careers.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NSTNews from "./pages/NSTNews/NSTNews.jsx";
import Products from "./pages/Products/Products.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nstnews" element={<NSTNews />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

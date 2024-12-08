import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/theme";
import "./assets/css/App.css";

import Navbarmenu from "./components/NavBarMenu/Navbarmenu";
import Footer from "./components/Footer/Footer";

import "./assets/css/loader2.css";

// Lazy load components
const Home = lazy(() => import("./components/Home/Home"));
const Aboutus = lazy(() => import("./components/AboutUs/Aboutus"));
const Process = lazy(() => import("./components/Process/Process"));
const Products = lazy(() => import("./components/Products/Products"));
const ContactUs = lazy(() => import("./components/ContactUs/Contactus"));
const NewsFeed = lazy(() => import("./components/News/NewsFeed"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/">
        <Navbarmenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/process" element={<Process />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/news" element={<NewsFeed />} />
        </Routes>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

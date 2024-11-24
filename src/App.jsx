import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes instead of Switch
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/theme";
import "./assets/css/App.css";
import AOS from "aos";
import Footer from "./components/Footer/Footer";
import NewsFeed from "./components/News/NewsFeed";
import Navbarmenu from "./components/NavBarMenu/Navbarmenu";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/Contactus";
import Process from "./components/Process/Process";
import Products from "./components/Products/Products";
import Aboutus from "./components/AboutUs/Aboutus";
import Loader from "./components/Loader";
import "./assets/css/loader2.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 3000); // Simulating async load delay
    AOS.init({ duration: 2000 });
    return () => clearTimeout(timer); // Cleanup timer

    // eslint-disable-next-line no-unreachable
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#000000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </div>
    ); // Show loader while loading
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router basename="/">
          <Navbarmenu />
          <Routes>
            {" "}
            {/* Use Routes instead of Switch */}
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
      </div>
    </ThemeProvider>
  );
}

export default App;

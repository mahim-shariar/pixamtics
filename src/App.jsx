import { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/theme";
import "./assets/css/App.css";
import AOS from "aos";
import Navbarmenu from "./components/NavBarMenu/Navbarmenu";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader";
import "./assets/css/loader2.css";

// Lazy load components
const Home = lazy(() => import("./components/Home/Home"));
const Aboutus = lazy(() => import("./components/AboutUs/Aboutus"));
const Process = lazy(() => import("./components/Process/Process"));
const Products = lazy(() => import("./components/Products/Products"));
const ContactUs = lazy(() => import("./components/ContactUs/Contactus"));
const NewsFeed = lazy(() => import("./components/News/NewsFeed"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false); // Set loading to false when page is fully loaded
    };

    // Add event listener for when the page has fully loaded
    window.addEventListener("load", handlePageLoad);

    // Initialize AOS
    AOS.init({ duration: 2000 });

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("load", handlePageLoad);
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
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Router basename="/">
        <Navbarmenu />
        <Suspense
          fallback={
            <div
              style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000000",
              }}
            >
              <Loader />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/process" element={<Process />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/news" element={<NewsFeed />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

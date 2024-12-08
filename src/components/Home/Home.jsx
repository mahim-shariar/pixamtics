/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Carousel } from "react-bootstrap";
import gambar1 from "../../assets/image/slide1.jpg";
import gambar2 from "../../assets/image/slide2.jpg";
import gambar3 from "../../assets/image/slide3.jpg";
import Loader from "../Loader";
import singlelogo1 from "../../assets/img/singlelogo1.png";
import singlelogo2 from "../../assets/img/singlelogo2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./HomeCenter";
import "../../assets/css/homeImageSlider.css";
import AOS from "aos"; // Ensure this import is correct
import "aos/dist/aos.css"; // Don't forget to import the CSS as well

const Home = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS animations

    // Check when all assets are fully loaded
    const handlePageLoad = () => {
      setLoading(false); // Page is fully loaded
    };

    // Attach event listener for complete page load
    if (document.readyState === "complete") {
      handlePageLoad(); // If already loaded
    } else {
      window.addEventListener("load", handlePageLoad); // Wait for load event
    }

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  const handleLoaded = () => {
    // Check if all images and content have loaded
    setLoading(false);
  };

  // If still loading, show the loader
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
        <Loader /> {/* Display loader until everything is ready */}
      </div>
    );
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              ".carousel-indicators": {
                justifyContent: "flex-end !important",
                marginRight: "5% !important",
              },
            }}
          >
            <section
              style={{ height: "100%", width: "100%" }}
              className={`content ${loading ? "hidden" : ""}`}
            >
              <Carousel
                nextIcon={false}
                prevIcon={false}
                style={{ position: "flex", width: "100%" }}
              >
                <Carousel.Item interval={2000} style={{ textAlign: "center" }}>
                  <img
                    style={{
                      height: matchDownMd ? "700px" : "686px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={gambar2}
                    alt="First slide"
                    onLoad={handleLoaded}
                  />
                </Carousel.Item>
                <Carousel.Item interval={2000} style={{ textAlign: "center" }}>
                  <img
                    style={{
                      height: matchDownMd ? "700px" : "686px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={gambar1}
                    alt="Second slide"
                    onLoad={handleLoaded}
                  />
                </Carousel.Item>
                <Carousel.Item interval={2000} style={{ textAlign: "center" }}>
                  <img
                    style={{
                      height: matchDownMd ? "700px" : "686px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                    src={gambar3}
                    alt="Third slide"
                    onLoad={handleLoaded}
                  />
                </Carousel.Item>
              </Carousel>
              <div
                style={{
                  width: "100%",
                  position: "absolute",
                  top: matchDownMd ? "25%" : "25%",
                  left: "0",
                  textAlign: "center",
                  zIndex: 1,
                  lineHeight: matchDownMd ? "0.5" : "0.9",
                }}
              >
                <img
                  style={{
                    height: matchDownMd ? "100px" : "110px",
                    boxShadow: "0 0px 0px rgba(0, 0, 0, 0.6)",
                    textShadow: "0 0 24px rgba(0, 0, 0, 0.6)",
                  }}
                  src={singlelogo1}
                  alt="Logo 1"
                  onLoad={handleLoaded}
                />
                <img
                  style={{
                    height: matchDownMd ? "100px" : "110px",
                    textShadow: "0 0 24px rgba(0, 0, 0, 0.6)",
                  }}
                  src={singlelogo2}
                  alt="Logo 2"
                  onLoad={handleLoaded}
                />

                <p
                  style={{
                    paddingTop: "20px",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: matchDownMd ? "35px" : "45px",
                    textDecoration: "none",
                    textShadow: "0 0 24px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  Outpace Spinning Mills
                </p>
                <p
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: matchDownMd ? "35px" : "45px",
                    textDecoration: "none",
                    textShadow: "0 0 24px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  R A Spinning Mills
                </p>
              </div>
            </section>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{ background: "transparent", zIndex: 2 }}
        >
          <Box
            sx={{
              left: "50%",
              bottom: 0,
              justifyContent: "flex-start",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: matchDownMd ? "7vh" : "9vh",
              marginTop: matchDownMd ? "-7.2vh" : "-9.2vh",
            }}
          >
            <Divider
              sx={{
                height: 2,
                width: 15,
                borderBottom: "1px",
                background: "white",
                opacity: 1,
              }}
            />
            <Divider
              orientation="vertical"
              sx={{ width: "0.0001px", background: "White", opacity: 1 }}
            />
          </Box>
        </Grid>
      </Grid>
      <About />
    </>
  );
};

export default Home;

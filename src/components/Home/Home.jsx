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
} from "@mui/material"; // Updated import
import { Carousel } from "react-bootstrap";
import gambar1 from "../../assets/image/slide1.jpg";
import gambar2 from "../../assets/image/slide2.jpg";
import gambar3 from "../../assets/image/slide3.jpg";
import Loader from "../Loader";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import singlelogo1 from "../../assets/img/singlelogo1.png";
import singlelogo2 from "../../assets/img/singlelogo2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./HomeCenter";
import "../../assets/css/HomeImageSlider.css";
// import { AOS } from "aos";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 3000); // Simulating async load delay
    // AOS.init({ duration: 2000 });
    return () => clearTimeout(timer); // Cleanup timer

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
          width: "100%",
          alignItems: "center",
        }}
      >
        <Loader />
      </div>
    ); // Show loader while loading
  }
  const handleLoaded = () => {
    setLoading(false);
  };

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
                    object
                    onLoad={handleLoaded}
                    alt="First slide"
                  />
                  {/* <Carousel.Caption >
                  <h1 style={{ fontSize: matchDownMd ? '1.5rem' : '4rem' }}>
                    Introducing REICONICS</h1>
                  <p style={{
                    wordWrap: 'break-word',
                    fontSize: '1.125rem',
                    lineHeight: '1.75rem',
                    textAlign: 'center',
                    maxWidth: '600px'
                  }}>
                    Recover™, Evlox and Jeanologia join forces to improve circularity in denim.
                  </p>
                  <a className=" btn  ">  <Typography sx={{
                    color: 'white', textAlign: 'center', fontSize: matchDownMd ? '1.5rem' : '3rem', fontWeight: '600px', borderRadius: 7, border: '2px solid White', padding: 1,
                    transition: 'transform 0.3s ease-in-out',
                    ':hover': {
                      background: 'gray',
                      color: 'white',
                      border: 'none',
                      transform: 'scale(1.2)',
                    },
                  }}>
                    Learn more
                  </Typography></a>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={2000} style={{ textAlign: "center" }}>
                  <img
                    style={{
                      height: matchDownMd ? "700px" : "686px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={gambar1}
                    object
                    onLoad={handleLoaded}
                    alt="First slide"
                  />
                  {/* <Carousel.Caption >
                  <h1 style={{ fontSize: matchDownMd ? '1.5rem' : '4rem' }}>
                    Sourcing with Due Diligence</h1>
                  <p style={{
                    wordWrap: 'break-word',
                    fontSize: '1.125rem',
                    lineHeight: '1.75rem',
                    textAlign: 'center',
                    maxWidth: '600px'
                  }}>
                    Recover™ transforms textile waste into sustainable recycled fibers, closing the loop on fashion.
                  </p>
                  <a className="btn">
                    <Typography sx={{
                      color: 'white', textAlign: 'center', fontSize: matchDownMd ? '1.5rem' : '3rem', fontWeight: '600px', borderRadius: 7, border: '2px solid White', padding: 1,
                      transition: 'transform 0.3s ease-in-out',
                      ':hover': {
                        background: 'gray',
                        color: 'white',
                        border: 'none',
                        transform: 'scale(1.2)',
                      },
                    }}>
                      Learn more
                    </Typography></a>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={2000} style={{ textAlign: "center" }}>
                  <img
                    style={{
                      height: matchDownMd ? "700px" : "686px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                    src={gambar3}
                    object
                    onLoad={handleLoaded}
                    alt="First slide"
                  />
                  {/* <Carousel.Caption >
                  <h1 style={{ fontSize: matchDownMd ? '1.5rem' : '4rem' }}>
                    Introducing REICONICS</h1>
                  <p style={{
                    wordWrap: 'break-word',
                    fontSize: '1.125rem',
                    lineHeight: '1.75rem',
                    textAlign: 'center',
                    maxWidth: '600px'
                  }}>
                    Recover™, Evlox and Jeanologia join forces to improve circularity in denim.
                  </p>

                  <a className=" btn  ">  <Typography sx={{
                    color: 'white', textAlign: 'center', fontSize: matchDownMd ? '1.5rem' : '3rem', fontWeight: '700px', borderRadius: 7, border: '2px solid White', padding: 1,
                    transition: 'transform 0.3s ease-in-out',
                    ':hover': {
                      background: 'gray',
                      color: 'white',
                      border: 'none',
                      transform: 'scale(1.2)',
                    },
                  }}>
                    Learn more
                  </Typography></a>
                </Carousel.Caption> */}
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
                  object
                  alt="First slide"
                  onLoad={handleLoaded}
                />
                <img
                  style={{
                    height: matchDownMd ? "100px" : "110px",
                    textShadow: "0 0 24px rgba(0, 0, 0, 0.6)",
                  }}
                  src={singlelogo2}
                  object
                  alt="First slide"
                  onLoad={handleLoaded}
                />

                <p
                  style={{
                    paddingTop: "20px",
                    color: "white",
                    fontWeight: "bold",
                    alignItems: "center",

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
                    alignItems: "center",

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

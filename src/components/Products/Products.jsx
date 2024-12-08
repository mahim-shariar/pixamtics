/* eslint-disable no-unused-vars */
import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import vd1 from "../../assets/Videos/Products.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import row11 from "../../assets/certification/2a (1).png";
import row12 from "../../assets/certification/6a.png";
import row21 from "../../assets/certification/row21.png";
import row22 from "../../assets/certification/row22.png";
import row23 from "../../assets/certification/row23.png";

import row31 from "../../assets/certification/row31.png";
import row32 from "../../assets/certification/row32.png";
import row33 from "../../assets/certification/row33.png";

import GestureIcon from "@mui/icons-material/Gesture";
import Products1 from "../../assets/img/1a.jpg";
import productV2 from "../../assets/img/productV2.jpg";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { animateScroll as scroll } from "react-scroll";
import Loader from "../Loader";
import "react-lazy-load-image-component/src/effects/blur.css";

const Products = () => {
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

  const handleVideoLoad = () => {
    setLoading(false); // Video is ready, so set loading to false
  };

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
        <Loader /> {/* Replace this with your loading spinner or animation */}
      </div>
    );
  }
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <>
      <Grid
        container
        style={{ height: "100%", backgroundColor: "#000000", width: "100%" }}
      >
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            display: "flex",
            width: "100%",
            height: matchDownMd ? "350px" : "686px",
          }}
        >
          <section style={{ height: "100%", width: "100%" }}>
            <LazyLoadComponent>
              <video
                src={vd1}
                autoPlay
                muted
                loop
                preload="auto"
                playsInline
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  position: "center",
                }}
              >
                Your browser does not support the video tag.
              </video>
            </LazyLoadComponent>

            <div
              style={{
                width: "100%",
                position: "absolute",
                top: matchDownMd ? "20%" : "30%",
                left: "0",
                textAlign: "center",
                zIndex: 1,
                lineHeight: matchDownMd ? "0.5" : "0.9",
              }}
            >
              <GestureIcon
                sx={{
                  fontSize: matchDownMd ? "50px" : "80px",
                  textShadow: "0 0 24px var(--tw-shadow-color)",
                  fill: "white",
                }}
              />

              <p
                style={{
                  color: "white",
                  fontWeight: "bold",
                  paddingTop: "10px",
                  alignItems: "center",
                  fontSize: matchDownMd ? "35px" : "45px",
                  alignSelf: "center",
                  textShadow: "0 0 24px rgba(0, 0, 0, 0.6)",
                }}
              >
                Products
              </p>
              {/* <p style={{
                                color: 'white',
                                fontSize: matchDownMd ? '1rem' : '1.2rem',
                                textDecoration: 'none',
                                textShadow: '0 0 24px var(--tw-shadow-color)'
                                }} >
                                <Link to="/home" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                                <span style={{ color: 'white', margin: '0 5px' }}>&gt;</span>
                                <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link>
                                </p> */}
            </div>
          </section>
        </Box>

        <LazyLoadComponent>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            style={{ paddingBottom: "20px", backgroundColor: "#000000" }}
          >
            <Box justifyContent="flex-center" alignItems="flex-center">
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
              <Box
                sx={{
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  justifyContent: "flex-start",
                  background: "transparent",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Divider
                  orientation="vertical"
                  sx={{
                    width: "0.0001px",
                    height: matchDownMd ? "9vh" : "10vh",
                    background: "white",
                    opacity: 1,
                  }}
                />
                <Divider
                  sx={{
                    height: 15,
                    width: 15,
                    borderRadius: "50%",
                    background: "white",
                    opacity: 1,
                    marginBottom: 2,
                  }}
                />
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <Typography
                    sx={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                      marginBottom: 2,
                    }}
                  >
                    DISCOVER A YARN PERFECTED JUST FOR YOU
                  </Typography>
                </div>
              </Box>
            </Box>
          </Grid>

          <Grid
            container
            style={{
              position: "relative",
              height: "100%",
              backgroundColor: "#000000",
              paddingLeft: matchDownMd ? "10px" : "145px",
              paddingRight: matchDownMd ? "10px" : "110px",
            }}
            sx={{ pt: 2, pb: 2 }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <div data-aos="zoom-in-up">
                <Box sx={{ textAlign: "left", backgroundColor: "black" }}>
                  <Typography
                    sx={{
                      pb: 1,
                      color: "white",
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    RING SPUN YARNS
                  </Typography>
                  <Typography
                    sx={{ color: "white", textAlign: "center", fontSize: 15 }}
                  >
                    Materials: Cotton
                  </Typography>
                  <Typography
                    sx={{ color: "white", textAlign: "center", fontSize: 15 }}
                  >
                    Use Cases: Knitting, Weaving.
                  </Typography>
                  <Typography
                    sx={{ color: "white", textAlign: "center", fontSize: 15 }}
                  >
                    Types: Carded, Combed, Slub, Compact
                  </Typography>
                  <Typography
                    sx={{ color: "white", textAlign: "center", fontSize: 15 }}
                  >
                    Counts: 6s – 40s
                  </Typography>
                </Box>
              </div>
            </Grid>

            <Box
              sx={{
                position: "absolute",
                zIndex: 1,
                left: "50%",
                top: 0,
                bottom: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transform: "translateX(-50%)",
                width: 0,
              }}
            >
              <Divider
                orientation="vertical"
                sx={{ height: "100%", background: "white", opacity: 1 }}
              />
            </Box>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <div data-aos="fade-up">
                <Box sx={{ textAlign: "center", padding: 1 }}>
                  <LazyLoadComponent>
                    <Box
                      component="img"
                      height="200"
                      src={Products1}
                      alt="Image"
                      sx={{ width: "80%", objectFit: "cover" }}
                    />
                  </LazyLoadComponent>
                </Box>
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            style={{
              position: "relative",
              height: "100%",
              backgroundColor: "#000000",
              paddingLeft: matchDownMd ? "10px" : "145px",
              paddingRight: matchDownMd ? "10px" : "110px",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <div data-aos="fade-up">
                <Box sx={{ textAlign: "center", padding: 1 }}>
                  <LazyLoadComponent>
                    <Box
                      component="img"
                      height="200"
                      src={productV2}
                      alt="Image"
                      sx={{ width: "80%", objectFit: "cover" }}
                    />
                  </LazyLoadComponent>
                </Box>
              </div>
            </Grid>

            <Box
              sx={{
                position: "absolute",
                zIndex: 1,
                left: "50%",
                top: 0,
                bottom: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transform: "translateX(-50%)",
                width: 0,
              }}
            >
              <Divider
                orientation="vertical"
                sx={{ height: "100%", background: "white", opacity: 1 }}
              />
            </Box>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <div data-aos="zoom-in-up">
                <Box sx={{ textAlign: "left", backgroundColor: "black" }}>
                  <Typography
                    sx={{
                      pb: 1,
                      color: "white",
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    OPEN END YARNS
                  </Typography>
                  <Typography
                    sx={{ color: "white", textAlign: "center", fontSize: 15 }}
                  >
                    Materials: Cotton
                  </Typography>
                  <Typography
                    sx={{ color: "white", textAlign: "center", fontSize: 15 }}
                  >
                    Use Cases: Knitting, Weaving, Denim
                  </Typography>
                  <Typography
                    sx={{ color: "white", textAlign: "center", fontSize: 15 }}
                  >
                    Counts: 6s – 30s
                  </Typography>
                </Box>
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            style={{
              position: "relative",
              height: "100%",
              backgroundColor: "#000000",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Divider
                  orientation="vertical"
                  sx={{
                    width: 0.0001,
                    height: "120px",
                    background: "white",
                    opacity: 1,
                  }}
                />
              </Box>
            </Grid>
            <Grid
              container
              style={{
                height: "100%",
                backgroundColor: "#000000",
                paddingLeft: matchDownMd ? "10px" : "100px",
                paddingRight: matchDownMd ? "10px" : "100px",
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <Divider
                    orientation="vertical"
                    sx={{
                      width: 0.0001,
                      height: "50px",
                      background: "white",
                      opacity: 1,
                    }}
                  />
                  <Divider
                    sx={{
                      height: 15,
                      width: 15,
                      borderRadius: "50%",
                      background: "white",
                      opacity: 1,
                      marginBottom: 2,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: 20,
                      fontWeight: "bold",
                      marginBottom: 2,
                    }}
                  >
                    Certifications
                  </Typography>
                </Box>
              </Grid>
              <Grid
                container
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div data-aos="fade-up">
                  <LazyLoadComponent>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Box
                        component="img"
                        src={row11}
                        sx={{
                          maxWidth: 300,
                          width: matchDownMd ? 150 : 300,
                          p: 2,
                        }}
                      />
                      <Box
                        component="img"
                        src={row12}
                        sx={{
                          maxWidth: 300,
                          width: matchDownMd ? 75 : 160,
                          paddingLeft: "-20px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Box
                        component="img"
                        src={row21}
                        sx={{
                          maxWidth: 250,
                          width: matchDownMd ? 120 : 230,
                          p: 2,
                        }}
                      />
                      <Box
                        component="img"
                        src={row22}
                        sx={{
                          maxWidth: 250,
                          width: matchDownMd ? 120 : 230,
                          p: 2,
                        }}
                      />
                      <Box
                        component="img"
                        src={row23}
                        sx={{
                          maxWidth: 250,
                          width: matchDownMd ? 120 : 230,
                          p: 2,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Box
                        component="img"
                        src={row31}
                        sx={{
                          maxWidth: 200,
                          width: matchDownMd ? 80 : 170,
                          p: 2,
                        }}
                      />
                      <Box
                        component="img"
                        src={row32}
                        sx={{
                          maxWidth: 200,
                          width: matchDownMd ? 80 : 170,
                          p: 2,
                        }}
                      />
                      <Box
                        component="img"
                        src={row33}
                        sx={{
                          maxWidth: 200,
                          width: matchDownMd ? 80 : 170,
                          p: 2,
                        }}
                      />
                    </Grid>
                  </LazyLoadComponent>
                </div>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Divider
                  orientation="vertical"
                  sx={{
                    width: 0.0001,
                    height: "50px",
                    background: "white",
                    opacity: 1,
                  }}
                />
                <Divider
                  sx={{
                    height: 33,
                    width: 33,
                    borderRadius: "50%",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 5,
                    transition: "transform 0.3s ease-in-out",
                    ":hover": {
                      background: "white",
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  <ArrowUpwardIcon
                    onClick={scrollToTop}
                    sx={{ color: "black" }}
                  />
                </Divider>
              </Box>
            </Grid>
          </Grid>
        </LazyLoadComponent>
      </Grid>
    </>
  );
};

export default Products;

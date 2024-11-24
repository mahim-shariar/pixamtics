/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Grid,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { animateScroll as scroll } from "react-scroll";
import squarefashions from "../../assets/image/Partners/square fashions.png";
import EpyllionGroup from "../../assets/image/Partners/Epyllion-Group-Logo.png";
import bestseller from "../../assets/image/Partners/bestseller_logo.png";
import dbl from "../../assets/image/Partners/dbl.png";
import Palmal from "../../assets/image/Partners/Palmal 1.png";
import GMS from "../../assets/image/Partners/GMS.png";
import MASCO from "../../assets/image/Partners/MASCO.png";
import Akij from "../../assets/image/Partners/Akij textile mills 1.png";
import Aps from "../../assets/image/Partners/Aps 1.png";
import AKH from "../../assets/image/Partners/AKH 1.png";
import fakir from "../../assets/image/Partners/fakir fashion.png";
import ACS from "../../assets/image/Partners/ACS 1.png";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import vd1 from "../../assets/Videos/Home_1.mp4";
import Home1 from "../../assets/image/Home1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { red } from "@mui/material/colors";

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };
  const handleLoaded = () => {
    setLoading(false);
  };

  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <section>
      <Grid container style={{ height: "100%", backgroundColor: "#000000" }}>
        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box justifyContent="flex-center" alignItems="flex-center">
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
              <Typography
                sx={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 2,
                }}
              >
                ABOUT US
              </Typography>
              <Box
                style={{
                  paddingLeft: matchDownMd ? "10px" : "210px",
                  paddingRight: matchDownMd ? "10px" : "200px",
                }}
              >
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <Typography
                    sx={{ color: "white", textAlign: "center", fontSize: 15 }}
                  >
                    Outpace Spinning Mills Ltd & RA Spinning Mills Ltd are
                    leading global companies in the export-oriented spinning
                    industry in Bangladesh. We take pride in our rigorous
                    quality controls and highly technical team, which make us a
                    leading manufacturer of 100% cotton yarn for the export
                    market.
                  </Typography>
                </div>
              </Box>
            </Box>
          </Box>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              pt: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
              <a style={{ textDecoration: "none" }} href="/Aboutus">
                <Typography
                  sx={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: "bold",
                    borderRadius: 8,
                    border: "2px solid white",
                    padding: 2,
                    transition: "transform 0.3s ease-in-out",
                    ":hover": {
                      background: "white",
                      color: "black",
                      border: "none",
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  Learn More
                </Typography>
              </a>

              <Divider
                orientation="vertical"
                sx={{
                  width: 0.0001,
                  height: "50px",
                  background: "white",
                  opacity: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          height: "100%",
          borderColor: "red",
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
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 2,
              }}
            >
              CLIENTS
            </Typography>
            <Typography
              sx={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 2,
              }}
            >
              TRUSTED BY 100+ BRANDS & PARTNERS WORLDWIDE
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
          <LazyLoadComponent>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box
                component="img"
                src={squarefashions}
                alt="Square Fashions"
                sx={{ maxWidth: 300, width: matchDownMd ? 150 : 300, p: 2 }}
              />
              <Box
                component="img"
                src={EpyllionGroup}
                alt="Epyllion Group"
                sx={{
                  maxWidth: 300,
                  width: matchDownMd ? 150 : 300,
                  paddingLeft: "-20px",
                }}
              />
              <Box
                component="img"
                src={bestseller}
                alt="Bestseller"
                sx={{ maxWidth: 300, width: matchDownMd ? 150 : 300, p: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box
                component="img"
                src={dbl}
                alt="DBL"
                sx={{ maxWidth: 200, width: matchDownMd ? 100 : 200, p: 2 }}
              />
              <Box
                component="img"
                src={Palmal}
                alt="Palmal"
                sx={{ maxWidth: 200, width: matchDownMd ? 100 : 200, p: 2 }}
              />
              <Box
                component="img"
                src={GMS}
                alt="GMS"
                sx={{ maxWidth: 200, width: matchDownMd ? 100 : 200, p: 2 }}
              />
              <Box
                component="img"
                src={MASCO}
                alt="MASCO"
                sx={{ maxWidth: 200, width: matchDownMd ? 100 : 200, p: 2 }}
              />
              <Box
                component="img"
                src={Akij}
                alt="Akij"
                sx={{ maxWidth: 200, width: matchDownMd ? 100 : 200, p: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box
                component="img"
                src={Aps}
                alt="Aps"
                sx={{ maxWidth: 200, width: matchDownMd ? 100 : 200, p: 2 }}
              />
              <Box
                component="img"
                src={AKH}
                alt="AKH"
                sx={{ maxWidth: 200, width: matchDownMd ? 100 : 200, p: 2 }}
              />
              <Box
                component="img"
                src={fakir}
                alt="fakir"
                sx={{ maxWidth: 200, width: matchDownMd ? 100 : 200, p: 2 }}
              />
              <Box
                component="img"
                src={ACS}
                alt="ACS"
                sx={{ maxWidth: 200, width: matchDownMd ? 100 : 200, p: 2 }}
              />
            </Grid>
          </LazyLoadComponent>
        </Grid>

        {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ pt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000' }}>
                                   <Box sx={{
                                          left: '50%', top: 0, bottom: 0, justifyContent: 'flex-start', background: 'transparent',
                                          display: 'flex', flexDirection: 'column', alignItems: 'center',
                                          zIndex: 3
                                   }}>
                                          <Divider orientation="vertical" sx={{ width: .0001, background: 'white', opacity: 1 }} />
                                          <Typography sx={{
                                                 color: 'white', fontSize: 14, fontWeight: 'bold', borderRadius: 8, border: '2px solid white', padding: 2,
                                                 transition: 'transform 0.3s ease-in-out',
                                                 ':hover': {
                                                        background: 'white',
                                                        color: 'black',
                                                        border: 'none',
                                                        transform: 'scale(1.2)',
                                                 },
                                          }}>
                                                 Learn More
                                          </Typography>
                                          <Divider orientation="vertical" sx={{ width: .00001, height: '50px', background: 'white', opacity: 1 }} />
                                   </Box>
                            </Grid> */}
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
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 2,
              }}
            >
              PROCESS
            </Typography>
          </Box>
        </Grid>

        <Grid
          container
          style={{ position: "relative", backgroundColor: "#000000" }}
          sx={{ pt: 2, pb: 2 }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              zIndex: 2,
              p: 1,
            }}
          >
            <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  sx={{
                    pt: 5,
                    pr: 5,
                    color: "white",
                    textAlign: "right",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  THE ART OF PRODUCTION
                </Typography>
                <Typography
                  sx={{
                    paddingLeft: matchDownMd ? "10px" : "145px",
                    pt: 2,
                    pr: 5,
                    color: "white",
                    textAlign: "right",
                    fontSize: 15,
                    textShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  We meticulously operate our state of the art machinery to
                  craft the finest yarns. Explore the intricate clockwork at the
                  heart of our operation.
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
              sx={{
                height: matchDownMd ? "0" : "100%",
                background: "white",
                opacity: 1,
              }}
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
            <Box sx={{ textAlign: "center", padding: 1 }}>
              <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <LazyLoadComponent>
                  <Box
                    component="video"
                    height="200"
                    width="80%"
                    src={vd1}
                    autoPlay
                    muted
                    loop
                    sx={{ objectFit: "cover" }}
                  >
                    Your browser does not support the video tag.
                  </Box>
                </LazyLoadComponent>
              </div>
            </Box>
          </Grid>
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
            backgroundColor: "#000000",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              zIndex: 3,
            }}
          >
            <Divider
              orientation="vertical"
              sx={{ width: 1, backgroundColor: "white" }}
            />
            <a style={{ textDecoration: "none" }} href="/Process">
              {" "}
              <Typography
                sx={{
                  color: "white",
                  fontSize: 14,
                  fontWeight: "bold",
                  borderRadius: 8,
                  border: "2px solid white",
                  padding: 2,
                  transition: "transform 0.3s ease-in-out",
                  ":hover": {
                    background: "white",
                    color: "black",
                    border: "none",
                    transform: "scale(1.2)",
                  },
                }}
              >
                Learn More
              </Typography>
            </a>
          </Box>
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
                height: "80px",
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
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 2,
              }}
            >
              PRODUCTS
            </Typography>
          </Box>
        </Grid>

        <Grid
          container
          style={{
            position: "relative",
            height: "100%",
            backgroundColor: "#000000",
          }}
        >
          {/* <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2 }}> */}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 3,
              p: 1,
            }}
          >
            <div data-aos="fade-up">
              <Box sx={{ textAlign: "center", padding: 1 }}>
                <LazyLoadComponent>
                  <Box
                    component="img"
                    height="200"
                    src={Home1}
                    alt="Image"
                    sx={{ width: "80%", objectFit: "cover" }}
                  />
                </LazyLoadComponent>
              </Box>
            </div>
          </Grid>

          <Box
            sx={{
              display: matchDownMd ? "none" : "flex",
              position: "absolute",
              zIndex: 1,
              left: "50%",
              top: 0,
              bottom: 0,
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
          <Box
            sx={{
              display: matchDownMd ? "none" : "",
              position: "absolute",
              zIndex: 1,
              left: "50%",
              top: 0,
              bottom: 0,

              flexDirection: "column",
              alignItems: "center",
              transform: "translateX(-50%)",
              width: 0,
            }}
          >
            <Divider
              orientation="vertical"
              sx={{
                height: matchDownMd ? "0" : "100%",
                background: "white",
                opacity: 1,
              }}
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
              justifyContent: "left",
              alignItems: "center",
              p: 1,
              zIndex: 4,
            }}
          >
            {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', zIndex: 2, p: 1, backgroundColor: '#000000' }}> */}
            {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}> */}

            <div data-aos="fade-up">
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  sx={{
                    pt: 5,
                    pl: 5,
                    color: "white",
                    textAlign: "left",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  OBSESSED WITH QUALITY,MADE WITH CARE{" "}
                </Typography>
                <Typography
                  sx={{
                    pt: 2,
                    pl: 5,
                    color: "white",
                    textAlign: "left",
                    fontSize: 15,
                    textShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  Discover a yarn tailored to your needs and perfected to last
                  for generations.
                </Typography>
              </Box>
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
            pt: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000000",
          }}
        >
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
              sx={{ width: 0.0001, background: "white", opacity: 1 }}
            />
            <a style={{ textDecoration: "none" }} href="/Products">
              <Typography
                sx={{
                  color: "white",
                  fontSize: 14,
                  fontWeight: "bold",
                  borderRadius: 8,
                  border: "2px solid white",
                  padding: 2,
                  transition: "transform 0.3s ease-in-out",
                  ":hover": {
                    background: "white",
                    color: "black",
                    border: "none",
                    transform: "scale(1.2)",
                  },
                }}
              >
                Learn More
              </Typography>
            </a>
            <Divider
              orientation="vertical"
              sx={{
                width: 0.00001,
                height: "50px",
                background: "white",
                opacity: 1,
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container style={{ height: "100%", backgroundColor: "#000000" }}>
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
            <>
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
            </>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;

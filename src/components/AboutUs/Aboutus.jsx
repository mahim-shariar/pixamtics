import { Box } from "@mui/material"; // Updated import from @mui/material
import { useState, useEffect, useRef } from "react";
import {
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import vd1 from "../../assets/Videos/aboutus2.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

// import "../../assets/css/loader2.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { animateScroll as scroll } from "react-scroll";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Products1 from "../../assets/img/newhorizons.jpg";
import Products5 from "../../assets/img/aboute5.jpg";
import aboute3 from "../../assets/img/aboute3.jpg";
import logo2 from "../../assets/img/international-cotton-association.png";
import logo3 from "../../assets/img/international-textile-manufacturers-federation-logo-34E5017480-seeklogo.com.png";
import logo1 from "../../assets/img/BTMA.png";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Loader from "../Loader";

// Rest of your component code here

const Aboutus = () => {
  const [loading, setLoading] = useState(true);

  const videoEl = useRef(null);
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  // Function to handle when content is loaded (video or image)
  const handleLoaded = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      attemptPlay();
    }
  }, [loading]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 3000); // Simulating async load delay
    AOS.init({ duration: 2000 });
    return () => clearTimeout(timer); // Cleanup timer
  }, []);
  // useEffect(() => {
  //     setTimeout(() => {
  //         setLoading(false); // Hide loader after content is loaded
  //     }, 300); // Adjust the timeout according to your needs
  // }, []);
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
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
        <Loader />
      </div>
    ); // Show loader while loading
  }

  return (
    <>
      <Grid container style={{ height: "100%", backgroundColor: "#000000" }}>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            display: "flex",
            width: "100%",
            height: matchDownMd ? "700px" : "686px",
          }}
        >
          <section
            style={{ height: "100%", width: "100%" }}
            className={`content ${loading ? "hidden" : ""}`}
          >
            {/* <div style={{ height: '100%', width: '100%' }} className={`content ${loading ? "hidden" : ""}`}>
                            {/* Video Example */}
            {/* <video
                                width="600"
                                controls
                                onCanPlayThrough={handleLoaded} // Fires when the video can be played through
                            >
                                <source src={vd1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <img
                                src="your-image.jpg"
                                alt="Your Content"
                                onLoad={handleLoaded} // Fires when the image is fully loaded
                            />
                        </div>  */}
            <video
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "center",
              }}
              loop
              muted
              loading="lazy"
              onCanPlayThrough={handleLoaded}
              alt="All the devices"
              ref={videoEl}
            >
              <source type="video/mp4" src={vd1}></source>
            </video>
            <div
              style={{
                width: "100%",
                position: "absolute",
                top: matchDownMd ? "30%" : "30%",
                left: "0",
                textAlign: "center",
                zIndex: 1,
                lineHeight: matchDownMd ? "0.5" : "0.9",
              }}
            >
              <Diversity3Icon
                sx={{
                  fontSize: matchDownMd ? "50px" : "80px",
                  textShadow: "0 0 24px rgba(0, 0, 0, 0.6)",
                  fill: "white",
                }}
              />

              <p
                style={{
                  color: "white",
                  fontWeight: "bold",
                  alignItems: "center",
                  paddingTop: "10px",
                  textShadow: "0 0 24px rgba(0, 0, 0, 0.6)",
                  fontSize: matchDownMd ? "35px" : "45px",
                  alignSelf: "center",
                }}
              >
                About Us
              </p>
            </div>
          </section>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ height: "100%", backgroundColor: "#000000" }}
      >
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
            <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              <Typography
                sx={{
                  paddingLeft: matchDownMd ? "10px" : "200px",
                  paddingRight: matchDownMd ? "10px" : "225px",
                  color: "white",
                  textAlign: "center",
                  fontSize: 15,
                  textShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                We began in 1994 as a 100% export-oriented apparel manufacturer
                under the names of Outright Fashion Ltd., Outfit Fashion Ltd.
                and Outwear Fashion Ltd. in Bangladesh. Under the pioneering
                vision and successful leadership of our Chairman Late Engr. Md.
                Reazat Ali, we achieved incredible growth and was awarded
                nationally for outstanding performance in ready made garments
                exports. As a proud member of the Bangladesh Garments
                Manufacturers & Exporters Association (BGMEA), we were able to
                bring a significant impact in the economic and social aspects of
                our stakeholders.
              </Typography>
            </div>
          </Box>
          <Box
            sx={{
              left: "50%",
              marginTop: 10,
              bottom: 0,
              paddingTop: 10,
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
                height: matchDownMd ? "50px" : "105px",
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
                marginBottom: 1,
              }}
            />
            {/* <Typography sx={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 2 }}>10</Typography> */}
          </Box>
        </Box>
      </Grid>
      <Grid
        container
        style={{
          position: "relative",
          height: "100%",
          backgroundColor: "#000000",
          marginTop: "-2px",
        }}
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
            justifyContent: "right",
            alignItems: "center",
            zIndex: 2,
            p: 1,
            paddingLeft: matchDownMd ? "10px" : "200px",
          }}
        >
          <div>
            <Typography
              sx={{
                pb: 2,
                color: "white",
                textAlign: matchDownMd ? "center" : "right",
                fontSize: 20,
                pr: matchDownMd ? 0 : 5,
                fontWeight: "bold",
                paddingLeft: matchDownMd ? "10px" : "200px",
              }}
            >
              NEW HORIZONS
            </Typography>

            <Box
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              sx={{ textAlign: "left", backgroundColor: "black", pr: 5 }}
            >
              <Typography
                sx={{ color: "white", textAlign: "right", fontSize: 15 }}
              >
                In 2005, our Managing Director Engr. Razeeb Haider established
                Outpace Spinning Mills Ltd for the manufacturing and export of
                100% cotton knitting and weaving yarns. With a new focus, we
                ushered in an era of innovation and exceptional quality.
              </Typography>
              <Typography
                sx={{ color: "white", textAlign: "right", fontSize: 15 }}
              >
                In 2013, RA Spinning Mills Ltd. was established, and was
                subsequently expanded in 2019 and 2023 to further enhance our
                production capacity and diversify our product portfolio.
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
            display: matchDownMd ? "none" : "flex",
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
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
            p: 1,
            paddingRight: matchDownMd ? "10px" : "200px",
          }}
        >
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <Box sx={{ textAlign: "center", padding: 1, paddingTop: 10 }}>
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
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ height: "100%", backgroundColor: "#000000" }}
      >
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
                height: matchDownMd ? "50px" : "105px",
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
                marginBottom: 1,
              }}
            />
            {/* <Typography sx={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 2 }}>11</Typography> */}
          </Box>
        </Box>
      </Grid>
      <Grid
        container
        style={{
          position: "relative",
          height: "100%",
          backgroundColor: "#000000",
          marginTop: "-2px",
          paddingLeft: matchDownMd ? "0px" : "200px",
          paddingRight: matchDownMd ? "10px" : "200px",
        }}
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
            justifyContent: "center",
            alignItems: "center",
            zIndex: 4,
            p: 1,
          }}
        >
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <Box data-aos="fade-up" sx={{ textAlign: "center", padding: 1 }}>
              <LazyLoadComponent>
                <Box
                  component="img"
                  height="200"
                  src={Products5}
                  LazyLoadComponent
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
            display: matchDownMd ? "none" : "flex",
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
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 4,
            p: 1,
          }}
        >
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <Box
              data-aos="fade-up"
              sx={{
                textAlign: "left",
                backgroundColor: "black",
                p: matchDownMd ? 0 : 5,
              }}
            >
              <Typography
                data-aos="fade-up"
                sx={{
                  color: "white",
                  textAlign: "justify",
                  fontSize: 15,
                  pl: matchDownMd ? 1 : 5,
                }}
              >
                In 2013, RA Spinning Mills Ltd. was established, and was
                subsequently expanded in 2019 and 2023 to further enhance our
                production capacity and diversify our product portfolio.
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
        style={{
          height: "100%",
          backgroundColor: "#000000",
          marginTop: "-2px",
        }}
      >
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
                height: matchDownMd ? "50px" : "105px",
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
                marginBottom: 1,
              }}
            />
            {/* <Typography sx={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 2 }}>12</Typography> */}
          </Box>
        </Box>
      </Grid>

      <Grid
        container
        style={{
          position: "relative",
          height: "100%",
          marginTop: "-2px",
          backgroundColor: "#000000",
          paddingLeft: matchDownMd ? "10px" : "200px",
          paddingRight: matchDownMd ? "10px" : "200px",
        }}
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
            justifyContent: "center",
            alignItems: "center",
            zIndex: 5,
            p: 1,
          }}
        >
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <Box data-aos="fade-up" sx={{ textAlign: "center", padding: 1 }}>
              <LazyLoadComponent>
                <Box
                  component="img"
                  height="200"
                  src={aboute3}
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
            display: matchDownMd ? "none" : "flex",
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
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 5,
            p: 1,
          }}
        >
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <Box
              data-aos="fade-up"
              sx={{
                textAlign: "left",
                backgroundColor: "black",
                p: matchDownMd ? 0 : 5,
              }}
            >
              <Typography
                data-aos="fade-up"
                sx={{ color: "white", textAlign: "justify", fontSize: 15 }}
              >
                Capacity: 18,000+ tons annually.
              </Typography>
              <Typography
                data-aos="fade-up"
                sx={{ color: "white", textAlign: "justify", fontSize: 15 }}
              >
                Annual turnover: USD 65 million.
              </Typography>
              <Typography
                data-aos="fade-up"
                sx={{ color: "white", textAlign: "justify", fontSize: 15 }}
              >
                Product Range: Knitting, Weaving and Open End Yarns, with
                carded, combed, slub and compact yarns available.
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
        style={{ height: "100%", backgroundColor: "#000000" }}
      >
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
              paddingRight: matchDownMd ? "0px" : "0",
              marginTop: matchDownMd ? "-54px" : "-110px",
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
              sx={{
                width: "0.0001px",
                height: matchDownMd ? "52px" : "108px",
                background: "White",
                opacity: 1,
              }}
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
                height: matchDownMd ? "50px" : "105px",
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
                marginBottom: 1,
              }}
            />
            {/* <Typography sx={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 2 }}>13</Typography> */}
          </Box>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{
          zIndex: 6,
          height: "100%",
          marginTop: "-2px",
          backgroundColor: "#000000",
        }}
      >
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
            <Typography
              sx={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 2,
              }}
            >
              TRUE TO OUR MISSION
            </Typography>
            <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              <Typography
                sx={{
                  paddingLeft: matchDownMd ? "10px" : "200px",
                  paddingRight: matchDownMd ? "10px" : "225px",
                  color: "white",
                  textAlign: "center",
                  fontSize: 15,
                  textShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                While our footprint has grown, our mission remains the same as
                always: to provide the highest quality yarn with utmost customer
                satisfaction. We aim to be a global leader in the spinning
                industry, reaching customers around the world with our premium
                products. Through our dedication and expertise, we are committed
                to making a positive difference in the industry and the
                communities we serve.
              </Typography>
            </div>
          </Box>
          <Box
            sx={{
              left: "50%",
              marginTop: 10,
              bottom: 0,
              paddingTop: 10,
              justifyContent: "flex-start",
              background: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          ></Box>
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
            {/* <Divider orientation="vertical" sx={{ width: 0.0001, height: '50px', background: 'white', opacity: 1, }} />
                        <Divider sx={{ height: 15, width: 15, borderRadius: '50%', background: 'white', opacity: 1, marginBottom: 2 }} /> */}
            <Typography
              sx={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                paddingTop: 5,
                marginBottom: 2,
              }}
            >
              PROUD MEMBERS OF
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
                src={logo1}
                alt="Square Fashions"
                sx={{ maxWidth: 300, width: matchDownMd ? 150 : 200, p: 2 }}
              />
              <Box
                component="img"
                src={logo2}
                alt="Epyllion Group"
                sx={{
                  maxWidth: 300,
                  width: matchDownMd ? 150 : 200,
                  paddingLeft: "-20px",
                }}
              />
              <Box
                component="img"
                src={logo3}
                alt="Bestseller"
                sx={{ maxWidth: 300, width: matchDownMd ? 150 : 200, p: 2 }}
              />
            </Grid>
          </LazyLoadComponent>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          height: "100%",
          backgroundColor: "#000000",
          marginTop: "-2px",
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
              border: "none",
            }}
          >
            <Divider
              orientation="vertical"
              sx={{
                width: 0.0001,
                height: "60px",
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
              border: "none",
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
            {/* <Typography
                            sx={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginBottom: 2,
                            }}
                        >
                            Products
                        </Typography> */}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Aboutus;

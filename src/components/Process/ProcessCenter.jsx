/* eslint-disable no-unused-vars */
import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import vd1 from "../../assets/Videos/Process_1.mp4";
import vd2 from "../../assets/Videos/Process_4.mp4";
import vd3 from "../../assets/Videos/Process_3.mp4";
export default function ProcessCenter() {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid container style={{ height: "100%", backgroundColor: "#000000" }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
              <Typography
                sx={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 2,
                }}
              >
                NATURE’S GIFT
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
                  We take great pride in crafting premium yarns that are a true
                  celebration of nature's bounty. Our journey begins by
                  meticulously selecting the finest grades of cotton from the
                  most responsibly cultivated sources around the globe. With
                  utmost care and respect for the environment, we transform
                  these natural fibers into luxurious yarns that embody
                  softness, strength, and unparalleled quality.
                </Typography>
              </div>
            </Box>

            <Box
              sx={{
                left: "50%",
                bottom: 0,
                paddingTop: 2,
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
              <Typography
                sx={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 2,
                }}
              >
                HARMONY BETWEEN MAN AND MACHINE
              </Typography>
            </Box>
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
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
              zIndex: 2,
              pl: matchDownMd ? "10px" : "200px",
            }}
          >
            <div data-aos="fade-up">
              <Box sx={{ textAlign: "right", pr: matchDownMd ? 1 : 5 }}>
                <LazyLoadComponent>
                  <video
                    width="100%"
                    src={vd1}
                    autoPlay
                    playsInline
                    muted
                    loop
                    style={{ objectFit: "cover" }}
                  >
                    Your browser does not support the video tag.
                  </video>
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
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              justifyContent: "left",
              pl: matchDownMd ? 1 : 5,
              pr: matchDownMd ? "10px" : "200px",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <div data-aos="fade-up">
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  sx={{
                    color: "white",
                    textAlign: "justify",
                    fontSize: 15,
                    textShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  Our commitment to excellence is woven into every fiber of our
                  yarns through the masterful union of state-of-the-art European
                  machinery and the expertise of our highly skilled team. With
                  unwavering precision, these machines transform the finest
                  natural fibers into yarns of exceptional quality and
                  consistency. However, true artistry lies in the hands of our
                  dedicated team members, who undergo rigorous training to
                  master the intricate operations and maintenance of this
                  sophisticated machinery.
                </Typography>
              </Box>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          style={{ backgroundColor: "#000000" }}
          sx={{ pt: 2, pb: 2 }}
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
              zIndex: 2,
            }}
          >
            <div data-aos="fade-up">
              {" "}
              <Box sx={{ padding: 0 }}>
                <LazyLoadComponent>
                  <video
                    width="100%"
                    src={vd2}
                    playsInline
                    autoPlay
                    muted
                    loop
                    style={{ objectFit: "cover" }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </LazyLoadComponent>
              </Box>
            </div>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box justifyContent="flex-center" alignItems="flex-center">
            <Box
              sx={{
                left: "50%",
                paddingTop: "40px",
                paddingBottom: "40px",
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
                FINDING STRENGTH IN ORDER
              </Typography>
              <div data-aos-anchor-placement="bottom-bottom">
                <Typography
                  data-aos="fade-up"
                  sx={{
                    paddingLeft: matchDownMd ? "10px" : "200px",
                    paddingRight: matchDownMd ? "10px" : "225px",
                    color: "white",
                    textAlign: "center",
                    fontSize: 15,
                    textShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  Through a series of mechanical steps, millions of randomly
                  arranged fibers are plucked, cleaned, and then taken through a
                  progressive set of drafting and twisting stages to produce an
                  ordered structure of parallel fibers twisted together to
                  provide tensile strength and form our various yarns. 
                </Typography>
              </div>
            </Box>
          </Box>
        </Grid>
        <Grid
          container
          style={{ position: "relative", backgroundColor: "#000000" }}
          sx={{ pt: 2, pb: 2, mb: 2 }}
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
              justifyContent: "left",
              alignItems: "center",
              zIndex: 3,
            }}
          >
            <div>
              <Box
                sx={{
                  textAlign: "left",
                  pl: matchDownMd ? "10px" : "200px",
                  pr: matchDownMd ? 1 : 5,
                }}
              >
                <Typography
                  sx={{
                    pb: 2,
                    color: "white",
                    textAlign: matchDownMd ? "center" : "right",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  GIVING BACK
                </Typography>
                <Typography
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  sx={{
                    color: "white",
                    textAlign: matchDownMd ? "center" : "right",
                    fontSize: 15,
                    textShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  Through an innovative closed-loop system, we are able to reuse
                  and recycle over 90% of the waste generated during our yarn
                  production process. This dramatically cuts down on waste
                  needing disposal while allowing us to repurpose these
                  materials into new products. We view this as our way of
                  returning the favor to the Earth for gifting us with such an
                  exquisite natural fiber.
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
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              pl: matchDownMd ? 1 : 5,
              pr: matchDownMd ? "10px" : "200px",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 3,
            }}
          >
            <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              <Box sx={{ textAlign: "center" }}>
                <LazyLoadComponent>
                  <video
                    width="100%"
                    src={vd3}
                    autoPlay
                    muted
                    playsInline
                    loop
                    style={{ objectFit: "cover" }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </LazyLoadComponent>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

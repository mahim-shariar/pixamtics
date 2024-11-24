/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { Divider, Grid, useMediaQuery, useTheme, Box } from "@mui/material";
import FactoryIcon from "@mui/icons-material/Factory";
import vd1 from "../../assets/Videos/Process.mp4";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const ProcessHeader = () => {
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
  useEffect(() => {
    if (!loading) {
      attemptPlay();
    }
  }, [loading]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false); // Hide loader after content is loaded
  //   }, 300); // Adjust the timeout according to your needs
  // }, []);
  const handleLoaded = () => {
    setLoading(false);
  };

  // if (loading) {
  //   return <Loader />; // Show loader while loading
  // }
  return (
    <>
      <Grid container style={{ height: "100%", backgroundColor: "#000000" }}>
        <Box
          justifyContent="flex-center"
          alignItems="flex-center"
          sx={{
            width: "100%",
            height: matchDownMd ? "700px" : "686px",
            overflow: "hidden",
          }}
        >
          <section
            style={{ height: "100%" }}
            className={`content ${loading ? "hidden" : ""}`}
          >
            <LazyLoadComponent>
              <Box
                component="video"
                src={vd1}
                autoPlay
                muted
                loop
                sx={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  position: "center",
                }}
              >
                Your browser does not support the video tag.
              </Box>
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
              <FactoryIcon
                sx={{ fontSize: matchDownMd ? "50px" : "80px", fill: "white" }}
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
                Process
              </p>
              {/* <p style={{
                color: 'white',
                fontSize: matchDownMd ? '1rem' : '1.2rem',
                textDecoration: 'none',
                textShadow: '0 0 24px var(--tw-shadow-color)'
              }} >
                <Link to="/home" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                <span style={{ color: 'white', margin: '0 5px' }}>&gt;</span>
                <Link to="/process" style={{ color: 'white', textDecoration: 'none' }}>Process</Link>
              </p>
              <p style={{ color: 'white', lineHeight: '1.0rem', fontSize: matchDownMd ? '1rem' : '1.2rem', }}>Textile waste is our raw material, and we use it to create high-quality recycled cotton fiber.</p> */}
            </div>
          </section>
        </Box>
      </Grid>
    </>
  );
};
export default ProcessHeader;

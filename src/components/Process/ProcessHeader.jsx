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
            // className={`content ${loading ? "hidden" : ""}`}
          >
            <video
              src={vd1}
              ref={videoEl}
              autoPlay
              muted
              className="video"
              preload="auto"
              playsInline
              loop
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "center",
              }}
            >
              Your browser does not support the video tag.
            </video>

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
            </div>
          </section>
        </Box>
      </Grid>
    </>
  );
};
export default ProcessHeader;

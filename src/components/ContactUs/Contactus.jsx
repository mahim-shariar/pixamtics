/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import backgroundImage from "../../assets/image/Contactus.webp"; // Use WebP format
import Loader from "../Loader";

const ContactUs = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const [loading, setLoading] = useState(true); // Loading state

  // Simulate loading for 2 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;

    const handleImageLoad = () => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // 1-second delay

      return () => clearTimeout(timer);
    };

    img.onload = handleImageLoad;
    img.onerror = () => {
      setLoading(false); // Set loading to false in case of error
    };
  }, []);
  const commonTextFieldStyles = {
    color: "white",
    width: "100%",
    m: 2,
    "& label.Mui-focused": {
      color: "white",
      fontSize: 22,
      fontWeight: "bold",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
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
    );
  }

  return (
    <>
      <LazyLoadComponent>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#000000",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: matchDownMd ? "350px" : "686px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <MailOutlineIcon sx={{ fontSize: matchDownMd ? '50px' : '80px', fill: 'white' }} /> */}
          {/* <Typography
            sx={{
              color: 'white',
              textAlign: 'center',
              fontSize: matchDownMd ? '35px' : '45px',
              fontWeight: 'bold',
              textShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            }}
          >
            Contact Us
          </Typography> */}
          <p
            style={{
              color: "white",
              fontSize: matchDownMd ? "1rem" : "1.2rem",
              textDecoration: "none",
              textShadow: "0 0 24px var(--tw-shadow-color)",
            }}
          >
            {/* <Link to="/Home" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'white', margin: '0 5px' }}>&gt;</span>
            <Link to="/Contactus" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link> */}
          </p>
        </Box>

        <Grid container style={{ height: "100%", backgroundColor: "#000000" }}>
          <Grid item xs={12}>
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
            </Box>
          </Grid>
        </Grid>

        <Grid container style={{ height: "100%", background: "#000000" }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "flex-end", p: 5 }}
          >
            <Box sx={{ p: 2 }}>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  m: 2,
                  fontSize: "1.5rem",
                }}
              >
                Fields with a * are required to submit.
              </Typography>
              {[
                "First name *",
                "Last name *",
                "Email *",
                "Topic *",
                "Country *",
                "Message *",
              ].map((label) => (
                <TextField
                  key={label}
                  label={label}
                  variant="standard"
                  focused
                  sx={commonTextFieldStyles}
                />
              ))}
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  m: 2,
                  fontSize: "1rem",
                }}
              >
                Agreement to Privacy Policy *
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  m: 2,
                  fontSize: ".8rem",
                }}
              >
                Read our privacy policy to review our terms & conditions.
              </Typography>
              <FormGroup>
                <FormControlLabel
                  sx={{ m: 1, color: "white" }}
                  control={<Checkbox sx={{ color: "white" }} />}
                  label="I have read and agree to the Privacy Policy. *"
                />
                <FormControlLabel
                  sx={{ m: 1, color: "white" }}
                  control={<Checkbox sx={{ color: "white" }} />}
                  label="I accept to receive news, updates, and promotional information about Recover™ via email."
                />
              </FormGroup>
              <Box
                sx={{
                  width: 100,
                  height: 40,
                  color: "white",
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: "bold",
                  borderRadius: 8,
                  border: "2px solid white",
                  padding: 1,
                  margin: 2,
                  transition: "transform 0.3s ease-in-out",
                  ":hover": {
                    background: "#1E1E1E",
                    color: "white",
                    border: "none",
                    transform: "scale(1.2)",
                  },
                }}
              >
                Submit
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              height: "100%",
              justifyContent: "flex-start",
              p: 5,
            }}
          >
            <Box sx={{ background: "#ececec", p: 5 }}>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "bold",
                  m: 2,
                  fontSize: "1rem",
                }}
              >
                FOLLOW US
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "bold",
                  m: 2,
                  fontSize: "1rem",
                }}
              >
                Pixamatics Technology Ltd.
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "bold",
                  m: 2,
                  fontSize: "1rem",
                }}
              >
                Plot No# 1, Road No# 10/17, Block# E, Dhaka 1213, Dhaka 1213
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </LazyLoadComponent>
    </>
  );
};

export default ContactUs;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Stack } from "react-bootstrap";

const Footer = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);

  const toggleClass = () => {
    setisMenu((prevState) => !prevState);
    setResponsiveclose((prevState) => !prevState);
  };

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu((prevState) => !prevState);
  };

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 1 }}
        sx={{ backgroundColor: "#0D0D0D", pt: 5, pl: 5, pr: 5, pb: 0 }}
      >
        <Grid item xs={12} sm={12} md={1}></Grid>
        <Grid item xs={2} sm={2} md={2} style={{ paddingBottom: "20px" }}>
          <NavLink
            style={{ paddingRight: "20px" }}
            activeClassName="is-active"
            to="/"
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "120px", paddingTop: "10px" }}
            />
          </NavLink>
        </Grid>
        <Grid
          item
          xs={5}
          sm={5}
          md={2}
          sx={{ color: "white", textAlign: "left", pl: 5, pb: 5 }}
        >
          {/* <Typography sx={{ pb: 1, }} ><Link to="/Aboutus" style={{ color: 'white', textDecoration: 'none' }}>About us</Link></Typography>
                    <Typography sx={{ pb: 1, }} ><Link to="/Process" style={{ color: 'white', textDecoration: 'none' }}>Process</Link></Typography>
                    <Typography sx={{ pb: 1, }}><Link to="/Products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link></Typography> */}
        </Grid>
        <Grid item xs={5} sm={5} md={2} sx={{ textAlign: "left" }}>
          {/* <Typography sx={{ pb: 1, }} ><Link to="/News" style={{ color: 'white', textDecoration: 'none' }}>News</Link></Typography>
                    <Typography sx={{ pb: 1, }} ><Link to="/Contactus" style={{ color: 'white', textDecoration: 'none' }}>Contact us</Link></Typography> */}
        </Grid>
        <Grid xs={12} sm={12} md={1}></Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          sx={{ textAlign: "center" }}
          spacing={{ xs: 1, md: 1 }}
        >
          {/* <Button variant="outlined" size="small" style={{ color: 'white', textDecoration: 'none', padding: '6px', borderRadius: 800, margin: '5px', border: '2px solid #FFF' }}>
                        Subcribe to newsletter
                    </Button>
                    <IconButton variant="outlined" style={{ padding: '7px', borderRadius: 800, margin: '5px', border: '2px solid #FFF' }} aria-label="delete" sx={{ color: "white" }}
                        size="small">
                        <InstagramIcon sx={{ color: 'white' }} />
                    </IconButton>
                    <IconButton variant="outlined" style={{ padding: '7px', borderRadius: 800, margin: '5px', border: '2px solid #FFF' }} aria-label="delete" sx={{ color: "white" }}
                        size="small">
                        <LinkedInIcon sx={{ color: 'white' }} />
                    </IconButton> */}
        </Grid>
        <Grid item xs={12} sm={12} md={1} sx={{ pb: 5 }}></Grid>
      </Grid>

      <Grid
        container
        spacing={{ xs: 2, md: 1 }}
        sx={{ backgroundColor: "#0D0D0D", pt: 0, pl: 5, pr: 5, pb: 10 }}
      >
        <Grid item xs={1} sm={1} md={1}></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          sx={{ borderTop: "1px solid #fff", pt: 2 }}
        >
          <Typography sx={{ pb: 1 }}>
            <a
              style={{ color: "hsla(0,0%,100%,.5)", textDecoration: "none" }}
              href="/home"
            >
              Powered By Pixamatics Technology Ltd.
            </a>
          </Typography>
        </Grid>
        <Grid
          item
          className="fottersection2"
          xs={12}
          sm={12}
          md={5}
          sx={{ borderTop: "1px solid #fff", textAlign: "right", pt: 2 }}
        >
          <a
            style={{
              color: "white",
              textDecoration: "none",
              paddingRight: "20px",
            }}
            href="/Home"
          >
            Home
          </a>
          <a
            style={{
              color: "white",
              textDecoration: "none",
              paddingRight: "20px",
            }}
            href="/Aboutus"
          >
            About us
          </a>
          <a
            style={{
              color: "white",
              textDecoration: "none",
              paddingRight: "20px",
            }}
            href="/Process"
          >
            Process
          </a>

          <a
            style={{
              color: "white",
              textDecoration: "none",
              paddingRight: "20px",
            }}
            href="/Products"
          >
            Products
          </a>

          {/* <a style={{ color: 'white', textDecoration: 'none', paddingRight: '20px' }} href='/News'>News</a> */}

          <a
            style={{
              color: "white",
              textDecoration: "none",
              paddingRight: "20px",
            }}
            href="/Contactus"
          >
            Contract us
          </a>
        </Grid>
        <Grid item xs={1} sm={0} md={1}></Grid>
      </Grid>
    </>
  );
};

export default Footer;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import logo from "../../assets/img/logo.png";
import { IoMdArrowDropup } from "react-icons/io";
import { Grid, Box, Container } from "@mui/material";

const Navbarmenu = () => {
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
        style={{
          position: "absolute",
          textAlign: "right",
          zIndex: 2,
          marginRight: "auto",
          marginLeft: "auto",
          paddingRight: "25px",
          paddingLeft: "25px",
        }}
        sx={{ p: 1 }}
      >
        <Grid
          item
          xs={2}
          sm={2}
          md={2}
          lg={2}
          xl={2}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <NavLink exact activeClassName="is-active" to="/">
            <img
              src={logo}
              alt="logo"
              style={{ width: "120px", paddingTop: "10px" }}
            />
          </NavLink>
        </Grid>

        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          lg={10}
          xl={10}
          style={{
            display: "flex",
            justifyContent: "right",
            paddingRight: "55px",
          }}
        >
          <nav className="main-nav">
            <ul
              className={`main-menu menu-right menuq1 ${
                isMenu ? "menuq2" : ""
              }`}
            >
              <li className="menu-item">
                <NavLink
                  onClick={toggleClass}
                  activeClassName="is-active"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  onClick={toggleClass}
                  activeClassName="is-active"
                  to="/aboutus"
                >
                  About us
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  onClick={toggleClass}
                  activeClassName="is-active"
                  to="/process"
                >
                  Process
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  onClick={toggleClass}
                  activeClassName="is-active"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>

              {/* <li className="menu-item">
                                <NavLink onClick={toggleClass} activeClassName='is-active' to="/news">News</NavLink>
                            </li> */}

              <li className="menu-item">
                <NavLink
                  onClick={toggleClass}
                  style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: "20px",
                    border: "1.5px solid white",
                    boxSizing: "border-box",
                  }}
                  activeClassName="is-active"
                  to="/contactus"
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
          </nav>
        </Grid>

        <Grid
          item
          xs={2}
          sm={2}
          md={2}
          lg={0}
          xl={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <nav className="main-nav">
            <span
              className="menubar__button"
              style={{ display: "none" }}
              onClick={toggleClass}
            >
              {isResponsiveclose ? <FiXCircle /> : <FiAlignRight />}
            </span>
          </nav>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbarmenu;

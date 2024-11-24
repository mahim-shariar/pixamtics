import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Pagination,
  PaginationItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLongOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

const useTreeItemStyles = makeStyles((theme) => ({
  content: {
    flexDirection: "row-reverse",
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, ...other } = props;

  return (
    <TreeItem
      sx={{
        ":hover": { backgroundColor: "transparent" },
        paddingBottom: "10px",
        paddingTop: "10px",
        borderBottom: "1px solid rgb(216 219 224)",
      }}
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="action" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
        </div>
      }
      classes={{
        content: classes.content,
      }}
      {...other}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 230,
  },
}));

const PressReleases = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  //const page = parseInt(query.get('page') || '1', 10);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Grid container style={{ height: "100%", backgroundColor: "white" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{ background: "blue" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "blue",
              textAlign: "center",
              top: 0,
              height: matchDownMd ? "22vh" : "35vh",
              paddingLeft: "30%",
              paddingTop: matchDownMd ? "300px" : "400px",
              paddingRight: "30%",
              paddingBottom: matchDownMd ? "30px" : "70px",
              justifyContent: "end",
            }}
          >
            <Typography
              style={{
                color: "white",
                textAlign: "center",
                justifyContent: "center",
                textJustify: "center",
                verticalAlign: "buttom",
                fontSize: matchDownMd ? "3rem" : "5rem",
                textShadow: "0 0 24px rgb(0 0 0 / 60%)",
                fontWeight: 700,
              }}
            >
              <ReceiptLongIcon sx={{ fontSize: "70px" }} />
            </Typography>
            <Typography
              style={{
                color: "white",
                textAlign: "center",
                justifyContent: "center",
                textJustify: "center",
                verticalAlign: "buttom",
                fontSize: matchDownMd ? "3rem" : "5rem",
                textShadow: "0 0 24px rgb(0 0 0 / 60%)",
                fontWeight: 700,
              }}
            >
              Press releases
            </Typography>
            <p
              style={{
                color: "white",
                fontSize: matchDownMd ? "1rem" : "1.2rem",
                textDecoration: "none",
                fontWeight: "bold",
                textShadow: "0 0 24px var(--tw-shadow-color)",
              }}
            >
              <a
                style={{
                  color: "white",
                  lineHeight: "1.5rem",
                  paddingRight: "10px",
                }}
                href="/home"
              >
                Home
              </a>
              <span>&gt;</span>
              <span
                style={{
                  color: "white",
                  lineHeight: "1.5rem",
                  paddingLeft: "10px",
                }}
              >
                Press releases
              </span>
            </p>
            <p
              style={{
                color: "white",
                lineHeight: "1.0rem",
                fontWeight: "bold",
                fontSize: matchDownMd ? "1rem" : "1.2rem",
              }}
            >
              Welcome to Recover's Press Releases Download Center.
            </p>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{ background: "blue" }}
        >
          <Box
            sx={{
              left: "50%",
              bottom: 0,
              justifyContent: "flex-start",
              background: "blue",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: matchDownMd ? "8vh" : "12vh",
              marginTop: "-1px",
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
          sx={{ padding: matchDownMd ? "2%" : "5% 25% 5% 25%" }}
        >
          <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: "100%" }}>
            <Typography
              sx={{
                color: "blue",
                paddingLeft: "10px",
                paddingBottom: "20px",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              {" "}
              Press releases
            </Typography>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={
                <CloseIcon
                  sx={{
                    backgroundColor: "blue",
                    fontFamily: "CircularXX,sans-serif;",
                    width: "auto",
                    height: "20px",
                    fill: "white",
                    borderRadius: "700px",
                  }}
                />
              }
              defaultExpandIcon={
                <AddIcon
                  sx={{
                    backgroundColor: "blue",
                    width: "auto",
                    height: "20px",
                    fill: "white",
                    borderRadius: "700px",
                  }}
                />
              }
            >
              <StyledTreeItem
                nodeId="1"
                label={
                  <Typography
                    sx={{
                      color: "Black",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      ":hover": {
                        backgroundColor: "transparent",
                        color: "gray",
                      },
                    }}
                  >
                    {" "}
                    THE RECOVER™ PROCESS
                  </Typography>
                }
              >
                <div
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <CardContent>
                    <Container
                      sx={{
                        lineHeight: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "blue",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          paddingBottom: "10px",
                          paddingTop: "20px",
                        }}
                      >
                        Can you also produce ring spun yarns from Recover™
                        fiber?
                      </Typography>
                      <Typography
                        sx={{
                          color: "Black",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          paddingBottom: "10px",
                        }}
                      >
                        In addition to open end yarns, Recover™ has successfully
                        produced ring spun yarns. The spinning process and
                        quality of these yarns has been validated by key
                        suppliers and retailers.
                      </Typography>

                      <Typography
                        sx={{
                          color: "blue",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          paddingBottom: "10px",
                          paddingTop: "10px",
                        }}
                      >
                        Does the presence of trims (e.g., buttons, zippers,
                        etc.) affect the recyclability of products?
                      </Typography>
                      <Typography
                        sx={{
                          color: "Black",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          paddingBottom: "10px",
                        }}
                      >
                        No, it doesn’t. The latest Recover™ recycling technology
                        can automatically remove these contaminating elements.
                      </Typography>

                      <Typography
                        sx={{
                          color: "blue",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          paddingBottom: "10px",
                          paddingTop: "10px",
                        }}
                      >
                        What kind of textile waste can Recover™ recycle?
                      </Typography>
                      <Typography
                        sx={{
                          color: "Black",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          paddingBottom: "10px",
                        }}
                      >
                        Recover™ recycles three categories of textile waste:
                        post-industrial, pre-consumer, and post-consumer.
                      </Typography>
                      <Typography
                        sx={{
                          color: "Black",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          paddingBottom: "10px",
                        }}
                      >
                        <ul>
                          <li>
                            Post-industrial: This is textile fabric waste from
                            garment manufacturing, also called clips or scraps.{" "}
                          </li>
                          <li>
                            Pre-consumer: These are finished garments that could
                            not be sold or used. They might include default
                            goods or overstock.{" "}
                          </li>
                          <li>
                            Post-consumer: These are garments that have been
                            worn. Recover™ recycles garments that are deemed not
                            suitable for re-use.
                          </li>
                        </ul>
                      </Typography>
                    </Container>
                  </CardContent>
                </div>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId="2"
                label={
                  <Typography
                    sx={{
                      color: "Black",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      ":hover": {
                        backgroundColor: "transparent",
                        color: "gray",
                      },
                    }}
                  >
                    {" "}
                    THE RECOVER™ PROCESS
                  </Typography>
                }
              >
                <div
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <CardContent>
                    <Container
                      sx={{
                        height: 100,
                        lineHeight: 2,
                      }}
                    >
                      An interview-centric course designed to prepare you for
                      the role of SDE for both product and service-based
                      companies. A placement preparation pack built with years
                      of expertise. Learn Resume Building, C++, Java, DSA, CS
                      Theory concepts, Aptitude, Reasoning, LLD, and much more!
                    </Container>
                  </CardContent>
                </div>
              </StyledTreeItem>
            </TreeView>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PressReleases;

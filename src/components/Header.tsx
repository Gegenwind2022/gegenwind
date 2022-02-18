import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid, Typography, Box } from "@mui/material";
import {
  SearchOutlined,
  PeopleOutlined,
  ShoppingBagOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

import OverlayNavigation from "./OverlayNavigation";
import logo from "../assets/logo.png";

const Header = (): JSX.Element => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const classes = useStyles();

  let title = pathname.replace("/", "");
  if (title === "") title = "Gegenwind";

  const handleMenuClick = (): void => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <OverlayNavigation visible={isVisible} handleClick={handleMenuClick} />
      <Grid container className={classes.root} alignItems="center">
        <Grid container item xs={6} lg={4} alignItems="flex-end">
          <Link to="/">
            <img className={classes.logo} src={logo} alt="logo" />
          </Link>
          <Typography variant="body1" className={classes.pathname}>
            {title}
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={0}
          lg={4}
          justifyContent="center"
          alignItems="center"
          className={classes.headerMidGrid}
        >
          <Link to="/team" className={classes.headerLink}>
            <Typography variant="body1" className={classes.pathname}>
              About us
            </Typography>
          </Link>
          <Link to="/" className={classes.headerLink}>
            <Typography variant="body1" className={classes.pathname}>
              Process
            </Typography>
          </Link>
          <Link to="/register" className={classes.headerLink}>
            <Typography variant="body1" className={classes.pathname}>
              Register
            </Typography>
          </Link>
        </Grid>
        <Grid
          container
          item
          xs={6}
          lg={4}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Link to="/" className={classes.headerLink}>
            <SearchOutlined color="primary" fontSize="large" />
          </Link>
          <Link to="/login" className={classes.headerLink}>
            <PeopleOutlined color="primary" fontSize="large" />
          </Link>
          <Link to="/shop" className={classes.headerLink}>
            <ShoppingBagOutlined color="primary" fontSize="large" />
          </Link>
          <Box onClick={handleMenuClick} className={classes.headerLink}>
            <MenuOutlined color="primary" fontSize="large" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.dark,
    borderBottom: `1px solid ${theme.palette.ebony.main}`,
    position: "fixed",
    top: 0,
    zIndex: 4999,
    height: 75,
  },
  headerMidGrid: {
    "& > a": {
      display: "flex",
      flex: 1,
    },
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  pathname: {
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  logo: {
    height: 50,
    width: 50,
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(1),
    transition: "transform 0.5s ease",

    "&:hover": {
      transform: "scale(0.9)",
    },
  },
  headerLink: {
    height: 50,
    width: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      display: "none",
      "&:last-child": {
        display: "flex",
      },
    },

    "&:hover": {
      cursor: "pointer",
    },

    "& svg, & p": {
      transition: "color 0.5s ease",
    },

    "&:hover svg, &:hover p": {
      color: theme.palette.primary.dark,
    },
  },
}));

export default Header;

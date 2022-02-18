import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { Instagram, Facebook } from "@mui/icons-material";

import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export interface OverlayNavigationProps {
  visible: boolean;
  handleClick: () => void;
}

const OverlayNavigation: React.FC<OverlayNavigationProps> = ({
  visible,
  handleClick,
}): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      xs={12}
      className={classes.root}
      sx={{ transform: !visible ? "translateX(100%)" : "translateX(0)" }}
    >
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-end"
        item
        xs={12}
      >
        <Link to="/" className={classes.link} onClick={handleClick}>
          <Typography color="secondary" fontWeight={600} variant="h5">
            Home
          </Typography>
        </Link>
        <Link to="/team" className={classes.link} onClick={handleClick}>
          <Typography color="secondary" fontWeight={600} variant="h5">
            About us
          </Typography>
        </Link>
        <Link to="/register" className={classes.link} onClick={handleClick}>
          <Typography color="secondary" fontWeight={600} variant="h5">
            Register
          </Typography>
        </Link>
        <Link to="/shop" className={classes.link} onClick={handleClick}>
          <Typography color="secondary" fontWeight={600} variant="h5">
            Shop
          </Typography>
        </Link>
      </Grid>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-end"
        item
        xs={12}
      >
        <Link to="/" className={classes.link} onClick={handleClick}>
          <Typography color="secondary" fontWeight={600} variant="h5">
            Search
          </Typography>
        </Link>
        <Link to="/" className={classes.link} onClick={handleClick}>
          <Typography color="secondary" fontWeight={600} variant="h5">
            Impressum
          </Typography>
        </Link>
        <Link to="/" className={classes.link} onClick={handleClick}>
          <Typography color="secondary" fontWeight={600} variant="h5">
            Datenschutz
          </Typography>
        </Link>
      </Grid>
      <Grid
        container
        alignItems="flex-start"
        justifyContent="center"
        item
        xs={12}
        sx={{ marginTop: 4 }}
      >
        <Link
          className={classes.social}
          to="https://www.facebook.com/gegenwindradschuh"
          target="_blank"
        >
          <Facebook fontSize="large" color="secondary" />
        </Link>
        <Link
          className={classes.social}
          to="https://www.instagram.com/individual_cycling_shoe/"
          target="_blank"
        >
          <Instagram fontSize="large" color="secondary" />
        </Link>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "calc(100vh - 75px)",
    width: "100vw",
    position: "fixed",
    zIndex: 9999,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(255,255,255,0.95)",
    transition: "transform 0.5s ease",
    overflow: "hidden",
  },
  link: {
    textTransform: "uppercase",

    "& h5": {
      transition: "color 0.5s ease",
    },

    "&:hover h5": {
      color: theme.palette.primary.main,
    },

    "&:not(:last-child)": {
      marginBottom: theme.spacing(1),
    },
  },
  social: {
    "&:not(:first-child)": {
      marginLeft: theme.spacing(2),
    },

    "& svg": {
      transition: "color 0.5s ease",
    },

    "&:hover svg": {
      color: theme.palette.primary.main,
    },
  },
}));

export default OverlayNavigation;

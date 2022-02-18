import React from "react";
import { Grid, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import shoe from "../../assets/shoe-two.jpg";
import ScrollDownArrow from "./ScrollDownArrow";

const Hero = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        item
        xs={12}
        className={classes.background}
      >
        <img src={shoe} className={classes.img} alt="shoe" />
      </Grid>
      <Grid container item xs={12} className={classes.foreground}>
        <Grid container item xs={12}>
          <Typography variant="h3" className={classes.title}>
            Against the wind means for the challenge!
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Typography className={classes.description}>
            We are Gegenwind. We develop your individual cycling shoe -
            tailor-made and sustainable - for you and all the cycling trails you
            will climb. Find out more about your shoe and the people behind the
            project here.
          </Typography>
        </Grid>
      </Grid>
      <ScrollDownArrow />
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "calc(100vh - 75px)",
    width: "100%",
    position: "relative",
  },
  "@keyframes rotateAnimation": {
    "0%": {
      transform: "rotateY(0deg)",
    },
    "25%": {
      transform: "rotateY(180deg)",
    },
    "50%": {
      transform: "rotateY(360deg)",
    },
    "75%": {
      transform: "rotateY(540deg)",
    },
    "100%": {
      transform: "rotateY(720deg)",
    },
  },
  img: {
    height: 500,
    animation: `$rotateAnimation 30s linear infinite`,

    [theme.breakpoints.down("sm")]: {
      height: 250,
    },
  },
  background: {
    perspective: 500,
    height: "100%",
    backgroundImage: `linear-gradient(${theme.palette.ivory.light},${theme.palette.ivory.main})`,
  },
  foreground: {
    zIndex: 1,
    position: "absolute",
    height: "100%",
    padding: theme.spacing(6, 4),
  },
  title: {
    color: theme.palette.secondary.main,
    width: "50%",
    textAlign: "left",
    fontWeight: theme.typography.fontWeightBold,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "center",
    },
  },
  description: {
    color: theme.palette.secondary.main,
    width: "40%",
    textAlign: "right",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  },
}));

export default Hero;

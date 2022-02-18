import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import ScrollDownArrow from "./ScrollDownArrow";
import Pulse from "./Pulse";
import anatomy from "../../assets/shoe-three.jpg";

const LabelledDiagram = (): JSX.Element => {
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
        <img src={anatomy} className={classes.img} alt="anatomy" />
      </Grid>
      <Grid
        container
        item
        xs={12}
        justifyContent="flex-end"
        alignItems="flex-end"
        className={classes.foreground}
      >
        <Box className={classes.bottomLeft}>
          <Typography variant="h5" className={classes.label}>
            Innovative closure
          </Typography>
          <Box className={classes.line} />
          <Pulse />
        </Box>
        <Box className={classes.topLeft}>
          <Typography variant="h5" className={classes.label}>
            3D-knitted inner shoe
          </Typography>
          <Box className={classes.line} />
          <Pulse />
        </Box>
        <Box className={classes.bottomRight}>
          <Pulse />
          <Box className={classes.line} />
          <Typography variant="h5" className={classes.label}>
            3D-knitted outer shell
          </Typography>
        </Box>
        <Box className={classes.topRight}>
          <Pulse />
          <Box className={classes.line} />
          <Typography variant="h5" className={classes.label}>
            Replaceable part
          </Typography>
        </Box>
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
    backgroundImage: `linear-gradient(${theme.palette.ivory.dark},${theme.palette.ivory.light})`,
  },
  img: {
    width: "auto",
    height: "100%",
    transform: "scale(1.2)",
  },
  background: {
    height: "100%",
    overflow: "hidden",

    [theme.breakpoints.down("sm")]: {
      height: "60%",
      margin: "auto 0",
    },
  },
  foreground: {
    zIndex: 1,
    position: "absolute",
    height: "100%",
    padding: theme.spacing(6, 4),

    "& > div": {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  line: {
    display: "flex",
    height: "2px",
    width: 100,
    backgroundColor: theme.palette.secondary.main,

    [theme.breakpoints.down("sm")]: {
      width: 20,
    },
  },
  label: {
    border: `2px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing(1, 2),
    borderRadius: 4,
    color: theme.palette.secondary.main,
    width: 300,
    fontWeight: theme.typography.fontWeightBold,
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      width: 100,
      fontSize: theme.typography.body2.fontSize,
      padding: theme.spacing(1),
    },
  },
  bottomLeft: {
    bottom: "13%",
    left: "10%",

    [theme.breakpoints.down("sm")]: {
      bottom: "27%",
      left: "2%",
    },
  },
  topLeft: {
    top: "16%",
    left: "27%",

    [theme.breakpoints.down("sm")]: {
      top: "30%",
      left: "32%",
    },
  },
  topRight: {
    top: "25%",
    right: "10%",

    [theme.breakpoints.down("sm")]: {
      top: "38%",
      right: "2%",
    },
  },
  bottomRight: {
    bottom: "35%",
    right: "18%",

    [theme.breakpoints.down("sm")]: {
      bottom: "42%",
      right: "10%",
    },
  },
}));

export default LabelledDiagram;

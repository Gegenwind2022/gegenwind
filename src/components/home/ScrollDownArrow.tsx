import React from "react";
import { Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

const ScrollDownArrow = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      className={classes.root}
    >
      <Typography color="primary" className={classes.text} variant="body2">
        Scroll down
      </Typography>
      <KeyboardArrowDownOutlined
        className={classes.icon}
        color="primary"
        fontSize="large"
      />
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "absolute",
    bottom: theme.spacing(1),
    zIndex: 2,
    left: "50%",
    transform: "translateX(-50%)",
  },
  text: {
    textTransform: "uppercase",
  },
  icon: {
    animation: `$bounceAnimation 2s ease infinite`,
  },
  "@keyframes bounceAnimation": {
    "0%": {
      transform: "translateY(5px)",
    },
    "25%": {
      transform: "translateY(-5px)",
    },
    "50%": {
      transform: "translateY(5px)",
    },
    "75%": {
      transform: "translateY(-5px)",
    },
    "100%": {
      transform: "translateY(5px)",
    },
  },
}));

export default ScrollDownArrow;

import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const Pulse = (): JSX.Element => {
  const classes = useStyles();
  return <Box className={classes.root} />;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "block",
    width: 30,
    height: 30,
    borderRadius: "50%",
    border: `2px ${theme.palette.primary.main} solid`,
    animation: `$pulseAnimation 2s ease infinite`,
    backgroundColor: theme.palette.primary.main,
    opacity: 0.7,
  },
  "@keyframes pulseAnimation": {
    "0%": {
      boxShadow: "0 0 0 0 rgba(255,0,0, 0.4)",
    },
    "75%": {
      boxShadow: "0 0 0 10px rgba(255,0, 0, 0)",
    },
    "100%": {
      boxShadow: "0 0 0 0 rgba(255,0, 0, 0)",
    },
  },
}));

export default Pulse;

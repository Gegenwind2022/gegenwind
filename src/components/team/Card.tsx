import React from "react";
import { Typography, Box } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import { CardDialog, CardProps } from "./CardDialog";

const Card = (props: CardProps): JSX.Element => {
  const { name, imageSrc, role } = props;
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = (): void => {
    setOpen(!open);
  };

  return (
    <Box className={classes.root} onClick={handleOpen}>
      <Typography variant="h4" color="secondary">
        {name}
      </Typography>
      <Box className={classes.avatar}>
        <img src={imageSrc} alt={name} />
        <Box className={classes.overlay}>
          <Typography>{role}</Typography>
        </Box>
      </Box>
      <CardDialog open={open} handleOpen={handleOpen} {...props} />
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  "@keyframes bounceAnimationOne": {
    "0%": {
      transform: "translateY(-5px)",
    },
    "25%": {
      transform: "translateY(5px)",
    },
    "50%": {
      transform: "translateY(-5px)",
    },
    "75%": {
      transform: "translateY(5px)",
    },
    "100%": {
      transform: "translateY(-5px)",
    },
  },
  "@keyframes bounceAnimationTwo": {
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
  root: {
    animation: `$bounceAnimationOne 4s ease infinite`,
    margin: theme.spacing(3),
    transition: "transform 0.5s ease",

    "&:nth-child(2n)": {
      animation: `$bounceAnimationTwo 4s ease infinite`,
    },

    "&:hover": {
      animation: "none",
      cursor: "pointer",
      transform: "scale(1.2)",
    },

    "& h4": {
      textAlign: "center",
      marginBottom: theme.spacing(1),
    },
  },
  avatar: {
    position: "relative",
    height: "250px",

    "& img": {
      height: "100%",
    },
  },
  overlay: {
    height: "100%",
    width: "100%",
    zIndex: 1,
    position: "absolute",
    top: 0,
    right: 0,
    transition: "all 0.5s ease",
    opacity: 0,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",

    "& p": {
      color: theme.palette.ivory.main,
      textAlign: "center",
      textTransform: "uppercase",
      margin: theme.spacing(1),
    },
    "&:hover": {
      opacity: 1,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  },
}));

export default Card;

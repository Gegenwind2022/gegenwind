/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import { Grid, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { VolumeMuteOutlined, VolumeOffOutlined } from "@mui/icons-material";

import ScrollDownArrow from "./ScrollDownArrow";
import video from "../../assets/video.mp4";

const BackgroundVideo = (): JSX.Element => {
  const [isMuted, setIsMuted] = React.useState(true);
  const classes = useStyles();

  const handleMute = (): void => {
    setIsMuted(!isMuted);
  };

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
        <video
          src={video}
          playsInline
          autoPlay
          muted={isMuted}
          loop
          className={classes.video}
        />
      </Grid>
      <Grid container item xs={12} className={classes.foreground}>
        <Grid
          container
          item
          xs={12}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Typography className={classes.description}>
            Enough storytelling! You want a shoe? All you need is our free app
            and a camera-enabled smartphone. With the help of your camera and a
            short tutorial, you scan your feet. Afterwards, you can personalize
            the structure and color of your shoe. Our developed software
            automatically adjusts your shoe to your foot and is then checked
            again by our developers for all measurements. This way you can be
            sure that your shoe fits!
          </Typography>
          {!isMuted ? (
            <VolumeMuteOutlined
              color="primary"
              fontSize="large"
              onClick={handleMute}
              className={classes.mute}
            />
          ) : (
            <VolumeOffOutlined
              color="primary"
              fontSize="large"
              onClick={handleMute}
              className={classes.mute}
            />
          )}
        </Grid>
        <Grid
          container
          item
          xs={12}
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Typography variant="h3" className={classes.title}>
            First 3D printed cycling shoe
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
  video: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  background: {
    position: "absolute",
    height: "100%",
    backgroundColor: theme.palette.secondary.dark,
  },
  foreground: {
    zIndex: 1,
    height: "100%",
    padding: theme.spacing(6, 4),
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    color: theme.palette.ivory.main,
    width: "40%",
    textAlign: "right",
    fontWeight: theme.typography.fontWeightBold,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  },
  description: {
    color: theme.palette.ivory.main,
    width: "40%",

    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
  mute: {
    transition: "color 0.5s ease",

    "&:hover": {
      cursor: "pointer",
      color: theme.palette.primary.dark,
    },
  },
}));

export default BackgroundVideo;

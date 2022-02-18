import * as React from "react";
import {
  Grid,
  Typography,
  Box,
  LinearProgress,
  LinearProgressProps,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const LinearProgressWithLabel = (
  props: LinearProgressProps & { value: number }
) => {
  const { value } = props;
  return (
    <Grid
      container
      item
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
    >
      <Box sx={{ width: "40%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box>
        <Typography variant="h6" fontWeight={700} color="secondary.main">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Grid>
  );
};

const LinearWithValueLabel = (): JSX.Element => {
  const [progress, setProgress] = React.useState(10);
  const classes = useStyles();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) return prevProgress + 10;
        return 100;
      });
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Grid
      container
      xs={12}
      className={classes.root}
      sx={{
        transform: progress === 100 ? "translateX(-100%)" : "translateX(0)",
      }}
    >
      <LinearProgressWithLabel value={progress} />
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    width: "100vw",
    position: "fixed",
    zIndex: 14999,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(255,255,255,1)",
    transition: "transform 0.5s ease",
    overflow: "hidden",
  },
}));

export default LinearWithValueLabel;

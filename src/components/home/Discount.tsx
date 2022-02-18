import React from "react";
import {
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const Discount = (): JSX.Element => {
  const classes = useStyles();
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleOnClick = (): void => {
    setIsSubmitted(!isSubmitted);
  };

  return (
    <Grid container className={classes.root}>
      <Grid container direction="column" item xs={12} alignItems="center">
        <Typography
          variant="h4"
          className={classes.text}
          sx={{ fontWeight: "600" }}
        >
          10% discount on the first order
        </Typography>
        <Typography variant="h6" className={classes.text}>
          sign up to receive the latest news and exclusive offers
        </Typography>
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        <Box
          className={classes.form}
          component="form"
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="email"
            label="Email address"
            color="secondary"
            type="email"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" onClick={handleOnClick}>
            Sign up
          </Button>
        </Box>
      </Grid>
      {isSubmitted && (
        <Alert
          onClose={handleOnClick}
          severity="success"
          variant="filled"
          color="info"
          className={classes.alert}
        >
          <AlertTitle sx={{ fontWeight: 700 }}>Success</AlertTitle>
          Congrats! Your email has been subscribed successfully.
        </Alert>
      )}
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.ivory.light,
    padding: theme.spacing(4),
    borderTop: `2px solid ${theme.palette.secondary.main}`,
  },
  text: {
    color: theme.palette.secondary.main,
    textTransform: "uppercase",
    maxWidth: "50%",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  form: {
    marginTop: theme.spacing(3),
    width: "30%",
    display: "flex",
    flexDirection: "column",

    "& > div": {
      marginBottom: theme.spacing(1),
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  alert: {
    backgroundColor: theme.palette.secondary.main,
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    zIndex: 9999,
  },
}));

export default Discount;

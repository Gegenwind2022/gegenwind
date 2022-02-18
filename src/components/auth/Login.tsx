import React from "react";
import { Grid, Button, TextField, Box, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const Login = (): JSX.Element => {
  const classes = useStyles();

  const handleOnClick = (): void => {};

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      className={classes.root}
    >
      <Grid container item justifyContent="center" xs={12} alignItems="center">
        <Typography color="secondary" variant="h3" className={classes.title}>
          Already registered? Please log in!
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
            label="Email"
            color="secondary"
            type="email"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="password"
            type="password"
            label="Password"
            color="secondary"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            sx={{ width: "100%" }}
            onClick={handleOnClick}
            variant="contained"
          >
            Log in
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "calc(100vh - 75px)",
    width: "100%",
    backgroundColor: theme.palette.ivory.main,
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "uppercase",
    marginBottom: theme.spacing(4),
    textAlign: "center",
    width: "60%",
  },
  form: {
    width: "50%",

    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },

    "& > div": {
      width: "100%",
      marginBottom: theme.spacing(3),
    },
  },
}));

export default Login;

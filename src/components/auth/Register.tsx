import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Button,
  MenuItem,
  TextField,
  Box,
  Typography,
  Alert,
  AlertTitle,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export interface Country {
  value: "germany" | "england" | "italy" | "france";
  label: string;
}

export interface Gender {
  value: "male" | "female";
  label: string;
}

const countries: Country[] = [
  {
    value: "germany",
    label: "Germany",
  },
  {
    value: "france",
    label: "France",
  },
  {
    value: "italy",
    label: "Italy",
  },
  {
    value: "england",
    label: "England",
  },
];

const genders: Gender[] = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];

const Register = (): JSX.Element => {
  const navigate = useNavigate();
  const [country, setCountry] = React.useState("germany");
  const [gender, setGender] = React.useState("male");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const classes = useStyles();

  const handleCountryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCountry(event.target.value);
  };

  const handleGenderChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setGender(event.target.value);
  };

  const handleOnClick = (): void => {
    setIsSubmitted(!isSubmitted);
    setTimeout(() => navigate(`/login`), 5000);
  };

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
          Create an account
        </Typography>
      </Grid>
      <Grid container item xs={12}>
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
            helperText="Choose a password with more than 6 characters"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="first-name"
            label="First name"
            color="secondary"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="last-name"
            label="Last name"
            color="secondary"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="gender"
            select
            label="Gender"
            value={gender}
            color="secondary"
            onChange={handleGenderChange}
          >
            {genders.map((option: Gender) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            id="city"
            label="City"
            color="secondary"
            defaultValue="Saarbrucken"
          />
          <TextField
            required
            id="address"
            label="Street, House number"
            color="secondary"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="postal-code"
            label="Postal code"
            type="number"
            color="secondary"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="country"
            required
            select
            color="secondary"
            label="Country"
            value={country}
            onChange={handleCountryChange}
          >
            {countries.map((option: Country) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            id="phone"
            label="Phone"
            type="number"
            color="secondary"
            defaultValue={49}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            className={classes.button}
            onClick={handleOnClick}
            variant="contained"
          >
            Register
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
          Congrats! Your account has been created successfully.
        </Alert>
      )}
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "calc(100vh - 75px)",
    width: "100%",
    backgroundColor: theme.palette.ivory.main,
    padding: theme.spacing(4, 8),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "uppercase",
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  form: {
    "& > div": {
      width: "49%",
      marginBottom: theme.spacing(3),

      [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginRight: 0,
      },

      "&:nth-child(2n+1)": {
        marginRight: "2%",
      },
    },
  },
  button: {
    width: "49%",
  },
  alert: {
    backgroundColor: theme.palette.secondary.main,
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    zIndex: 9999,
  },
}));

export default Register;

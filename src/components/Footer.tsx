import React from "react";
import {
  Typography,
  Grid,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { Instagram, Facebook } from "@mui/icons-material";

const rowOneLinks = [
  "uber uns",
  "meterial",
  "nachhaltigkeit",
  "wir unterstutzen",
  "karriere",
  "freunde werben freunde",
  "kundenbewertungen",
];
const rowTwoLinks = ["kontakt", "faq", "versand", "rucksendungen"];
const rowThreeLinks = [
  "widerrufsbelehrung",
  "agb",
  "datenschutz",
  "informationspflicht",
  "impressum",
  "rechtliche bedingungen",
];

const NavLinks = ({ links = [] }: { links: string[] }): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container item xs={12} sm={3} className={classes.navLinks}>
      <nav>
        <List>
          {links.map((link, index) => (
            <ListItem key={index.toString()} disablePadding>
              <ListItemButton
                component="a"
                href="/"
                className={classes.navLink}
              >
                <ListItemText primary={link} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Grid>
  );
};

const Footer = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid
        container
        item
        xs={12}
        sm={3}
        direction="column"
        justifyContent="center"
      >
        <Typography variant="h5" className={classes.text}>
          Follow us
        </Typography>
        <Box
          sx={{
            display: "flex",
            mt: 1,
            justifyContent: {
              xs: "center",
              sm: "flex-start",
            },
          }}
        >
          <Link
            className={classes.socialLink}
            to="https://www.facebook.com/gegenwindradschuh"
            target="_blank"
          >
            <Facebook fontSize="large" color="secondary" />
          </Link>
          <Link
            className={classes.socialLink}
            to="https://www.instagram.com/individual_cycling_shoe/"
            target="_blank"
          >
            <Instagram fontSize="large" color="secondary" />
          </Link>
        </Box>
      </Grid>
      <NavLinks links={rowOneLinks} />
      <NavLinks links={rowTwoLinks} />
      <NavLinks links={rowThreeLinks} />

      <Grid
        container
        item
        xs={12}
        className={classes.copyright}
        justifyContent="center"
      >
        <Typography className={classes.text}>
          Copyright © 2021 Gegenwind. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    borderTop: `1px solid ${theme.palette.ebony.main}`,
  },
  text: {
    color: theme.palette.secondary.main,
    textTransform: "uppercase",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  socialLink: {
    "&:not(:last-child)": {
      marginRight: theme.spacing(2),
    },

    "& svg": {
      transition: "color 0.5s ease",
    },

    "&:hover svg": {
      color: theme.palette.secondary.dark,
    },
  },
  navLinks: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  navLink: {
    padding: 0,

    [theme.breakpoints.down("sm")]: {
      "& span": {
        textAlign: "center",
      },
    },

    "& span": {
      color: theme.palette.secondary.main,
      textTransform: "uppercase",
    },
  },
  copyright: {
    paddingTop: theme.spacing(4),
    marginTop: theme.spacing(3),
    borderTop: `2px solid ${theme.palette.secondary.main}`,
  },
}));

export default Footer;

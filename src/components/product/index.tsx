import React from "react";
import {
  Grid,
  Typography,
  Button,
  Alert,
  AlertTitle,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Circle } from "@mui/icons-material";

import product1 from "../../assets/shoe-one.jpg";
import product2 from "../../assets/shoe-two.jpg";
import product3 from "../../assets/shoe-four.jpg";
import product4 from "../../assets/shoe-five.jpg";

const products = [product1, product4, product3, product2];
const features = [
  "Free withdrawl",
  "Free delivery",
  "Customizable inner skin",
  "Recyclable",
];

const Product = (): JSX.Element => {
  const classes = useStyles();
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleOnClick = (): void => {
    setIsSubmitted(!isSubmitted);
  };

  return (
    <Grid container className={classes.root}>
      <Grid container item xs={12} md={7}>
        {products.map((product, index) => (
          <img
            className={classes.product}
            alt={`product${index.toString()}`}
            key={index.toString()}
            src={product}
          />
        ))}
      </Grid>
      <Grid container item xs={12} md={5} direction="column">
        <Typography variant="h3" className={classes.text}>
          Product X
        </Typography>
        <Typography variant="h6">Fits perfectly on your foot!</Typography>
        <Typography variant="h6" className={classes.text} sx={{ mt: 2 }}>
          € XXX.00
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, mt: 2 }}>
          The high-performance 3D shoe is back. The new model continues to bring
          bounce to your stride by retaining the same responsive foam as the
          previous models. The breathable mesh upper gives you the comfort and
          durability you need, with a wider fit through the toe.
        </Typography>
        <List className={classes.list}>
          {features.map((feature, index) => (
            <ListItem key={index.toString()}>
              <Circle color="secondary" sx={{ mr: 2, height: 10, width: 10 }} />
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
        <Button
          onClick={handleOnClick}
          sx={{ width: "100%" }}
          variant="contained"
        >
          Add to cart
        </Button>
        {isSubmitted && (
          <Alert
            onClose={handleOnClick}
            severity="success"
            variant="filled"
            color="info"
            className={classes.alert}
          >
            <AlertTitle sx={{ fontWeight: 700 }}>Success</AlertTitle>
            Congrats! Your product has been added to cart successfully.
          </Alert>
        )}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.ivory.main,
    padding: theme.spacing(4),
    minHeight: "calc(100vh - 75px)",
  },
  text: {
    color: theme.palette.secondary.main,
  },
  product: {
    width: "48%",
    border: `1px solid ${theme.palette.ivory.dark}`,
    borderRadius: 5,
    marginBottom: "2%",

    "&:nth-child(2n+1)": {
      marginRight: "2%",
    },
  },

  list: {
    padding: 0,
    marginBottom: theme.spacing(2),
    "& li": {
      padding: 0,
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

export default Product;

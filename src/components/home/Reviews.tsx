import React from "react";
import { Grid, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import avatarMale from "../../assets/avatar-male.png";
import avatarFemale from "../../assets/avatar-female.png";
import shoeTwo from "../../assets/shoe-two.jpg";
import shoeFour from "../../assets/shoe-four.jpg";
import shoeFive from "../../assets/shoe-five.jpg";

import ReviewItem, { ReviewItemProps } from "./ReviewItem";

const reviewData: ReviewItemProps[] = [
  {
    avatarUrl: avatarMale,
    username: "Max M.",
    productUrl: shoeTwo,
    age: 37,
    stars: [1, 1, 1, 1, 0],
    timestamp: "5m",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum nibh eget magna viverra, ac cursus lectus pharetra. Morbi congue mi lectus. Aliquam sodales at ante eget vulputate. Vestibulum at enim id odio vehicula hendrerit sollicitudin vehicula ligula.",
    id: 0,
  },
  {
    avatarUrl: avatarFemale,
    username: "Laura T.",
    age: 26,
    productUrl: shoeFour,
    stars: [1, 1, 0, 0, 0],
    timestamp: "1h",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum nibh eget magna viverra, ac cursus lectus pharetra. Morbi congue mi lectus. Aliquam sodales at ante eget vulputate.",
    id: 1,
  },
  {
    avatarUrl: avatarMale,
    username: "Chris L.",
    productUrl: shoeFive,
    age: 19,
    stars: [1, 1, 1, 1, 1],
    timestamp: "3d",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum nibh eget magna viverra, ac cursus lectus pharetra. Morbi congue mi lectus. Aliquam sodales at ante eget vulputate. Vestibulum at enim id odio vehicula hendrerit sollicitudin vehicula ligula.",
    id: 2,
  },
];

const Reviews = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid container alignItems="center" justifyContent="center" item xs={12}>
        <Typography color="secondary" variant="h3" className={classes.title}>
          Reviews
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        {reviewData.map((review) => (
          <ReviewItem key={review.id} {...review} />
        ))}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(6, 4),
    backgroundColor: theme.palette.ivory.light,
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "uppercase",
    marginBottom: theme.spacing(6),
  },
}));

export default Reviews;

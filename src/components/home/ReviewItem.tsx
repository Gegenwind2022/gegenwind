import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { StarBorderOutlined, StarOutlined } from "@mui/icons-material";

export interface ReviewItemProps {
  avatarUrl: string;
  username: string;
  productUrl: string;
  stars: number[];
  timestamp: string;
  description: string;
  id: number;
  age: number;
}

const ReviewItem: React.FC<ReviewItemProps> = (props) => {
  const classes = useStyles();
  const {
    avatarUrl,
    id,
    username,
    productUrl,
    stars,
    timestamp,
    description,
    age,
  } = props;
  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="space-between"
      className={classes.root}
    >
      <Grid
        item
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        md={2}
        xs={6}
      >
        <img
          src={avatarUrl}
          alt={`avatar-${id}`}
          className={classes.avatarImg}
        />
        <Typography
          color="secondary"
          className={classes.avatarText}
          variant="h5"
        >
          {username}, {age}
        </Typography>
      </Grid>
      <Grid
        item
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        md={2}
        xs={6}
      >
        <img
          src={productUrl}
          alt={`product-${id}`}
          className={classes.productImg}
        />
        <Typography
          color="secondary"
          className={classes.productText}
          variant="body2"
        >
          I recommend this product
        </Typography>
      </Grid>
      <Grid item md={8} xs={12}>
        <Box className={classes.descriptionHeader}>
          <Box className={classes.stars}>
            {stars.map((star, index) =>
              star ? (
                <StarOutlined
                  key={index.toString()}
                  fontSize="large"
                  color="primary"
                />
              ) : (
                <StarBorderOutlined
                  key={index.toString()}
                  color="primary"
                  fontSize="large"
                />
              )
            )}
          </Box>
          <Typography
            variant="body2"
            color="secondary"
            className={classes.timestamp}
          >
            {timestamp} ago
          </Typography>
        </Box>
        <Typography className={classes.description} variant="body2">
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "&:not(:last-child)": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
      marginBottom: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  avatarImg: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  avatarText: {
    textTransform: "uppercase",
    marginTop: theme.spacing(1),
  },
  productImg: {
    height: 80,
    width: 80,
  },
  descriptionHeader: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
  stars: {
    display: "flex",
    alignItems: "center",
  },
  productText: { textAlign: "center", marginTop: theme.spacing(1) },
  timestamp: {},
  description: {},
}));

export default ReviewItem;

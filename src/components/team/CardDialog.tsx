import React from "react";
import {
  Dialog,
  Box,
  DialogContent,
  Typography,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export interface CardProps {
  name: string;
  imageSrc: string;
  role: string;
  description: string;
}

export interface CardDialogProps extends CardProps {
  open: boolean;
  handleOpen: () => void;
}

export const CardDialog: React.FC<CardDialogProps> = (props): JSX.Element => {
  const { open, handleOpen, name, imageSrc, description } = props;
  const classes = useStyles();

  return (
    <Dialog
      sx={{ zIndex: 9999 }}
      onClose={handleOpen}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <Box className={classes.title}>
        <IconButton aria-label="close" onClick={handleOpen}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent className={classes.content}>
        <Typography className={classes.text} variant="h4" color="secondary">
          {name}
        </Typography>
        <img src={imageSrc} className={classes.avatar} alt={name} />
        <Typography className={classes.text}>{description}</Typography>
      </DialogContent>
    </Dialog>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.ivory.light,
    display: "flex",
    justifyContent: "flex-end",
  },
  content: {
    backgroundColor: theme.palette.ivory.light,
    padding: theme.spacing(4),
    paddingTop: 0,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  avatar: {
    width: "30%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  text: {
    textAlign: "center",
    color: theme.palette.secondary.main,
  },
}));

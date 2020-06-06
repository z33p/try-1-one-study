import React, { useState } from "react";
import { makeStyles, Paper, Box, Typography, Grid } from "@material-ui/core";
import { Card } from "../../redux/actions/flashCards/types";

const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent",
    width: 300 + "px",
    height: 200 + "px",
    perspective: "1000px",
  },
  paper: {
    display: "flex",
    position: "relative",
    width: 100 + "%",
    height: 100 + "%",
    transition: "transform 0.5s",
    transformStyle: "preserve-3d",
  },

  flipped: {
    transform: "rotateY(180deg)",
  },

  /* Position the front and back side */
  face: {
    position: "absolute",
    width: 100 + "%",
    height: 100 + "%",
    WebkitBackfaceVisibility: "hidden" /* Safari */,
    backfaceVisibility: "hidden",
  },

  back: {
    transform: "rotateY(180deg)",
  },
});

interface Props {
  card: Card;
}

const FlipCard: React.FC<Props> = ({ card }) => {
  const classes = useStyles();

  const [flipped, setFlipped] = useState(false);

  return (
    <div className={classes.root}>
      <Paper
        elevation={2}
        className={`${classes.paper} ${flipped ? classes.flipped : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <Box p={5} className={classes.face}>
          <Grid container direction="column" alignItems="center">
            <Typography variant="h5">{card.front}</Typography>
          </Grid>
        </Box>
        <Box p={5} className={`${classes.face} ${classes.back}`}>
          <Grid container direction="column" alignItems="center">
            <Typography variant="h5">{card.back}</Typography>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
};

export default FlipCard;

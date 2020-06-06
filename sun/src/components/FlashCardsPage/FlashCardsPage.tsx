import React from "react";
import { Grid, makeStyles, Button, Typography } from "@material-ui/core";
import { blue, green, red } from "@material-ui/core/colors";
import FlipCard from "./FlipCard";
import { Card, Deck } from "../../redux/actions/flashCards/types";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: "0",
    display: "flex",
    alignItems: "stretch",
    width: 100 + "%",
  },
  buttons: {
    flex: 1,
    borderRadius: 0,
    color: "white",
  },
});

const FlashCardsPage: React.FC = () => {
  const classes = useStyles();

  const card: Card = {
    front: "Knock knock!",
    back: "Who's there?",
  };

  const deck: Deck = {
    title: "Good Jokes",
    cards: [card],
  };

  return (
    <Grid container>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        spacing={2}
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4">Deck: {deck.title}</Typography>
        </Grid>
        <Grid item>
          <FlipCard card={card} />
        </Grid>
      </Grid>

      <div className={classes.root}>
        <Button className={classes.buttons} style={{ background: red[500] }}>
          1 min
        </Button>
        <Button className={classes.buttons} style={{ background: green[500] }}>
          10 min
        </Button>
        <Button className={classes.buttons} style={{ background: blue[500] }}>
          3 dias
        </Button>
      </div>
    </Grid>
  );
};

export default FlashCardsPage;

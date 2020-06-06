import { Switch, Route } from "react-router-dom";

import React from "react";
import VirtualPapersPage from "./VirtualPapersPage";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "./LoginPage/LoginPage";
import { Grid } from "@material-ui/core";
import FlashCardsPage from "./FlashCardsPage/FlashCardsPage";

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Grid container style={{ height: 90 + "vh" }}>
        <PrivateRoute exact path="/" component={FlashCardsPage} />
        <PrivateRoute
          exact
          path="/virtualPapers"
          component={VirtualPapersPage}
        />
        <Route path="/login" component={LoginPage} />
      </Grid>
    </Switch>
  );
};

export default MainRoutes;

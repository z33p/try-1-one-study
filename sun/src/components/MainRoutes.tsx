import { Switch, Route } from "react-router-dom";

import React from "react";
import VirtualPapersPage from "./VirtualPapersPage";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "./LoginPage";

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={VirtualPapersPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
};

export default MainRoutes;

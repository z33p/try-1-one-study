import React from "react";
import { Switch } from "react-router-dom";
import VirtualPapers from "./Apps/VirtualPapers/VirtualPapers";
import FlashCards from "./Apps/FlashCards/index";
import TaskBoard from "./Apps/TaskBoard";
import PrivateRoute from "./common/PrivateRoute.js";
import AppRoute from "./AppRoute";
import LoadNotebook from "./Apps/VirtualPapers/Notebooks/LoadNotebook";

interface IWorkStationProps {}

const WorkStation: React.FC<IWorkStationProps> = () => {
  return (
    <div>
      <h3>WorkStation Component</h3>

      <Switch>
        <PrivateRoute
          exact
          path={AppRoute.WorkStation.TASKBOARD}
          component={TaskBoard}
        />
        <PrivateRoute
          exact
          path={AppRoute.WorkStation.FLASHCARDS}
          component={FlashCards}
        />
        <PrivateRoute
          exact
          path={AppRoute.WorkStation.VIRTUAL_PAPERS}
          component={VirtualPapers}
        />
        <PrivateRoute
          path={AppRoute.WorkStation.EDIT_VIRTUAL_PAPER}
          component={LoadNotebook}
        />
      </Switch>
    </div>
  );
};

export default WorkStation;

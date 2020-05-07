import React from "react";
import { Switch } from "react-router-dom";
import VirtualPapers from "./Apps/VirtualPapers/index";
import FlashCards from "./Apps/FlashCards/index";
import TaskBoard from "./Apps/TaskBoard";
import PrivateRoute from "./common/PrivateRoute.js";
import EditVirtualPaper from "./Apps/VirtualPapers/ListVirtualPapers";

export enum WorkStationRoute {
  TASKBOARD = "/home/taskboard/",
  FLASHCARDS = "/home/flashcards/",
  VIRTUAL_PAPERS = "/home/virtual_papers/",
  EDIT_VIRTUAL_PAPER = "/home/virtual_papers/:notebook_id?",
}

interface IWorkStationProps {}

const WorkStation: React.FC<IWorkStationProps> = () => {
  return (
    <div>
      <h3>WorkStation Component</h3>

      <Switch>
        <PrivateRoute
          exact
          path={WorkStationRoute.TASKBOARD}
          component={TaskBoard}
        />
        <PrivateRoute
          exact
          path={WorkStationRoute.FLASHCARDS}
          component={FlashCards}
        />
        <PrivateRoute
          exact
          path={WorkStationRoute.VIRTUAL_PAPERS}
          component={VirtualPapers}
        />
        <PrivateRoute
          path={WorkStationRoute.EDIT_VIRTUAL_PAPER}
          component={EditVirtualPaper}
        />
      </Switch>
    </div>
  );
};

export default WorkStation;

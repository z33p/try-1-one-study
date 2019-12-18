import React from "react";
import { Switch } from "react-router-dom";
import VirtualDocs from "./Apps/VirtualDocs/index";
import FlashCards from "./Apps/FlashCards";
import TaskBoard from "./Apps/TaskBoard";
import PrivateRoute from "./common/PrivateRoute.js";

interface IWorkStationProps {}

const WorkStation: React.FC<IWorkStationProps> = () => {
  return (
    <div>
      <h3>WorkStation Component</h3>

      <Switch>
        {/* <Route exact path="/home" component={Home} /> */}
        <PrivateRoute exact path="/home/taskboard" component={TaskBoard} />
        <PrivateRoute exact path="/home/flashcards" component={FlashCards} />
        <PrivateRoute exact path="/home/virtual_docs" component={VirtualDocs} />
      </Switch>
    </div>
  );
};

export default WorkStation;

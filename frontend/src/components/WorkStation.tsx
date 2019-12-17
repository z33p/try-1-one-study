import React from "react";
import { Route, Switch } from "react-router-dom";
import VirtualDocs from "./Apps/VirtualDocs";
import FlashCards from "./Apps/FlashCards";
import TaskBoard from "./Apps/TaskBoard";

interface IWorkStationProps {}

const WorkStation: React.FC<IWorkStationProps> = () => {
  return (
    <div>
      <h3>WorkStation Component</h3>

      <Switch>
        {/* <Route exact path="/home" component={Home} /> */}
        <Route exact path="/home/taskboard" component={TaskBoard} />
        <Route exact path="/home/flashcards" component={FlashCards} />
        <Route exact path="/home/virtual_docs" component={VirtualDocs} />
      </Switch>
    </div>
  );
};

export default WorkStation;

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.jsx";
import VirtualDoc from "./Apps/VirtualDoc/index.jsx";
import FlashCard from "./Apps/FlashCard/index.jsx";
import TaskBoard from "./Apps/TaskBoard/index.jsx";

class Main extends Component {
  // state = {  }
  render() {
    return (
      <main className="bg-gray-200" style={{ flex: 28 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/virtual_doc" component={VirtualDoc} />
          <Route exact path="/flash_card" component={FlashCard} />
          <Route exact path="/task_board" component={TaskBoard} />
        </Switch>
      </main>
    );
  }
}

export default Main;

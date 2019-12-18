import React from "react";
import Menu from "./Menu";
import WorkStation from "./WorkStation";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";

const Main: React.FC = () => {
  return (
    <main>
      <h2>Main Component</h2>
      <div className="h-screen flex">
        <div className="w-1/5 border-2 border-gray-200">
          <Menu />
        </div>
        <div className="w-4/5">
          <Switch>
            <Route path="/home" component={WorkStation} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    </main>
  );
};

export default Main;

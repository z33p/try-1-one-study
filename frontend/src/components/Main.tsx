import React, { useState } from "react";
import Menu from "./Menu";
import WorkStation from "./WorkStation";
import { Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Login from "./Login";

export enum AppRoute {
  HOME = "/home",
  LOGIN = "/login",
  VIRTUAL_PAPERS = "/home/virtual_papers",
  FLASHCARDS = "/home/flashcards",
  TASKBOARD = "/home/taskboard",
}

const Main: React.FC = () => {
  const icons = {
    bars: <FontAwesomeIcon icon={faBars} />,
  };

  const maximized = {
    minimized: false,
    menu_width: "w-1/5",
    workStation_width: "w-4/5",
  };

  const minimized = {
    minimized: true,
    menu_width: "w-auto px-2",
    workStation_width: "w-full",
  };

  const [menuConfig, setMenuConfig] = useState(maximized);

  return (
    <main>
      <h2>Main Component</h2>
      <div className="h-screen flex">
        <div className={`${menuConfig.menu_width} border-2 border-gray-200`}>
          <button
            onClick={() => {
              menuConfig.minimized
                ? setMenuConfig(maximized)
                : setMenuConfig(minimized);
            }}
          >
            {icons.bars}
          </button>
          <Menu minimized={menuConfig.minimized} />
        </div>
        <div className={`${menuConfig.workStation_width} p-6`}>
          <Switch>
            <Route path={AppRoute.HOME} component={WorkStation} />
            <Route exact path={AppRoute.LOGIN} component={Login} />
          </Switch>
        </div>
      </div>
    </main>
  );
};

export default Main;

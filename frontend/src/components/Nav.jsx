import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFolder,
  faLayerGroup,
  faTasks
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Menu from "./Menu/index.jsx";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_menu: false,
      app: "Home"
    };
  }

  render() {
    const { display_menu, app } = this.state;

    let spacing = this.state.display_menu ? 9 : 1;

    return (
      <nav
        className="flex bg-gray-400"
        style={{ height: 100 + "vh", flex: spacing }}
        onMouseOver={() => this.setState({ display_menu: true })}
        onMouseLeave={() => this.setState({ display_menu: false, app: "Home" })}
      >
        <nav className="px-2 border-r-2">
          <div className="text-2xl">
            <div className="py-2">
              <Link to="/">
                <FontAwesomeIcon title="Home Page" icon={faHome} />
              </Link>
            </div>
            <Link to="/virtual_doc">
              <FontAwesomeIcon
                className="block mb-4 cursor-pointer"
                title="Virtual Document"
                icon={faFolder}
                onMouseOver={() => this.setState({ app: "virtual_doc" })}
              />
            </Link>
            <Link to="/flash_card">
              <FontAwesomeIcon
                className="block mb-4 cursor-pointer"
                title="Flash Cards"
                icon={faLayerGroup}
                onMouseOver={() => this.setState({ app: "flash_card" })}
              />
            </Link>
            <Link to="/task_board">
              <FontAwesomeIcon
                className="block cursor-pointer"
                title="Task Board"
                icon={faTasks}
                onMouseOver={() => this.setState({ app: "task_board" })}
              />
            </Link>
          </div>
        </nav>
        {!display_menu ? null : (
          <div className="w-full text-center">
            <Menu app={app} />
          </div>
        )}
      </nav>
    );
  }
}

export default Nav;

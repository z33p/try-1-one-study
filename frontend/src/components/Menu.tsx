import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFolder,
  faLayerGroup,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AppRoute } from "./Main";

interface IMenuProps {
  minimized: boolean;
}

const Menu: React.FC<IMenuProps> = ({ minimized }) => {
  const icons = {
    home: <FontAwesomeIcon icon={faHome} />,
    folder: <FontAwesomeIcon icon={faFolder} />,
    stack: <FontAwesomeIcon icon={faLayerGroup} />,
    board: <FontAwesomeIcon icon={faClipboardList} />,
  };

  if (minimized)
    return (
      <menu className="text-center">
        <nav className="text-xl">
          <Link
            to={AppRoute.HOME}
            className="block py-2 hover:bg-gray-200 cursor-pointer"
          >
            <i title="Inicio">{icons.home}</i>
          </Link>
          <Link
            to={AppRoute.VIRTUAL_PAPERS}
            className="block py-2 hover:bg-gray-200 cursor-pointer"
          >
            <i title="Documentos">{icons.folder}</i>
          </Link>
          <Link
            to={AppRoute.FLASHCARDS}
            className="block py-2 hover:bg-gray-200 cursor-pointer"
          >
            <i title="FlashCards">{icons.stack}</i>
          </Link>
          <Link
            to={AppRoute.TASKBOARD}
            className="block py-2 hover:bg-gray-200 cursor-pointer"
          >
            <i title="TaskBoard">{icons.board}</i>
          </Link>
        </nav>
      </menu>
    );

  return (
    <menu className="text-center">
      <h3 className="inline">Nav Component</h3>
      <nav className="text-xl">
        <Link
          to={AppRoute.HOME}
          className="block py-2 hover:bg-gray-200 cursor-pointer"
        >
          Inicio
        </Link>
        <Link
          to={AppRoute.VIRTUAL_PAPERS}
          className="block py-2 hover:bg-gray-200 cursor-pointer"
        >
          Documentos
        </Link>
        <Link
          to={AppRoute.FLASHCARDS}
          className="block py-2 hover:bg-gray-200 cursor-pointer"
        >
          FlashCards
        </Link>
        <Link
          to={AppRoute.TASKBOARD}
          className="block py-2 hover:bg-gray-200 cursor-pointer"
        >
          TaskBoard
        </Link>
      </nav>
    </menu>
  );
};

export default Menu;

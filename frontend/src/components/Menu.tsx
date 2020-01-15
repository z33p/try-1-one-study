import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFolder, faLayerGroup, faClipboardList } from "@fortawesome/free-solid-svg-icons"

interface IMenuProps {
  minimized: boolean
}

const Menu: React.FC<IMenuProps> = ({ minimized }) => {
  const icons = {
    home: <FontAwesomeIcon icon={faHome} />,
    folder: <FontAwesomeIcon icon={faFolder} />,
    stack: <FontAwesomeIcon icon={faLayerGroup} />,
    board: <FontAwesomeIcon icon={faClipboardList} />,
  }

  if (minimized) return (
    <menu className="text-center">
      <nav className="text-xl">
        <Link
          to="/home"
          className="block pt-2 hover:bg-gray-200 cursor-pointer"
        >
          <i title="Inicio">{icons.home}</i>
        </Link>
        <Link
          to="/home/virtual_docs"
          className="block pt-2 hover:bg-gray-200 cursor-pointer"
        >
          <i title="Documentos">{icons.folder}</i>
        </Link>
        <Link
          to="/home/flashcards"
          className="block pt-2 hover:bg-gray-200 cursor-pointer"
        >
          <i title="FlashCards">{icons.stack}</i>
        </Link>
        <Link
          to="/home/taskboard"
          className="block pt-2 hover:bg-gray-200 cursor-pointer"
        >
          <i title="TaskBoard">{icons.board}</i>
        </Link>
      </nav>
    </menu>
  );;

  return (
    <menu className="text-center">
      <h3 className="inline">Nav Component</h3>
      <nav className="text-xl">
        <Link
          to="/home"
          className="block pt-2 hover:bg-gray-200 cursor-pointer"
        >
          Inicio
        </Link>
        <Link
          to="/home/virtual_docs"
          className="block pt-2 hover:bg-gray-200 cursor-pointer"
        >
          Documentos
        </Link>
        <Link
          to="/home/flashcards"
          className="block pt-2 hover:bg-gray-200 cursor-pointer"
        >
          FlashCards
        </Link>
        <Link
          to="/home/taskboard"
          className="block pt-2 hover:bg-gray-200 cursor-pointer"
        >
          TaskBoard
        </Link>
      </nav>
    </menu>
  );

};

export default Menu;

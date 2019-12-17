import React from "react";
import { Link } from "react-router-dom";

interface INavProps {}

const Menu: React.FC<INavProps> = () => {
  return (
    <menu className="text-center">
      <h3>Nav Component</h3>
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

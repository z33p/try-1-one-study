import React from "react";
import VirtualDoc from "./VirtualDoc.jsx";

function Menu(props) {
  // Tailwind don't turns into margin and padding of menu tag
  return (
    <menu className="m-0 p-0">
      <span>Menu, {props.app}</span>
      {chooseApp(props.app)}
    </menu>
  );
}

function chooseApp(app) {
  switch (app) {
    case "virtual_doc":
      return <VirtualDoc />;

    default:
      return null;
  }
}

export default Menu;

import React from "react";
import { INotebook } from "../../../actions/Notebooks/types";
import { Link } from "react-router-dom";

interface IBookViewProps {
  notebook: INotebook;
}

const NotebookView: React.FC<IBookViewProps> = ({ notebook }) => {
  const colors = ["bg-green-500", "bg-red-500", "bg-blue-500"];
  const colorIndex = notebook.id % 3;
  return (
    <Link
      to={`/home/virtual_papers/${notebook.id}`}
      className={`h-32 w-56 text-white ${colors[colorIndex]}`}
    >
      <div className="p-2">
        <h3>{notebook.title}</h3>
        <p>{notebook.detail}</p>
      </div>
    </Link>
  );
};

export default NotebookView;

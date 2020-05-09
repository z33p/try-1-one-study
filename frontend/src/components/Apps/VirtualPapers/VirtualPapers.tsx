import React, { useEffect } from "react";
import { AppState } from "../../../store";
import { connect } from "react-redux";
import CraftBar from "./CraftBar";
import { INotebook } from "../../../actions/VirtualPaper/types";
import { loadNotebooks } from "../../../actions/VirtualPaper/index";
import AppRoute from "components/AppRoute";
import { Link } from "react-router-dom";

interface StateToProps {
  notebooks: INotebook[];
}

interface DispatchProps {
  loadNotebooks(): void;
}

type Props = StateToProps & DispatchProps;

const VirtualPapersApp: React.FC<Props> = ({ loadNotebooks, notebooks }) => {
  useEffect(() => {
    loadNotebooks();
  }, [loadNotebooks]);

  interface LinkToNotebookProps {
    notebook: INotebook;
  }

  const LinkToNotebook: React.FC<LinkToNotebookProps> = ({ notebook }) => {
    const colors = ["bg-green-500", "bg-red-500", "bg-blue-500"];
    const colorIndex = notebook.id % 3;
    return (
      <Link
        to={`${AppRoute.WorkStation.VIRTUAL_PAPERS}/${notebook.id}`}
        className={`h-32 w-56 text-white ${colors[colorIndex]}`}
      >
        <div className="p-2">
          <h3>{notebook.title}</h3>
          <p>{notebook.detail}</p>
        </div>
      </Link>
    );
  };

  return (
    <div>
      <h3>Notebooks App</h3>
      <CraftBar />
      <nav className="flex justify-around p-4 border">
        {notebooks.map((notebook) => (
          <LinkToNotebook key={notebook.id} notebook={notebook} />
        ))}
      </nav>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  notebooks: state.virtualPapers.notebooks,
});

export default connect(mapStateToProps, { loadNotebooks: loadNotebooks })(
  VirtualPapersApp
);

import React, { useEffect } from "react";
import { AppState } from "../../../store";
import { connect } from "react-redux";
import CraftBar from "./CraftBar";
import { INotebook } from "../../../actions/Notebooks/types";
import { loadNotebooks } from "../../../actions/Notebooks/index";
import NotebookView from "./NotebookView";

interface StateProps {
  notebooks: INotebook[];
}

interface DispatchProps {
  loadNotebooks(): void;
}

type Props = StateProps & DispatchProps;

const Notebooks: React.FC<Props> = ({ loadNotebooks, notebooks }) => {
  useEffect(() => {
    loadNotebooks();
  }, [loadNotebooks]);

  return (
    <div>
      <h3>Notebooks App</h3>
      <CraftBar />
      <nav className="flex justify-around p-4 border">
        {notebooks.map((notebook) => (
          <NotebookView key={notebook.id} notebook={notebook} />
        ))}
      </nav>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  notebooks: state.notebooks.data,
});

export default connect(mapStateToProps, { loadNotebooks: loadNotebooks })(
  Notebooks
);

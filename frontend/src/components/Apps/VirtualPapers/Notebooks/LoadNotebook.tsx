import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import store, { AppState } from "store";
import {
  INotebook,
  VirtualPapersActionTypes,
} from "actions/VirtualPaper/types";
import axios, { AxiosResponse, AxiosError } from "axios";
import configToken from "helpers/configToken";
import NotebookView from "./NotebookView";

type TParams = { notebook_id: string };

interface MatchProps extends RouteComponentProps<TParams> {}

interface StateToProps {
  notebooks: INotebook[];
}

type Props = StateToProps & MatchProps;

const LoadNotebook: React.FC<Props> = ({ notebooks, match }) => {
  const [notebookIndex, setNotebookIndex] = useState(
    notebooks.findIndex(
      (notebok) => notebok.id === parseInt(match.params.notebook_id)
    )
  );

  useEffect(() => {
    if (notebookIndex === -1)
      axios
        .get(
          "http://localhost/api/v1/notebooks/" + match.params.notebook_id,
          configToken()
        )
        .then((res: AxiosResponse) => {
          store.dispatch({
            type: VirtualPapersActionTypes.NOTEBOOKS_LOADED,
            payload: [res.data],
          });
          setNotebookIndex(0);
        })
        .catch((err: AxiosError) => console.log(err.response?.data));
  }, [match.params.notebook_id, notebookIndex]);

  if (notebookIndex === -1)
    return (
      <div className="">
        <h1>Loading...</h1>
      </div>
    );
  else return <NotebookView notebook={notebooks[notebookIndex]} />;
};

const mapStateToProps = (state: AppState) => ({
  notebooks: state.virtualPapers.notebooks,
});

export default connect(mapStateToProps)(LoadNotebook);

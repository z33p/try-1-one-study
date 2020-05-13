import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/store";
import { notebookCreated } from "../redux/actions/virtualPapers";
import { Notebook } from "../redux/actions/virtualPapers/types";

function App() {
  const notebooks = useSelector(
    (state: AppState) => state.virtualPapers.notebooks
  );

  const dispatch = useDispatch();

  const notebook: Notebook = {
    id: 1,
    title: "",
    papers: [],
  };

  interface Props {
    notebook: Notebook;
  }

  const NotebookView: React.FC<Props> = ({ notebook }) => (
    <p>
      <span>{notebook.title}</span>
    </p>
  );

  const [title, setTitle] = useState("World");

  return (
    <main className="App App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div style={{ color: "#000" }}>
        {notebooks.length === 0 ? (
          <span>Sem cadernos</span>
        ) : (
          notebooks.map((notebook) => (
            <NotebookView key={notebook.id} notebook={notebook} />
          ))
        )}
      </div>
      <input
        type="text"
        style={{ textAlign: "center" }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          if (title.length > 0) {
            notebook.title = title;
            dispatch(notebookCreated(notebook));
          }
        }}
      >
        Criar Caderno
      </button>
    </main>
  );
}

export default App;

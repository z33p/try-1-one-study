import React, { useState } from "react";
import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/store";
import { notebookCreated } from "../redux/actions/virtualPapers";
import { Notebook } from "../redux/actions/virtualPapers/types";
import {
  Button,
  createMuiTheme,
  ThemeProvider,
  TextField,
  Typography,
  Paper,
} from "@material-ui/core";
import PersistentDrawerLeft from "./PersistentDrawerLeft";
import NotebookView from "./NotebookView";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#00e676",
      },
    },
  });

  const notebooks = useSelector(
    (state: AppState) => state.virtualPapers.notebooks
  );

  const dispatch = useDispatch();

  const [id, setId] = useState(0);
  const [title, setTitle] = useState("Hello World");

  const notebook: Notebook = {
    id,
    title,
    papers: [],
  };

  return (
    <ThemeProvider theme={theme}>
      <PersistentDrawerLeft />
      <main className="w-screen p-4 App App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="w-full flex">
          <Paper className="mr-2 p-4 w-1/4" elevation={2}>
            <TextField
              color="primary"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyPress={(e) => {
                if (title.length > 0 && e.key === "Enter") {
                  setId(id + 1);
                  dispatch(notebookCreated(notebook));
                }
              }}
            />
            <div className="mt-4">
              <Button
                className="block mt-2"
                id="addNotebook"
                variant="contained"
                color="primary"
                onClick={() => {
                  if (title.length > 0) {
                    setId(id + 1);
                    dispatch(notebookCreated(notebook));
                  }
                }}
              >
                Criar Caderno
              </Button>
            </div>
          </Paper>
          <Paper className="p-4 w-3/4" elevation={2}>
            {notebooks.length === 0 ? (
              <Typography id="no-notebooks">Sem cadernos</Typography>
            ) : (
              notebooks.map((notebook) => (
                <NotebookView key={notebook.id} notebook={notebook} />
              ))
            )}
          </Paper>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;

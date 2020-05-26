import React, { useState } from "react";
import { Box, Paper, TextField, Button, Typography } from "@material-ui/core";
import { notebookCreated } from "../redux/actions/virtualPapers";
import NotebookView from "./NotebookView";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/store";
import { Notebook } from "../redux/actions/virtualPapers/types";

const VirtualPapersPage: React.FC = () => {
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
    <Box p={1}>
      <Paper elevation={2}>
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
        <div>
          <Button
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
      <Paper elevation={2}>
        {notebooks.length === 0 ? (
          <Typography id="no-notebooks">Sem cadernos</Typography>
        ) : (
          notebooks.map((notebook) => (
            <NotebookView key={notebook.id} notebook={notebook} />
          ))
        )}
      </Paper>
    </Box>
  );
};

export default VirtualPapersPage;

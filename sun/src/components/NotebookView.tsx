import { Notebook, Paper } from "../redux/actions/virtualPapers/types";
import {
  Typography,
  Box,
  Button,
  TextField,
  Grid,
  Paper as MaterialPaper,
} from "@material-ui/core";
import React, { useState } from "react";
import { paperCreated } from "../redux/actions/virtualPapers";
import { useDispatch } from "react-redux";
import PapersView from "./PapersView";

interface Props {
  notebook: Notebook;
}

const NotebookView: React.FC<Props> = ({ notebook }) => {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("My Paper");
  const [body, setBody] = useState("Paper body");

  const paper: Paper = {
    id,
    title,
    body,
  };

  const onKeyEnterCreatePaper = (e: React.KeyboardEvent) => {
    if (title.length > 0 && e.key === "Enter") {
      setId(id + 1);
      dispatch(
        paperCreated({
          notebookId: notebook.id,
          paper,
        })
      );
    }
  };

  return (
    <MaterialPaper elevation={2}>
      <Box p={2}>
        <Box pb={1}>
          <Grid container justify="flex-start">
            <Typography variant="h6" data-testid="notebookTitle">
              {notebook.title}
            </Typography>
            <Typography variant="subtitle1">{notebook.detail}</Typography>
          </Grid>
        </Box>

        <PapersView papers={notebook.papers} />

        <Grid container justify="center">
          <Box pb={1}>
            <TextField
              color="primary"
              variant="standard"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyPress={(e) => {
                if (title.length > 0 && e.key === "Enter") {
                  setId(id + 1);
                  dispatch(
                    paperCreated({
                      notebookId: notebook.id,
                      paper,
                    })
                  );
                }
              }}
            />
          </Box>

          <Box pb={1}>
            <TextField
              color="primary"
              variant="standard"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              onKeyPress={onKeyEnterCreatePaper}
            />
          </Box>
        </Grid>
        <Grid container justify="flex-end">
          <Box pt={1}>
            <Button
              id="addNotebook"
              variant="contained"
              color="primary"
              onClick={() => {
                if (title.length > 0) {
                  setId(id + 1);
                  dispatch(
                    paperCreated({
                      notebookId: notebook.id,
                      paper,
                    })
                  );
                }
              }}
            >
              Criar Nota
            </Button>
          </Box>
        </Grid>
      </Box>
    </MaterialPaper>
  );
};

export default NotebookView;

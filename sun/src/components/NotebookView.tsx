import { Notebook, Paper } from "../redux/actions/virtualPapers/types";
import { Typography, Box, Button, TextField } from "@material-ui/core";
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
    <Box p={2}>
      <Typography variant="h4">{notebook.title}</Typography>
      <Typography variant="h5">{notebook.detail}</Typography>
      <PapersView papers={notebook.papers} />
      <Box p={2}>
        <Box pb={2}>
          <TextField
            color="primary"
            variant="outlined"
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
        <TextField
          color="primary"
          variant="outlined"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          onKeyPress={onKeyEnterCreatePaper}
        />
        <br />
        <Button
          style={{ marginTop: 1 + "rem" }}
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
    </Box>
  );
};

export default NotebookView;

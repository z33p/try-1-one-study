import React, { useState } from "react";
import {
  Box,
  Paper,
  Button,
  Typography,
  Grid,
  Input,
  InputBaseComponentProps,
} from "@material-ui/core";
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
    <Grid container direction="column" justify="space-evenly">
      <Box p={1}>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <Paper elevation={2}>
              <Box p={1}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Box pb={1}>
                    <Input
                      inputProps={
                        {
                          "data-testid": "inputNotebookTitle",
                        } as InputBaseComponentProps
                      }
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
                  </Box>
                  <Box pb={1}>
                    <Button
                      data-testid="addNotebook"
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
                  </Box>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            {notebooks.length === 0 ? (
              <Paper elevation={2}>
                <Box p={1}>
                  <Grid container justify="center">
                    <Typography>Sem cadernos</Typography>
                  </Grid>
                </Box>
              </Paper>
            ) : (
              notebooks.map((notebook) => (
                <Box pb={1} key={notebook.id}>
                  <NotebookView notebook={notebook} />
                </Box>
              ))
            )}
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default VirtualPapersPage;

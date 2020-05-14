import virtualPapersReducer, { INITIAL_STATE } from "./virtualPapers";
import { Notebook, Paper, PaperRequest } from "../actions/virtualPapers/types";
import { notebookCreated, paperCreated } from "../actions/virtualPapers";

describe("Testando VirtualPapers Reducer", () => {
  it("should add a notebook", () => {
    const title = "Hello World";
    const detail = "It's just a detail";

    let index = 0;

    const notebook: Notebook = {
      id: index,
      title,
      detail,
      papers: [],
    };

    const state = virtualPapersReducer(
      INITIAL_STATE,
      notebookCreated(notebook)
    );

    expect(state).toEqual({
      isLoading: false,
      notebooks: [notebook],
    });

    expect(state.notebooks[index]).toEqual(notebook);

    const otherNotebook: Notebook = {
      id: index + 1,
      title,
      detail,
      papers: [],
    };

    let newState = virtualPapersReducer(state, notebookCreated(otherNotebook));

    expect(newState).toEqual({
      isLoading: false,
      notebooks: [notebook, otherNotebook],
    });

    expect(newState.notebooks[index + 1]).toEqual(otherNotebook);
  });

  it("should add a paper", () => {
    const notebook: Notebook = {
      id: 0,
      title: "First Notebook",
      papers: [],
    };

    let stateWithNotebook = virtualPapersReducer(
      INITIAL_STATE,
      notebookCreated(notebook)
    );

    const title = "Hello Paper";
    const body = "It's just a body";

    let index = 0;

    const paper: Paper = {
      id: index,
      title,
      body,
    };

    const paperRequest: PaperRequest = {
      notebookId: 0,
      paper,
    };

    const stateWithPaper = virtualPapersReducer(
      stateWithNotebook,
      paperCreated(paperRequest)
    );

    expect(paper).toEqual(stateWithPaper.notebooks[0].papers[index]);

    const otherPaper: Paper = {
      id: index + 1,
      title,
      body,
    };

    const otherPaperRequest: PaperRequest = {
      notebookId: 0,
      paper: otherPaper,
    };

    const stateWithOtherPaper = virtualPapersReducer(
      stateWithPaper,
      paperCreated(otherPaperRequest)
    );

    expect(stateWithOtherPaper.notebooks[0].papers).toEqual([
      paper,
      otherPaper,
    ]);
  });
});

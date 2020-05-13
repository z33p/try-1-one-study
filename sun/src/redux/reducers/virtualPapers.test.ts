import virtualPapersReducer, { INITIAL_STATE } from "./virtualPapers";
import { Notebook } from "../actions/virtualPapers/types";
import { notebookCreated } from "../actions/virtualPapers";

describe("Testando VirtualPapers Reducer", () => {
  it("should add a notebook", () => {
    const title = "Hello World";
    const detail = "It's just a detail";

    const notebook: Notebook = {
      id: 1,
      title,
      detail,
      papers: [],
    };

    let state = virtualPapersReducer(INITIAL_STATE, notebookCreated(notebook));

    expect(state).toEqual({
      isLoading: false,
      notebooks: [notebook],
    });

    expect(state.notebooks[0]).toEqual(notebook);

    const otherNotebook: Notebook = {
      id: 2,
      title,
      detail,
      papers: [],
    };

    let newState = virtualPapersReducer(state, notebookCreated(otherNotebook));

    expect(newState).toEqual({
      isLoading: false,
      notebooks: [notebook, otherNotebook],
    });

    expect(newState.notebooks[1]).toEqual(otherNotebook);
  });
});

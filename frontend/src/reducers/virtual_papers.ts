import {
  VirtualPapersActionTypes,
  VirtualPaperState,
} from "../actions/VirtualPaper/types";
import { Reducer } from "redux";

const INITIAL_STATE: VirtualPaperState = {
  notebooks: [],
  isLoading: false,
};

const reducer: Reducer<VirtualPaperState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VirtualPapersActionTypes.NOTEBOOKS_LOADED:
      return {
        ...state,
        notebooks: action.payload,
        isLoading: false,
      };

    case VirtualPapersActionTypes.NOTEBOOK_CREATED:
      return {
        ...state,
        notebooks: [...state.notebooks, action.payload],
      };

    case VirtualPapersActionTypes.VIRTUAL_PAPER_CREATED:
      let notebookIndex = state.notebooks.findIndex(
        (notebook) => notebook.id === action.payload.notebookId
      );

      let { virtual_papers } = state.notebooks[notebookIndex];
      let notebook = {
        ...state.notebooks[notebookIndex],
        virtual_papers: [...virtual_papers, action.payload.virtualPaper],
      };

      state.notebooks[notebookIndex] = notebook;

      return {
        ...state,
        notebooks: [...state.notebooks],
      };

    default:
      return state;
  }
};

export default reducer;

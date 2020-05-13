import { Reducer } from "redux";
import {
  VirtualPaperState,
  VirtualPapersActionTypes,
} from "../actions/virtualPapers/types";

export const INITIAL_STATE: VirtualPaperState = {
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

    case VirtualPapersActionTypes.PAPER_CREATED:
      let notebookIndex = state.notebooks.findIndex(
        (notebook) => notebook.id === action.payload.notebookId
      );

      let { papers } = state.notebooks[notebookIndex];
      let notebook = {
        ...state.notebooks[notebookIndex],
        virtual_papers: [...papers, action.payload.virtualPaper],
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

import { Reducer } from "redux";
import {
  VirtualPaperState,
  VirtualPapersActionTypes,
  Notebook,
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
      return {
        ...state,
        notebooks: state.notebooks.map((notebook) => {
          if (notebook.id === action.payload.notebookId) {
            const updatedNotebook: Notebook = {
              ...notebook,
              papers: [...notebook.papers, action.payload.paper],
            };
            return updatedNotebook;
          }
          return notebook;
        }),
      };

    default:
      return state;
  }
};

export default reducer;

import {
  NotebooksActionTypes,
  VirtualPaperState,
} from "../actions/VirtualPaper/types";
import { Reducer } from "redux";

const INITIAL_STATE: VirtualPaperState = {
  notebooks: [],
  isLoading: false,
};

const reducer: Reducer<VirtualPaperState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotebooksActionTypes.NOTEBOOKS_LOADED:
      return {
        ...state,
        notebooks: action.payload,
        isLoading: false,
      };

    case NotebooksActionTypes.NOTEBOOK_CREATED:
      return {
        ...state,
        notebooks: [...state.notebooks, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;

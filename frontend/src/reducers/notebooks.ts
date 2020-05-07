import {
  NotebooksActionTypes,
  NotebooksState,
} from "../actions/Notebooks/types";
import { Reducer } from "redux";

const INITIAL_STATE: NotebooksState = {
  data: [],
  isLoading: false,
};

const reducer: Reducer<NotebooksState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotebooksActionTypes.NOTEBOOKS_LOADED:
      return {
        ...state,
        data: action.payload,
      };

    case NotebooksActionTypes.NOTEBOOK_CREATED:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;

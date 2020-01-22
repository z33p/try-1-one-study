
import { Reducer } from "redux";
import { AlertTypes, AlertState } from "../actions/alerts/types";

const INITIAL_STATE: AlertState = {
  error: {
    text: "",
    status: null
  },
  message: {
    text: ""
  }
};

const reducer: Reducer<AlertState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AlertTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case AlertTypes.SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      };

    default:
      return state;
  }
};

export default reducer;

import {
  ErrorTypes, IErrorState
} from "../actions/ErrorTypes";
import { Reducer } from "redux";

const INITIAL_STATE: IErrorState = {
  msg: "",
  status: null
};

const reducer: Reducer<IErrorState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ErrorTypes.GET_ERROR:
      return {
        ...state,
        errors: action.payload
      };

    default:
      return state;
  }
};

export default reducer;

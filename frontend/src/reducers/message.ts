import {
  MessageTypes, IMessageState
} from "../actions/MessageTypes";
import { Reducer } from "redux";

const INITIAL_STATE: IMessageState = {
  msg: ""
};

const reducer: Reducer<IMessageState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MessageTypes.CREATE_MESSAGE:
      return {
        ...state,
        msg: action.payload
      };

    default:
      return state;
  }
};

export default reducer;

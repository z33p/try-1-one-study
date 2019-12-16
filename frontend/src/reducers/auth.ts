import { AuthTypes, AuthState } from "../actions/auth/types";
import { Reducer } from "redux";

const INITIAL_STATE: AuthState = {
  isLoading: false,
  isAuthenticated: false,
  user: null
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.USER_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case AuthTypes.USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload
      };

    case AuthTypes.AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null
      };

    default:
      return state;
  }
};

export default reducer;

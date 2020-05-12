import { Reducer } from "redux";
import { AuthState, AuthTypes } from "../actions/auth/types";

export const INITIAL_STATE: AuthState = {
  isLoading: false,
  isAuthenticated: false,
  token: localStorage.getItem("token"),
  refreshToken: localStorage.getItem("refreshToken"),
  user: null,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case AuthTypes.LOAD_TOKENS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      return {
        ...state,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
      };

    case AuthTypes.LOAD_USER:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case AuthTypes.AUTH_ERROR:
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        token: null,
        refreshToken: null,
        user: null,
      };

    default:
      return state;
  }
};

export default reducer;

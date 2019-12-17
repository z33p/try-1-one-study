export enum AuthTypes {
  // Action
  LOAD_TOKENS = "LOAD_TOKENS",
  USER_LOADED = "USER_LOADED",
  LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FAIL = "REGISTER_FAIL",
  AUTH_ERROR = "AUTH_ERROR",

  // Sagas
  USER_LOADING = "USER_LOADING",
  LOGGING_IN = "LOGGING_IN",
  REGISTERING = "REGISTERING"
}

export interface IUser {
  id: string;
  username: string;
  email: string;
}

export interface TokensPayload {
  token: string | null;
  refreshToken: string | null;
}

export interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  token: string | null;
  refreshToken: string | null;
  user: IUser | null;
}

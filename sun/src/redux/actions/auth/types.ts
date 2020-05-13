export enum AuthTypes {
  // Action
  LOAD_TOKENS = "LOAD_TOKENS",
  LOAD_USER = "LOAD_USER",
  LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FAIL = "REGISTER_FAIL",
  AUTH_ERROR = "AUTH_ERROR",

  // Sagas
  USER_LOADING = "USER_LOADING",
  LOGGING_IN = "LOGGING_IN",
  REGISTERING = "REGISTERING",
}

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface TokensPayload {
  token: string | null;
  refreshToken: string | null;
}

export interface AuthAction {
  type: string;
  payload: Credentials;
}

export interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  token: string | null;
  refreshToken: string | null;
  user: User | null;
}

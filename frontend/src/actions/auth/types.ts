export enum AuthTypes {
  USER_LOADING = "USER_LOADING",
  USER_LOADED = "USER_LOADED",
  AUTH_ERROR = "AUTH_ERROR",
  LOAD_TOKENS = "LOAD_TOKENS",
  LOGIN_USER = "LOGIN_USER",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL",
  LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
  REGISTER_USER = "REGISTER_USER",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FAIL = "REGISTER_FAIL"
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

import { AuthTypes, User, TokensPayload, ICredentials } from "./types";

export const loadUser = () => ({
  type: AuthTypes.USER_LOADING,
});

export function loadSucess(user: User) {
  return {
    type: AuthTypes.LOAD_USER,
    payload: user,
  };
}

export function loggingIn(credentials: ICredentials) {
  return {
    type: AuthTypes.LOGGING_IN,
    payload: credentials,
  };
}

export function registering(credentials: ICredentials) {
  return {
    type: AuthTypes.REGISTERING,
    payload: credentials,
  };
}

export function loadTokens(tokens: TokensPayload) {
  return {
    type: AuthTypes.LOAD_TOKENS,
    payload: tokens,
  };
}

export const authError = () => ({
  type: AuthTypes.AUTH_ERROR,
});

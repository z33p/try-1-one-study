import { action } from "typesafe-actions";
import { AuthTypes, IUser, TokensPayload } from "./types";
import { ICredentials } from "../../sagas/auth";

export const loadRequest = () => action(AuthTypes.USER_LOADING);

export const loadSuccess = (token: string, refreshToken: string, user: IUser) =>
  action(AuthTypes.USER_LOADED, { token, refreshToken, user });

export const loginUser = (credentials: ICredentials) =>
  action(AuthTypes.LOGIN_USER, credentials);

export const registerUser = (credentials: ICredentials) =>
  action(AuthTypes.REGISTER_USER, credentials);

export const loadTokens = (data: TokensPayload) =>
  action(AuthTypes.LOAD_TOKENS, data);

export const loadFailure = () => action(AuthTypes.AUTH_ERROR);

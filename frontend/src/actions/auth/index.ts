import { action } from "typesafe-actions";
import { AuthTypes, IUser, TokensPayload } from "./types";
import { ICredentials } from "../../contracts/Requests/IAuthRequest";

export const loadUser = () => action(AuthTypes.USER_LOADING);

export const loadSuccess = (user: IUser) => action(AuthTypes.USER_LOADED, user);

export const loginUser = (credentials: ICredentials) =>
  action(AuthTypes.LOGGING_IN, credentials);

export const registerUser = (credentials: ICredentials) =>
  action(AuthTypes.REGISTERING, credentials);

export const loadTokens = (data: TokensPayload) =>
  action(AuthTypes.LOAD_TOKENS, data);

export const loadFailure = () => action(AuthTypes.AUTH_ERROR);

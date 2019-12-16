import { action } from "typesafe-actions";
import { AuthTypes, User } from "./types";

export const loadRequest = () => action(AuthTypes.USER_LOADING);

export const loadSuccess = (data: User) =>
  action(AuthTypes.USER_LOADED, { data });

export const loadFailure = () => action(AuthTypes.AUTH_ERROR);

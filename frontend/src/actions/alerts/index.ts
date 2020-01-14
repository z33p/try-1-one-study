import { action } from "typesafe-actions";
import { IErrorState, AlertTypes, IMessageState } from "./types";

export const showMessage = (msg: IMessageState) => action(AlertTypes.SET_MESSAGE, msg);

export const showError = (error: IErrorState) => action(AlertTypes.SET_ERROR, error);

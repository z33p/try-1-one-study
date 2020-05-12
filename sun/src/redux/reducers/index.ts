import { combineReducers } from "redux";
import auth from "./auth";
import routes from "./routes";
import { AppState } from "../store";

export default combineReducers<AppState>({ auth, routes });

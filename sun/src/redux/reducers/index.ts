import { combineReducers } from "redux";
import { AppState } from "../store";
import auth from "./auth";
import routes from "./routes";
import virtualPapers from "./virtualPapers";

export default combineReducers<AppState>({ auth, routes, virtualPapers });

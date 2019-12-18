import { combineReducers } from "redux";

import auth from "./auth";
import vdocs from "./vdocs";
import error from "./errors";
import message from "./message";


export default combineReducers({
  auth,
  vdocs,
  error,
  message
});

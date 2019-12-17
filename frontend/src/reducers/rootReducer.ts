import { combineReducers } from "redux";

import auth from "./auth";
import vdocs from "./vdocs";

export default combineReducers({
  auth,
  vdocs
});

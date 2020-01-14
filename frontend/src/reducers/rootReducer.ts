import { combineReducers } from "redux";

import auth from "./auth";
import vdocs from "./vdocs";
import alert from "./alert";

export default combineReducers({
  auth,
  alert,
  vdocs,
});

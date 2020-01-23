import { combineReducers } from "redux";

import auth from "./auth";
import vdocs from "./vdocs";
import alert from "./alert";
import notebooks from "./notebooks"
import routes from "./routes"

const virtual_paper = combineReducers({notebooks})

export default combineReducers({
  auth,
  alert,
  vdocs,
  virtual_paper,
  routes
});

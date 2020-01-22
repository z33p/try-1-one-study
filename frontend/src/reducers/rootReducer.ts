import { combineReducers } from "redux";

import auth from "./auth";
import vdocs from "./vdocs";
import alert from "./alert";
import books from "./books"
import routes from "./routes"

export default combineReducers({
  auth,
  alert,
  vdocs,
  books,
  routes
});

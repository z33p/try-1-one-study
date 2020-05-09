import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import virtual_papers from "./virtual_papers";
import routes from "./routes";

export default combineReducers({
  auth,
  alert,
  virtual_papers,
  routes,
});

import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import notebooks from "./notebooks";
import routes from "./routes";

export default combineReducers({
  auth,
  alert,
  notebooks,
  routes,
});

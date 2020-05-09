import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import virtualPapers from "./virtual_papers";
import routes from "./routes";

export default combineReducers({
  auth,
  alert,
  virtualPapers,
  routes,
});

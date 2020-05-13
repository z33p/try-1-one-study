import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import { AuthState } from "./actions/auth/types";
import { RoutesState } from "./actions/routes/types";
import { VirtualPaperState } from "./actions/virtualPapers/types";

export interface AppState {
  auth: AuthState;
  routes: RoutesState;
  virtualPapers: VirtualPaperState;
}

const sagaMiddleware = createSagaMiddleware();

export const middlewares = [sagaMiddleware];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;

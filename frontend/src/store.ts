import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { AuthState } from "./actions/auth/types";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
import { AlertState } from "./actions/alerts/types";
import { VirtualPaperState } from "./actions/VirtualPaper/types";
import { RouteState } from "./actions/routes/types";

export interface AppState {
  auth: AuthState;
  alert: AlertState;
  virtual_papers: VirtualPaperState;
  routes: RouteState;
}

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const middleware = [sagaMiddleware];

const store: Store<AppState> = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;

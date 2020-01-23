import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { AuthState } from "./actions/auth/types";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
import { VirtualDocsState } from "./actions/VirtualDocs/types";
import { AlertState } from "./actions/alerts/types";
import { NotebooksState } from "./actions/Notebooks/types";
import { RoutesState } from "./actions/routes/types";

interface virtual_paper {
  notebooks: NotebooksState
}

export interface AppState {
  auth: AuthState;
  virtual_paper: virtual_paper;
  vdocs: VirtualDocsState;
  alert: AlertState;
  routes: RoutesState
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

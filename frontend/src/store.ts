import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { AuthState } from "./actions/auth/types";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
import { IVirtualDocsState } from "./actions/VirtualDocs/types";
import { IAlertState } from "./actions/alerts/types";

export interface AppState {
  auth: AuthState;
  vdocs: IVirtualDocsState;
  alert: IAlertState;
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

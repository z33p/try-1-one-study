import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { AuthState } from "./actions/auth/types";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
import { VirtualDocsState } from "./actions/VirtualDocs/types";

export interface ApplicationState {
  auth: AuthState;
  vdocs: VirtualDocsState;
}

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const middleware = [sagaMiddleware];

const store: Store<ApplicationState> = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;

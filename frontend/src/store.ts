import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { AuthState } from "./actions/auth/types";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
import { IVirtualDocsState } from "./actions/VirtualDocs/types";
import { IErrorState } from "./actions/ErrorTypes";
import { IMessageState } from "./actions/MessageTypes";

export interface ApplicationState {
  auth: AuthState;
  vdocs: IVirtualDocsState;
  errors: IErrorState;
  messages: IMessageState;
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

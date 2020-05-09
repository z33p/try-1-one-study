import { all, takeLatest, takeEvery } from "redux-saga/effects";
import { AuthTypes } from "../actions/auth/types";
import { loadingUser, loggingIn, registering } from "./auth";
import { NotebooksActionTypes } from "../actions/Notebooks/types";
import { creatingNotebook, loadingNotebooks } from "./notebooks";
import { RoutesTypes } from "../actions/routes/types";
import { loadingRoutes } from "./routes";

export default function* rootSaga() {
  return yield all([
    takeLatest(RoutesTypes.LOADING_ROUTES, loadingRoutes),
    takeLatest(AuthTypes.USER_LOADING, loadingUser),
    takeLatest(AuthTypes.LOGGING_IN, loggingIn),
    takeLatest(AuthTypes.REGISTERING, registering),
    takeLatest(NotebooksActionTypes.LOADING_NOTEBOOKS, loadingNotebooks),
    takeEvery(NotebooksActionTypes.CREATING_NOTEBOOK, creatingNotebook),
  ]);
}

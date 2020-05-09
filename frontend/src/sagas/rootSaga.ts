import { all, takeLatest, takeEvery } from "redux-saga/effects";
import { AuthTypes } from "../actions/auth/types";
import { loadingUser, loggingIn, registering } from "./auth";
import { VirtualPapersActionTypes } from "../actions/VirtualPaper/types";
import {
  creatingNotebook,
  loadingNotebooks,
  creatingVirtualPaper,
} from "./virtual_papers";
import { RoutesTypes } from "../actions/routes/types";
import { loadingRoutes } from "./routes";

export default function* rootSaga() {
  return yield all([
    takeLatest(RoutesTypes.LOADING_ROUTES, loadingRoutes),
    takeLatest(AuthTypes.USER_LOADING, loadingUser),
    takeLatest(AuthTypes.LOGGING_IN, loggingIn),
    takeLatest(AuthTypes.REGISTERING, registering),
    takeLatest(VirtualPapersActionTypes.LOADING_NOTEBOOKS, loadingNotebooks),
    takeEvery(VirtualPapersActionTypes.CREATING_NOTEBOOK, creatingNotebook),
    takeEvery(
      VirtualPapersActionTypes.CREATING_VIRTUAL_PAPER,
      creatingVirtualPaper
    ),
  ]);
}

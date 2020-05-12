import { all, takeLatest } from "redux-saga/effects";
import { RoutesTypes } from "../actions/routes/types";
import { loadingRoutes } from "./routes";
import { loadingUser, loggingIn, registering } from "./auth";
import { AuthTypes } from "../actions/auth/types";

export default function* rootSaga() {
  return yield all([
    takeLatest(RoutesTypes.LOADING_ROUTES, loadingRoutes),

    takeLatest(AuthTypes.USER_LOADING, loadingUser),
    takeLatest(AuthTypes.LOGGING_IN, loggingIn),
    takeLatest(AuthTypes.REGISTERING, registering),
  ]);
}

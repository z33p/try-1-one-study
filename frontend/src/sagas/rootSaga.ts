import { all, takeLatest } from "redux-saga/effects";
import { AuthTypes } from "../actions/auth/types";
import { loadingUser, loggingIn, registering } from "./auth";
import { loadingVirtualDocs } from "./vdocs";
import { VirtualDocsTypes } from "../actions/VirtualDocs/types";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.USER_LOADING, loadingUser),
    takeLatest(AuthTypes.LOGGING_IN, loggingIn),
    takeLatest(AuthTypes.REGISTERING, registering),
    takeLatest(VirtualDocsTypes.LOADING_VDOCS, loadingVirtualDocs)
  ]);
}

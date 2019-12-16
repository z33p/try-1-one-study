import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "../actions/auth/types";
import { loadUser } from "./auth";

export default function* rootSaga() {
  return yield all([takeLatest(AuthTypes.USER_LOADING, loadUser)]);
}

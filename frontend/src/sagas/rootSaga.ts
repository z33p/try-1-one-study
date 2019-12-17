import { all, takeLatest } from "redux-saga/effects";
import { AuthTypes } from "../actions/auth/types";
import { loadUser, loginUser, registerUser } from "./auth";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.USER_LOADING, loadUser),
    takeLatest(AuthTypes.LOGIN_USER, loginUser),
    takeLatest(AuthTypes.REGISTER_USER, registerUser)

  ]);
}

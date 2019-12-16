import { call, put } from "redux-saga/effects";
import api from "../services/api";

import { loadSuccess, loadFailure } from "../actions/auth/index";

export function* loadUser() {
  try {

    let token: string | null = localStorage.getItem("token");
    let refreshToken: string | null = localStorage.getItem("refreshToken");


    if (token && refreshToken) {
      const res = yield call(api.post, "/auth/users/" + token);
      yield put(loadSuccess(res.data));
    }
    else
      yield put(loadFailure());

  } catch (err) {
    yield put(loadFailure());
  }
}

export function* loginUser(email: string, password: string) {
  try {
    const res = yield call(api.post, "/auth/login", { email, password });

    yield put(loadSuccess(res.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

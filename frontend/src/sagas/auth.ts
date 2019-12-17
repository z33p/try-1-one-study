import { call, put } from "redux-saga/effects";
import axios from 'axios';
// import api from "../services/api";

import { loadTokens, loadSuccess, loadFailure } from "../actions/auth/index";

export function* loadUser() {
  try {
    let token: string | null = localStorage.getItem("token");
    let refreshToken: string | null = localStorage.getItem("refreshToken");

    if (!(token && refreshToken)) yield put(loadFailure());

    else {
      let config = {
        headers: { authorization: "Bearer " + token }
      }

      const res = yield call(axios.post, "/auth/user", {}, config);
      yield put(loadSuccess(token, refreshToken, res.data));
    }

  } catch (err) {
    yield put(loadFailure());
  }
}

export interface ICredentials {
  email: string,
  password: string
}

interface ILogin {
  type: string,
  payload: ICredentials
}

export function* loginUser(action: ILogin) {
  try {
    let data = {
      email: action.payload.email,
      password: action.payload.password
    }
    const res = yield call(axios.post, "/auth/login", data);

    yield put(loadTokens(res.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* registerUser(action: ILogin) {
  try {
    let data = {
      email: action.payload.email,
      password: action.payload.password
    }
    const res = yield call(axios.post, "/auth/register", data);

    yield put(loadTokens(res.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
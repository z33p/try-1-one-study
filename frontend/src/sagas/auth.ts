import { call, put } from "redux-saga/effects";
import axios from "axios";
import {
  loadTokens,
  loadSuccess,
  loadFailure,
  loadUser
} from "../actions/auth/index";
import { IAuthRequest } from "../contracts/Requests/IAuthRequest";
import { AuthRoutes } from "../contracts/AuthRoutes";

export function* loadingUser() {
  try {
    let token: string | null = localStorage.getItem("token");
    let refreshToken: string | null = localStorage.getItem("refreshToken");

    if (!(token && refreshToken)) yield put(loadFailure());
    else {
      let config = {
        headers: { authorization: "Bearer " + token }
      };

      const res = yield call(axios.post, AuthRoutes.USER, {}, config);
      yield put(loadSuccess(res.data));
    }
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* loggingIn(action: IAuthRequest) {
  try {
    let data = {
      email: action.payload.email,
      password: action.payload.password
    };
    const res = yield call(axios.post, AuthRoutes.LOGIN, data);

    yield put(loadTokens(res.data));
    yield put(loadUser());
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* registering(action: IAuthRequest) {
  try {
    let data = {
      email: action.payload.email,
      password: action.payload.password
    };
    const res = yield call(axios.post, AuthRoutes.REGISTER, data);

    yield put(loadTokens(res.data));
    yield put(loadUser());
  } catch (err) {
    yield put(loadFailure());
  }
}

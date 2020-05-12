import { call, put } from "redux-saga/effects";
import axios from "axios";
import { loadTokens, loadSucess, authError, loadUser } from "../actions/auth";
import { AuthAction } from "../actions/auth/types";
import store from "../store";

export function* loadingUser() {
  try {
    let token: string | null = localStorage.getItem("token");
    let refreshToken: string | null = localStorage.getItem("refreshToken");

    if (!(token && refreshToken)) yield put(authError());
    else {
      let config = {
        headers: { authorization: "Bearer " + token },
      };

      const res = yield call(
        axios.post,
        store.getState().routes.auth.user,
        {},
        config
      );
      yield put(loadSucess(res.data));
      // yield put(showMessage({ text: "USER LOADED" }));
      console.log("USER LOADED");
    }
  } catch (err) {
    yield put(authError());
    // yield put(
    //   showError({
    //     text: "USER LOAD ERROR",
    //     status: err.response.status,
    //   })
    // );
    console.log(`USER LOAD ERROR ${err.response.status}`);
  }
}

export function* loggingIn(action: AuthAction) {
  try {
    let data = {
      email: action.payload.email,
      password: action.payload.password,
    };
    const res = yield call(
      axios.post,
      store.getState().routes.auth.login,
      data
    );

    yield put(loadTokens(res.data));
    yield put(loadUser());
  } catch (err) {
    yield put(authError());
    // yield put(
    //   showError({
    //     text: AuthTypes.AUTH_ERROR,
    //     status: err.response.status,
    //   })
    // );
    console.log(`AUTH_ERROR ${err.response.status}`);
  }
}

export function* registering(action: AuthAction) {
  try {
    let data = {
      email: action.payload.email,
      password: action.payload.password,
    };
    const res = yield call(
      axios.post,
      store.getState().routes.auth.register,
      data
    );

    yield put(loadTokens(res.data));
    yield put(loadUser());
  } catch (err) {
    yield put(authError());
    // yield put(
    //   showError({
    //     text: AuthTypes.AUTH_ERROR,
    //     status: err.response.status,
    //   })
    // );
    console.log(`AUTH_ERROR ${err.response.status}`);
  }
}

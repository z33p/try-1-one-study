import axios from "axios";
import { call, put } from "redux-saga/effects";
import { routesLoaded, routesError } from "../actions/routes";
import store from "../store";

export function* loadingRoutes() {
  try {
    const res = yield call(axios.get, store.getState().routes.uranus.root);
    yield put(routesLoaded({ api: res.data }));
  } catch (err) {
    yield put(routesError());
  }
}

import axios from "axios";
import { call, put } from "redux-saga/effects";
import { routesLoaded, routesError } from "../actions/routes";

export function* loadingRoutes() {
  try {
    if (!process.env.REACT_APP_BACKEND_API) yield put(routesError());
    
    const res = yield call(axios.get, process.env.REACT_APP_BACKEND_API + "/");
    yield put(routesLoaded({ api: res.data }));
  } catch (err) {
    yield put(routesError());
  }
}

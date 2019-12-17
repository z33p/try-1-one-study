import { call, put } from "redux-saga/effects";
import configToken from "../services/configToken";
import { vdocsLoaded, vdocsloadError } from "../actions/VirtualDocs/index";
import { VirtualDocsRoutes } from "../contracts/VirtualDocsRoutes";
import axios from "axios";

export function* loadingVirtualDocs() {
  try {
    const res = yield call(axios.get, VirtualDocsRoutes.GET_ALL, configToken());

    yield put(vdocsLoaded(res.data));
  } catch (err) {
    yield put(vdocsloadError());
  }
}

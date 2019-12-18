import { call, put } from "redux-saga/effects";
import configToken from "../helpers/configToken";
import { vdocsLoaded, vdocsLoadError, vdocCreated, vdocCreateError } from "../actions/VirtualDocs/index";
import { VirtualDocsRoutes } from "../contracts/VirtualDocsRoutes";
import axios from "axios";
import { IActionVirtualDoc } from "../contracts/Requests/IVirtualDocRequest";

export function* loadingVirtualDocs() {
  try {
    const res = yield call(axios.get, VirtualDocsRoutes.GET_ALL, configToken());

    yield put(vdocsLoaded(res.data));
  } catch (err) {
    yield put(vdocsLoadError());
  }
}

export function* creatingVirtualDoc(action: IActionVirtualDoc) {
  try {
    const res = yield call(axios.post, VirtualDocsRoutes.CREATE, action.payload, configToken());

    yield put(vdocCreated(res.data));

  } catch (err) {
    yield put(vdocCreateError());
  }
}

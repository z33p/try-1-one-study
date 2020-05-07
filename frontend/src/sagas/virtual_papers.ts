import { call, put } from "redux-saga/effects";
import configToken from "../helpers/configToken";
import {
  papersLoaded,
  papersLoadError,
  paperCreated,
  paperCreateError,
} from "../actions/VirtualPapers/index";
import { VirtualPapersRoutes } from "../contracts/VirtualPapersRoutes";
import axios from "axios";
import { IActionVirtualPaper } from "../contracts/Requests/IVirtualPaperRequest";

export function* loadingVirtualPapers() {
  try {
    const res = yield call(
      axios.get,
      VirtualPapersRoutes.GET_ALL,
      configToken()
    );

    yield put(papersLoaded(res.data));
  } catch (err) {
    yield put(papersLoadError());
  }
}

export function* creatingVirtualPaper(action: IActionVirtualPaper) {
  try {
    const res = yield call(
      axios.post,
      VirtualPapersRoutes.CREATE,
      action.payload,
      configToken()
    );

    yield put(paperCreated(res.data));
  } catch (err) {
    yield put(paperCreateError());
  }
}

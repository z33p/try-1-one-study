import { call, put } from "redux-saga/effects";
import configToken from "../helpers/configToken";
import {
  notebooksLoaded,
  notebooksLoadError,
  notebookCreated,
  notebookCreateError,
  virtualPaperCreated,
  virtualPaperCreateError,
} from "../actions/VirtualPaper/index";
import axios from "axios";
import { IActionNotebook } from "../contracts/Requests/INoteBookRequest";
import store from "../store";
import { NotebooksRoutes } from "../actions/routes/types";
import { IActionVirtualPaper } from "contracts/Requests/IVirtualPaperRequest";

export function* loadingNotebooks() {
  try {
    const notebookRoutes: NotebooksRoutes = store.getState().routes.api
      .notebooks;
    const res = yield call(
      axios.get,
      process.env.REACT_APP_BACKEND_API + notebookRoutes.allByUser,
      configToken()
    );

    yield put(notebooksLoaded(res.data));
  } catch (err) {
    yield put(notebooksLoadError());
  }
}

export function* creatingNotebook(action: IActionNotebook) {
  try {
    const notebookRoutes: NotebooksRoutes = store.getState().routes.api
      .notebooks;
    const res = yield call(
      axios.post,
      process.env.REACT_APP_BACKEND_API + notebookRoutes.create,
      action.payload,
      configToken()
    );

    yield put(notebookCreated(res.data));
  } catch (err) {
    yield put(notebookCreateError());
  }
}

export function* creatingVirtualPaper(action: IActionVirtualPaper) {
  try {
    const notebookRoutes: NotebooksRoutes = store.getState().routes.api
      .notebooks;
    const res = yield call(
      axios.post,
      process.env.REACT_APP_BACKEND_API +
        notebookRoutes.create +
        "/" +
        action.payload.notebookId +
        "/virtual_papers",
      action.payload.virtualPaper,
      configToken()
    );

    action.payload.virtualPaper = res.data;

    yield put(
      virtualPaperCreated({
        notebookId: action.payload.notebookId,
        virtualPaper: res.data,
      })
    );
  } catch (err) {
    console.log(err);
    yield put(virtualPaperCreateError());
  }
}

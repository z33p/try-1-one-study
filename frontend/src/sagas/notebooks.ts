import { call, put } from "redux-saga/effects";
import configToken from "../helpers/configToken";
import { notebooksLoaded, notebooksLoadError, notebookCreated, notebookCreateError } from "../actions/Notebooks/index";
import axios from "axios";
import { IActionNotebook } from "../contracts/Requests/IBookRequest";
import store from "../store";
import { NotebooksRoutes } from "../actions/routes/types";


export function* loadingNotebooks() {
  try {
    const bookRoutes: NotebooksRoutes = store.getState().routes.api.notebooks;
    const res = yield call(axios.get, process.env.REACT_APP_BACKEND_API + bookRoutes.allByUser, configToken());

    yield put(notebooksLoaded(res.data));
  } catch (err) {
    yield put(notebooksLoadError());
  }
}

export function* creatingNotebook(action: IActionNotebook) {
  try {
    const bookRoutes: NotebooksRoutes = store.getState().routes.api.notebooks;
    const res = yield call(axios.post, process.env.REACT_APP_BACKEND_API + bookRoutes.create, action.payload, configToken());

    yield put(notebookCreated(res.data));

  } catch (err) {
    yield put(notebookCreateError());
  }
}

import { call, put } from "redux-saga/effects";
import configToken from "../helpers/configToken";
import { booksLoaded, booksLoadError, bookCreated, bookCreateError } from "../actions/Books/index";
import axios from "axios";
import { IActionBook } from "../contracts/Requests/IBookRequest";
import store from "../store";
import { IBooksRoutes } from "../actions/routes/types";


export function* loadingBooks() {
  try {
    const bookRoutes: IBooksRoutes = store.getState().routes.api.books;
    const res = yield call(axios.get, process.env.REACT_APP_BACKEND_API + bookRoutes.allByUser, configToken());

    yield put(booksLoaded(res.data));
  } catch (err) {
    yield put(booksLoadError());
  }
}

export function* creatingBook(action: IActionBook) {
  try {
    const bookRoutes: IBooksRoutes = store.getState().routes.api.books;
    const res = yield call(axios.post, process.env.REACT_APP_BACKEND_API + bookRoutes.create, action.payload, configToken());

    yield put(bookCreated(res.data));

  } catch (err) {
    yield put(bookCreateError());
  }
}

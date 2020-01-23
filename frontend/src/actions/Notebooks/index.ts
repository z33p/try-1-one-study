import { action } from "typesafe-actions";
import { NotebooksActionTypes, INotebook } from "./types";
import { INotebookRequest } from "../../contracts/Requests/IBookRequest";

// Load
export const loadNotebooks = () => action(NotebooksActionTypes.LOADING_NOTEBOOKS);

export const notebooksLoaded = (books: INotebook[]) =>
  action(NotebooksActionTypes.NOTEBOOKS_LOADED, books);

export const notebooksLoadError = () => action(NotebooksActionTypes.NOTEBOOKS_LOAD_ERROR);

// Create
export const createNotebook = (book: INotebookRequest) =>
  action(NotebooksActionTypes.CREATING_NOTEBOOK, book);

export const notebookCreated = (book: INotebook) =>
  action(NotebooksActionTypes.NOTEBOOK_CREATED, book);

export const notebookCreateError = () => action(NotebooksActionTypes.NOTEBOOK_CREATE_ERROR);

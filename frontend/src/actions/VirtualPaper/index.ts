import { action } from "typesafe-actions";
import { VirtualPapersActionTypes, INotebook } from "./types";
import { INotebookRequest } from "../../contracts/Requests/INoteBookRequest";
import { IVirtualPaperRequest } from "contracts/Requests/IVirtualPaperRequest";

// Load
export const loadNotebooks = () =>
  action(VirtualPapersActionTypes.LOADING_NOTEBOOKS);

export const notebooksLoaded = (books: INotebook[]) =>
  action(VirtualPapersActionTypes.NOTEBOOKS_LOADED, books);

export const notebooksLoadError = () =>
  action(VirtualPapersActionTypes.NOTEBOOKS_LOAD_ERROR);

// Create
export const createNotebook = (notebook: INotebookRequest) =>
  action(VirtualPapersActionTypes.CREATING_NOTEBOOK, notebook);

export const notebookCreated = (notebook: INotebook) =>
  action(VirtualPapersActionTypes.NOTEBOOK_CREATED, notebook);

export const notebookCreateError = () =>
  action(VirtualPapersActionTypes.NOTEBOOK_CREATE_ERROR);

export const createVirtualPaper = (requestParams: IVirtualPaperRequest) =>
  action(VirtualPapersActionTypes.CREATING_VIRTUAL_PAPER, requestParams);

export const virtualPaperCreated = (payload: IVirtualPaperRequest) =>
  action(VirtualPapersActionTypes.VIRTUAL_PAPER_CREATED, payload);

export const virtualPaperCreateError = () =>
  action(VirtualPapersActionTypes.VIRTUAL_PAPER_CREATE_ERROR);

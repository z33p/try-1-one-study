import {
  VirtualPapersActionTypes,
  Notebook,
  NotebookRequest,
  PaperRequest,
} from "./types";

// Load
export const loadNotebooks = () => ({
  type: VirtualPapersActionTypes.LOADING_NOTEBOOKS,
});

export function notebooksLoaded(payload: Notebook[]) {
  return {
    type: VirtualPapersActionTypes.NOTEBOOKS_LOADED,
    payload,
  };
}

export const notebooksLoadError = () => ({
  type: VirtualPapersActionTypes.NOTEBOOKS_LOAD_ERROR,
});

// Create
export function createNotebook(payload: NotebookRequest) {
  return {
    type: VirtualPapersActionTypes.CREATING_NOTEBOOK,
    payload,
  };
}

export function notebookCreated(payload: Notebook) {
  return {
    type: VirtualPapersActionTypes.NOTEBOOK_CREATED,
    payload,
  };
}

export const notebookCreateError = () => ({
  type: VirtualPapersActionTypes.NOTEBOOK_CREATE_ERROR,
});

export function createVirtualPaper(payload: PaperRequest) {
  return {
    type: VirtualPapersActionTypes.CREATING_PAPER,
    payload,
  };
}

export function paperCreated(payload: PaperRequest) {
  return {
    type: VirtualPapersActionTypes.PAPER_CREATED,
    payload,
  };
}

export const paperCreateError = () => ({
  type: VirtualPapersActionTypes.PAPER_CREATE_ERROR,
});

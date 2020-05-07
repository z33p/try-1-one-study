import { IVirtualPaper } from "actions/VirtualPapers/types";

export enum NotebooksActionTypes {
  // ACTIONS
  NOTEBOOKS_LOADED = "NOTEBOOKS_LOADED",
  NOTEBOOKS_LOAD_ERROR = "NOTEBOOKS_LOAD_ERROR",
  NOTEBOOK_CREATED = "NOTEBOOK_CREATED",
  NOTEBOOK_CREATE_ERROR = "NOTEBOOK_CREATE_ERROR",

  // SAGAS
  LOADING_NOTEBOOKS = "LOADING_NOTEBOOKS",
  CREATING_NOTEBOOK = "CREATING_NOTEBOOK",
}

export interface INotebook {
  id: number;
  title: string;
  detail: string;
  virtual_papers: IVirtualPaper;
}

export interface NotebooksState {
  data: INotebook[];
  isLoading: boolean;
}

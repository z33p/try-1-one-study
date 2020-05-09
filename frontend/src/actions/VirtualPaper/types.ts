export interface IVirtualPaper {
  id: number;
  title: string;
  body: string;
}

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

export interface VirtualPaperState {
  notebooks: INotebook[];
  isLoading: boolean;
}

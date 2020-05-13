export enum VirtualPapersActionTypes {
  // ACTIONS
  NOTEBOOKS_LOADED = "NOTEBOOKS_LOADED",
  NOTEBOOKS_LOAD_ERROR = "NOTEBOOKS_LOAD_ERROR",
  NOTEBOOK_CREATED = "NOTEBOOK_CREATED",
  NOTEBOOK_CREATE_ERROR = "NOTEBOOK_CREATE_ERROR",
  PAPER_CREATED = "PAPER_CREATED",
  PAPER_CREATE_ERROR = "PAPER_CREATE_ERROR",

  // SAGAS
  LOADING_NOTEBOOKS = "LOADING_NOTEBOOKS",
  CREATING_NOTEBOOK = "CREATING_NOTEBOOK",
  CREATING_PAPER = "CREATING_PAPER",
}

export interface Paper {
  id: number;
  title: string;
  body: string;
}

export interface ActionPaper {
  type: string;
  payload: {
    notebookId: number;
    paper: Paper;
  };
}

export interface PaperRequest {
  notebookId: number;
  paper: { title: string; body?: string };
}

export interface Notebook {
  id: number;
  title: string;
  detail?: string;
  papers: Paper[];
}

export interface ActionNotebook {
  type: string;
  payload: Notebook;
}

export interface NotebookRequest {
  title: string;
  detail?: string;
}

export interface VirtualPaperState {
  notebooks: Notebook[];
  isLoading: boolean;
}

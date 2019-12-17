export enum VirtualDocsTypes {
  // Action
  VDOCS_LOADED = "VDOCS_LOADED",
  VDOCS_LOAD_ERROR = "VDOCS_LOAD_ERROR",

  // Sagas
  LOADING_VDOCS = "LOADING_VDOCS"
}

export interface IVirtualDoc {
  id: number;
  title: string;
  body: string;
}

export interface VirtualDocsState {
  vdocs: IVirtualDoc[];
}

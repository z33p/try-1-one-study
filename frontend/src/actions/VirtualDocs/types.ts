export interface IVirtualDoc {
  id: number;
  title: string;
  body: string;
}

export interface VirtualDocsState {
  vdocs: IVirtualDoc[];
}

export enum VirtualDocsTypes {
  // ACTIONS
  VDOCS_LOADED = "VDOCS_LOADED",
  VDOCS_LOAD_ERROR = "VDOCS_LOAD_ERROR",
  VDOC_CREATED = "VDOCS_CREATED",
  VDOC_CREATE_ERROR = "VDOCS_CREATE_ERROR",

  // SAGAS
  LOADING_VDOCS = "LOADING_VDOCS",
  CREATING_VDOC = "CREATING_VDOCS"
}

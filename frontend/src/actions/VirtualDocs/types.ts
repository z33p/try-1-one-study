export enum VirtualDocsTypes {
  // Action
  VDOCS_LOADED = "VDOCS_LOADED",
  VDOCS_LOAD_ERROR = "VDOCS_LOAD_ERROR",
  VDOC_CREATED = "VDOCS_CREATED",
  VDOC_CREATE_ERROR = "VDOCS_CREATE_ERROR",

  // Sagas
  LOADING_VDOCS = "LOADING_VDOCS",
  CREATING_VDOC = "CREATING_VDOCS"
}

export interface IVirtualDoc {
  id: number;
  title: string;
  body: string;
}

export interface IVirtualDocsState {
  vdocs: IVirtualDoc[];
}

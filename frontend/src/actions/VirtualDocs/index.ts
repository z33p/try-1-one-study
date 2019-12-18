import { action } from "typesafe-actions";
import { VirtualDocsTypes, IVirtualDoc } from "./types";
import { IVirtualDocRequest } from "../../contracts/Requests/IVirtualDocRequest";

// Load
export const loadVirtualDocs = () => action(VirtualDocsTypes.LOADING_VDOCS);

export const vdocsLoaded = (vdocs: IVirtualDoc[]) =>
  action(VirtualDocsTypes.VDOCS_LOADED, vdocs);

export const vdocsLoadError = () => action(VirtualDocsTypes.VDOCS_LOAD_ERROR);

// Create
export const createVirtualDoc = (vdoc: IVirtualDocRequest) =>
  action(VirtualDocsTypes.CREATING_VDOC, vdoc);

export const vdocCreated = (vdoc: IVirtualDoc) =>
  action(VirtualDocsTypes.VDOC_CREATED, vdoc);

export const vdocCreateError = () => action(VirtualDocsTypes.VDOC_CREATE_ERROR);

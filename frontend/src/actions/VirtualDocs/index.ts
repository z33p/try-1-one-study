import { action } from "typesafe-actions";
import { VirtualDocsTypes, IVirtualDoc } from "./types";

export const loadVirtualDocs = () => action(VirtualDocsTypes.LOADING_VDOCS);

export const vdocsLoaded = (vdocs: IVirtualDoc[]) =>
  action(VirtualDocsTypes.VDOCS_LOADED, vdocs);

export const vdocsloadError = () => action(VirtualDocsTypes.VDOCS_LOAD_ERROR);

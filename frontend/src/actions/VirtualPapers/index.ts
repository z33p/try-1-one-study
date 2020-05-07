import { action } from "typesafe-actions";
import { VirtualPapersTypes, IVirtualPaper } from "./types";
import { IVirtualPaperRequest } from "contracts/Requests/IVirtualPaperRequest";

// Load
export const loadVirtualPapers = () => action(VirtualPapersTypes.LOADING_VDOCS);

export const papersLoaded = (papers: IVirtualPaper[]) =>
  action(VirtualPapersTypes.VDOCS_LOADED, papers);

export const papersLoadError = () =>
  action(VirtualPapersTypes.VDOCS_LOAD_ERROR);

// Create
export const createVirtualPaper = (paper: IVirtualPaperRequest) =>
  action(VirtualPapersTypes.CREATING_VDOC, paper);

export const paperCreated = (paper: IVirtualPaper) =>
  action(VirtualPapersTypes.VDOC_CREATED, paper);

export const paperCreateError = () =>
  action(VirtualPapersTypes.VDOC_CREATE_ERROR);

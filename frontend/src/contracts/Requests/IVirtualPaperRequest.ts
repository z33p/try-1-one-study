import { IVirtualPaper } from "actions/VirtualPapers/types";

export interface IVirtualPaperRequest {
  title: string;
  body?: string;
}
export interface IActionVirtualPaper {
  type: string;
  payload: IVirtualPaper;
}

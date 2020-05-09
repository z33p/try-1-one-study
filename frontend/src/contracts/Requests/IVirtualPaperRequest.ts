import { IVirtualPaper } from "actions/VirtualPaper/types";

export interface IVirtualPaperRequest {
  title: string;
  body?: string;
}
export interface IActionVirtualPaper {
  type: string;
  payload: IVirtualPaper;
}

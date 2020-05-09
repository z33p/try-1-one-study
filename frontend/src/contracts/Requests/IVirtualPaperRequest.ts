import { IVirtualPaper } from "actions/VirtualPaper/types";

export interface IVirtualPaperRequest {
  notebookId: number;
  virtualPaper: { title: string; body?: string };
}
export interface IActionVirtualPaper {
  type: string;
  payload: {
    notebookId: number;
    virtualPaper: IVirtualPaper;
  };
}

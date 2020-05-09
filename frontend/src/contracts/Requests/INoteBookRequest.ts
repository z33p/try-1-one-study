import { INotebook } from "../../actions/VirtualPaper/types";

export interface INotebookRequest {
  title: string;
  detail?: string;
}
export interface IActionNotebook {
  type: string;
  payload: INotebook;
}

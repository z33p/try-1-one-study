import { INotebook } from "../../actions/Notebooks/types";

export interface INotebookRequest {
  title: string,
  detail?: string
}
export interface IActionNotebook {
  type: string;
  payload: INotebook;
}

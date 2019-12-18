import { IVirtualDoc } from "../../actions/VirtualDocs/types";

export interface IVirtualDocRequest {
  title: string,
  body?: string
}
export interface IActionVirtualDoc {
  type: string;
  payload: IVirtualDoc;
}

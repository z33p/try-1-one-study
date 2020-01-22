import { IBook } from "../../actions/Books/types";

export interface IBookRequest {
  title: string,
  detail?: string
}
export interface IActionBook {
  type: string;
  payload: IBook;
}

export enum ErrorTypes {
  GET_ERROR = "GET_ERROR"
}

export interface IErrorState {
  msg: string | null,
  status: number | null
}

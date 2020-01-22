export enum AlertTypes {
  SET_MESSAGE = "CREATE_MESSAGE",
  SET_ERROR = "SET_ERROR"

}
export interface IErrorState {
  text: string | null,
  status: number | null
}

export interface IMessageState {
  text: string
}

export interface AlertState {
  error: IErrorState,
  message: IMessageState
}
export interface ICredentials {
  email: string;
  password: string;
}

// It is an action
export interface IAuthRequest {
  type: string;
  payload: ICredentials;
}

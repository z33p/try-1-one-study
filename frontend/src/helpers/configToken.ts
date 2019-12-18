import store from "../store";

export default function configToken() {
  const config = {
    headers: {
      authorization: "Bearer " + store.getState().auth.token
    }
  };

  return config;
}

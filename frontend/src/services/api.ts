import axios from "axios";
import store from "../store";

const api = axios.create({
  headers: {
    authorization: "Bearer " + store.getState().auth.token
  }
});

export default api;

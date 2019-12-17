import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store";
import { loginUser } from "../actions/auth";
import { ICredentials } from "../contracts/IAuthRequest";

const App: React.FC = () => {
  useEffect(() => {
    // Component did mount
    let credentials: ICredentials = {
      email: "z33p@gmail.com",
      password: "#Z33333p"
    };

    store.dispatch(loginUser(credentials));
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello world</h1>
      </div>
    </Provider>
  );
};

export default App;

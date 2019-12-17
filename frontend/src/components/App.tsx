import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store";
import { loginUser } from "../actions/auth";
import { ICredentials } from "../contracts/Requests/IAuthRequest";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";

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
      <Router>
        <div className="App">
          <h1>App Component</h1>
          <Main />
        </div>
      </Router>
    </Provider>
  );
};

export default App;

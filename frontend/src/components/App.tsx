import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store";
import { loginUser } from "../actions/auth";
import { ICredentials } from "../contracts/Requests/IAuthRequest";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./Alerts.jsx";

const App: React.FC = () => {
  useEffect(() => {
    // Component did mount
    const credentials: ICredentials = {
      email: "z33p@gmail.com",
      password: "#Z33333p"
    };

    store.dispatch(loginUser(credentials));

  }, []);

  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} timeout={3500}>
        <Router>
          <div className="App">
            <Alerts />
            <h1>App Component</h1>
            <Main />
          </div>
        </Router>
      </AlertProvider>

    </Provider>
  );
};

export default App;

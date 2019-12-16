import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store";
import { loadRequest } from "../actions/auth";

const App: React.FC = () => {
  useEffect(() => {
    // Component did mount
    store.dispatch(loadRequest());
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

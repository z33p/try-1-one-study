import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import store from "../../redux/store";
import LoginPage from "./LoginPage";

describe("LoginPage component tests", () => {
  it("should login a user", () => {
    const history = createMemoryHistory();

    const tree = render(
      <ReduxProvider store={store}>
        <Router history={history}>
          <LoginPage />
        </Router>
      </ReduxProvider>
    );
    const loginInput = tree.getByTestId("login");

    const passwordInput = tree.getByTestId("password");

    expect(loginInput.nodeName).toEqual("INPUT");
    expect(passwordInput.nodeName).toEqual("INPUT");

    const textLogin = "z33p";
    const textPassword = "password123";

    fireEvent.change(loginInput, { target: { value: textLogin } });
    expect(loginInput).toHaveValue(textLogin);

    fireEvent.change(passwordInput, { target: { value: textPassword } });
    expect(passwordInput).toHaveValue(textPassword);

    fireEvent.click(tree.getByTestId("submit"));

    // After submission validation go to root url
    expect(history.location.pathname).toEqual("/");
  });
});

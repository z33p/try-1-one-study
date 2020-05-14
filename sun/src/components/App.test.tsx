import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import store from "../redux/store";
import App from "./App";
import { TextField, Typography } from "@material-ui/core";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("<App /> unit test", () => {
  const getWrapper = () =>
    mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

  it("should add a notebook with given input value as title", () => {
    const wrapper = getWrapper();

    expect(wrapper.find("#no-notebooks").at(0).text()).toEqual("Sem cadernos");

    const title = "Hello";

    wrapper.find("input").simulate("change", { target: { value: title } });

    expect(wrapper.find("input").props().value).toEqual(title);

    wrapper.find("#addNotebook").at(0).simulate("click");

    const NotebookView = wrapper.find("NotebookView");

    expect(NotebookView.find(Typography).at(0).text()).toEqual(title);
  });
});

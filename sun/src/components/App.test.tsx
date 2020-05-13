import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import store from "../redux/store";
import App from "./App";

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

    const title = "Hello";

    expect(wrapper.find("input").props().value).toEqual("World");

    wrapper.find("input").simulate("change", { target: { value: title } });
    wrapper.find("button").simulate("click");

    expect(wrapper.find("NotebookView").text()).toEqual(title);
  });
});

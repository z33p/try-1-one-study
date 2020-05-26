import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";
import VirtualPapersPage from "./VirtualPapersPage";
import { render, fireEvent } from "@testing-library/react";
import { varNameToString } from "./helpers";

describe("VirtualPapers component tests", () => {
  it("should add a notebook with given input value as title", () => {
    const tree = render(
      <ReduxProvider store={store}>
        <VirtualPapersPage />
      </ReduxProvider>
    );

    const titleInput = tree.getByTestId("inputNotebookTitle")?.firstChild
      ?.firstChild;

    if (!titleInput)
      throw Error(`${varNameToString(titleInput)} is undefined or null`);

    expect(titleInput.nodeName).toEqual("INPUT");

    const textNotebookTitle = "hello";

    fireEvent.change(titleInput, { target: { value: textNotebookTitle } });

    expect(titleInput).toHaveValue(textNotebookTitle);

    fireEvent.click(tree.getByTestId("addNotebook"));

    const notebookTitleList = tree.getAllByTestId("notebookTitle");

    expect(notebookTitleList[0]).toHaveTextContent(textNotebookTitle);
  });
});

import React from "react";
import { connect } from "react-redux";
import { createNotebook } from "../../../actions/VirtualPaper/index";
import { INotebookRequest } from "../../../contracts/Requests/INoteBookRequest";

interface CraftBarProps {}

interface DispatchProps {
  createNotebook(notebook: INotebookRequest): void;
}

type Props = CraftBarProps & DispatchProps;

const CraftBar: React.FC<Props> = ({ createNotebook }) => {
  return (
    <div className="">
      <h3 className="">Craft Bar</h3>
      <div className="w-full">
        <button
          className="text-white bg-blue-500"
          onClick={() => {
            let title = prompt("Insira o título do documento?");
            if (title) createNotebook({ title });
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default connect(null, { createNotebook })(CraftBar);

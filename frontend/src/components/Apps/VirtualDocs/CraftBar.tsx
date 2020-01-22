import React from "react";
import { connect } from "react-redux";
import { createBook } from "../../../actions/Books/index";
import { IBookRequest } from "../../../contracts/Requests/IBookRequest";

interface CraftBarProps {}

interface DispatchProps {
  createBook(book: IBookRequest): void;
}

type Props = CraftBarProps & DispatchProps;

const CraftBar: React.FC<Props> = ({ createBook }) => {
  return (
    <div className="">
      <h3 className="">Craft Bar</h3>
      <div className="w-full">
        <button
          className="text-white bg-blue-500"
          onClick={() => {
            let title = prompt("Insira o título do documento?");
            if (title) createBook({ title });
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default connect(null, { createBook })(CraftBar);

import React from "react";
import { connect } from "react-redux";
import { createVirtualDoc } from "../../../actions/VirtualDocs/index";
import { IVirtualDocRequest } from "../../../contracts/Requests/IVirtualDocRequest";

interface CraftBarProps {}

interface DispatchProps {
  createVirtualDoc(vdoc: IVirtualDocRequest): void;
}

type Props = CraftBarProps & DispatchProps;

const CraftBar: React.FC<Props> = ({ createVirtualDoc }) => {
  return (
    <div className="">
      <h3 className="">Craft Bar</h3>
      <div className="w-full">
        <button
          className="text-white bg-blue-500"
          onClick={() => {
            let title = prompt("Insira o título do documento?");
            if (title) createVirtualDoc({ title });
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default connect(null, { createVirtualDoc })(CraftBar);

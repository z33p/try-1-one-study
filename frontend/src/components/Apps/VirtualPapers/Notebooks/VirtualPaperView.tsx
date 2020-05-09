import React from "react";
import { IVirtualPaper } from "actions/VirtualPaper/types";

interface Props {
  virtualPaper: IVirtualPaper;
}

const VirtualPaperView: React.FC<Props> = ({ virtualPaper }) => {
  return (
    <div>
      <h1>{virtualPaper.title}</h1>
    </div>
  );
};

export default VirtualPaperView;

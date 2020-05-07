import React from "react";
import { RouteComponentProps } from "react-router-dom";

type TParams = { notebook_id: string };

interface MatchProps extends RouteComponentProps<TParams> {}

const EditVirtualPaper: React.FC<MatchProps> = ({ match }) => {
  return (
    <div className="">
      <h1>Hello {match.params.notebook_id}</h1>
    </div>
  );
};

export default EditVirtualPaper;

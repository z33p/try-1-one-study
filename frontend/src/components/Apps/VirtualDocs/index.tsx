import React, { useEffect } from "react";
import { IVirtualDoc } from "../../../actions/VirtualDocs/types";
import { AppState } from "../../../store";
import { connect } from "react-redux";
import { loadVirtualDocs } from "../../../actions/VirtualDocs";
import CraftBar from "./CraftBar";

interface StateProps {
  vdocs: IVirtualDoc[];
}

interface DispatchProps {
  loadVirtualDocs(): void;
}

type Props = StateProps & DispatchProps;

// interface IVirtualDocsProps {}

const VirtualDocs: React.FC<Props> = ({ loadVirtualDocs, vdocs }) => {
  useEffect(() => {
    loadVirtualDocs();
  }, [loadVirtualDocs]);

  return (
    <div>
      <h3>VirtualDocs App</h3>
      <CraftBar />
      {vdocs.map(vdoc => (
        <ul key={vdoc.id}>
          <li>
            <h3>{vdoc.title}</h3>
            <p>{vdoc.body}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  vdocs: state.vdocs.vdocs
});

export default connect(mapStateToProps, { loadVirtualDocs })(VirtualDocs);

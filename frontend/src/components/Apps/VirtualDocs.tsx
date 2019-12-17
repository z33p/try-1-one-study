import React, { useEffect } from "react";
import { IVirtualDoc } from "../../actions/VirtualDocs/types";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import { loadVirtualDocs } from "../../actions/VirtualDocs";

interface StateProps {
  vdocs: IVirtualDoc[];
}

interface DispatchProps {
  loadVirtualDocs(): void;
}

type Props = StateProps & DispatchProps;

interface IVirtualDocsProps {}

const VirtualDocs: React.FC<Props> = ({ loadVirtualDocs }) => {
  useEffect(() => {
    loadVirtualDocs();
  }, []);
  return (
    <div>
      <h3>VirtualDocs App</h3>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  vdocs: state.vdocs.vdocs
});

export default connect(mapStateToProps, { loadVirtualDocs })(VirtualDocs);

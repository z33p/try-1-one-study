import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

class Alerts extends Component {
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (prevProps.error !== error) alert.error(error.text);

    if (prevProps.message !== message) alert.success(message.text);
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.alert.error,
  message: state.alert.message
});

export default connect(mapStateToProps)(withAlert()(Alerts));

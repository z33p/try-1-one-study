import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";

interface LoginProps { }

type Props = LoginProps & RouteComponentProps<any>;

const Login: React.FC<Props> = ({ history }) => {
  useEffect(() => {
    // Debug
    setInterval(() => {
      history.push("/home/virtual_docs");
    }, 1000);
  }, [history]);

  return (
    <div className="">
      <h3>Login Page</h3>
    </div>
  );
};

export default withRouter(Login);

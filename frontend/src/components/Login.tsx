import React, { useState, useEffect } from "react";
import { loginUser } from "../actions/auth/index";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ICredentials } from "../contracts/Requests/IAuthRequest";
import { AppState } from "../store";

interface StateProps {
  isAuthenticated: boolean
}

interface DispatchProps {
  loginUser(credentials: ICredentials): void;
}

type Props = DispatchProps & StateProps & RouteComponentProps<any>;

const Login: React.FC<Props> = ({ loginUser, isAuthenticated, history }) => {
  useEffect(() => {
    if (isAuthenticated) history.push("/home/virtual_docs")
  }, [isAuthenticated, history])

  const credentials: ICredentials = {
    email: "z33p@gmail.com",
    password: "#Z33333p"
  };

  const [email, setEmail] = useState(credentials.email);
  const [password, setPassword] = useState(credentials.password);

  return (
    <div className="text-center border shadow-lg">
      <div className="inline-block">
        <h1>Login Page</h1>
        <div className="p-4">
          <input
            name="email"
            className="block my-3 p-2 w-64 border focus:border-blue-500 text-center"
            type="email"
            placeholder="USERNAME"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <input
            name="password"
            className="block my-3 p-2 w-64 border focus:border-blue-500 text-center"
            type="password"
            placeholder="PASSWORD"
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
          <div className="w-64 text-right">
            <button
              className="mt-2 bottom-0 right-0 text-white bg-purple-600 hover:bg-purple-500 border hover:border-blue-400"
              onClick={() => loginUser({ email, password}) }
            >
              ENTRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { loginUser })(withRouter(Login));

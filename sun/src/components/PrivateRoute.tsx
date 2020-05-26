import React from "react";
import { AppState } from "../redux/store";
import { useSelector } from "react-redux";
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from "react-router-dom";
import { Typography, Box } from "@material-ui/core";

interface Props extends RouteProps {
  component: React.FC<RouteComponentProps>;
}

const PrivateRoute: React.FC<Props> = (props) => {
  const auth = useSelector((state: AppState) => state.auth);

  if (auth.isLoading)
    return (
      <Route {...props}>
        <Box>
          <Typography variant="h3">Loading...</Typography>
        </Box>
      </Route>
    );

  if (!auth.isAuthenticated) return <Redirect to="/login" />;

  return <Route {...props} component={props.component} />;
};

export default PrivateRoute;

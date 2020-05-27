import React, { useEffect } from "react";
import { Typography, Box, Grid, Button, Paper, Link } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { blue } from "@material-ui/core/colors";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { useHistory } from "react-router-dom";

const LoginPage: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: AppState) => state.auth.isAuthenticated
  );

  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) history.push("/");
  }, [history, isAuthenticated]);

  return (
    <Grid container direction="column" justify="space-evenly">
      <Box px={1}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Paper elevation={3}>
              <Box p={3}>
                <LoginForm />
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Grid container justify="flex-end">
              <Box pr={2}>
                <Link
                  href="#"
                  onClick={(e: React.MouseEvent) => e.preventDefault()}
                >
                  <strong>Criar conta</strong>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Grid
        container
        direction="row"
        alignItems="stretch"
        justify="space-evenly"
      >
        <Button variant="outlined">
          <Typography variant="overline">
            <strong>Login com Google</strong>
          </Typography>
        </Button>
        <Button variant="outlined" style={{ backgroundColor: blue[700] }}>
          <Typography variant="overline">
            <strong style={{ color: "white" }}>Login com Facebook</strong>
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginPage;

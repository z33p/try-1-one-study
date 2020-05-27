import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Grid,
  Button,
  IconButton,
  Link,
  InputBaseComponentProps,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useDispatch } from "react-redux";
import { loadSucess } from "../../redux/actions/auth";
import { User } from "../../redux/actions/auth/types";

const LoginForm: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const user: User = {
      id: "#0",
      email: login,
      username: login,
    };

    dispatch(loadSucess(user));
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Grid container direction="column" spacing={2} alignItems="center">
        <Grid item>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="login">Email ou usuário</InputLabel>
                <Input
                  id="login"
                  inputProps={
                    {
                      "data-testid": "login",
                    } as InputBaseComponentProps
                  }
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  required
                />
              </FormControl>
            </Grid>
            <Grid item>
              <PersonIcon color="secondary" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="password">Senha</InputLabel>
                <Input
                  id="password"
                  inputProps={
                    {
                      "data-testid": "password",
                    } as InputBaseComponentProps
                  }
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormControl>
            </Grid>

            <Grid item>
              <IconButton
                style={{ margin: "0", padding: "0" }}
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={() => {}}
              >
                {showPassword ? (
                  <VisibilityIcon color="secondary" />
                ) : (
                  <VisibilityOff color="secondary" />
                )}
              </IconButton>
            </Grid>
          </Grid>
          <Link
            href="#"
            variant="caption"
            color="secondary"
            onClick={(e: React.MouseEvent) => e.preventDefault()}
          >
            Esqueceu a senha?
          </Link>
        </Grid>

        <Grid item>
          <Button
            data-testid="submit"
            variant="contained"
            color="secondary"
            type="submit"
          >
            Entrar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;

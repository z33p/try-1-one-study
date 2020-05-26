import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import PersistentDrawer from "./PersistentDrawer";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";
import MainRoutes from "./MainRoutes";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#00e676",
      },
    },
  });

  return (
    <React.StrictMode>
      <ReduxProvider store={store}>
        <RouterProvider>
          <ThemeProvider theme={theme}>
            <PersistentDrawer />
            <MainRoutes />
          </ThemeProvider>
        </RouterProvider>
      </ReduxProvider>
    </React.StrictMode>
  );
}

export default App;

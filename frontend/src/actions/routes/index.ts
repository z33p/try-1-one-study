import { action } from "typesafe-actions";
import { RoutesTypes, RoutesState } from "./types";

// Load
export const loadRoutes = () => action(RoutesTypes.LOADING_ROUTES);

export const routesLoaded = (routes: RoutesState) =>
  action(RoutesTypes.ROUTES_LOADED, routes);

export const routesError = () => action(RoutesTypes.ROUTES_LOAD_ERROR);

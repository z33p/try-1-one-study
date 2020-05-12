import { RoutesTypes, RoutesActionPayload } from "./types";

export const loadRoutes = () => ({
  type: RoutesTypes.LOADING_ROUTES,
});

export function routesLoaded(routes: RoutesActionPayload) {
  return {
    type: RoutesTypes.ROUTES_LOADED,
    payload: routes,
  };
}

export const routesError = () => ({
  type: RoutesTypes.ROUTES_LOAD_ERROR,
});

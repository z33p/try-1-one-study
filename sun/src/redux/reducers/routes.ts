import { Reducer } from "redux";
import { RoutesState, RoutesTypes } from "../actions/routes/types";

const uranus = "/api";
const auth = "/auth";

const version: string = "/v1";

const INITIAL_STATE: RoutesState = {
  auth: {
    root: auth,
    login: `${auth}/login`,
    register: `${auth}/register`,
    user: `${auth}/user`,
  },
  uranus: {
    root: uranus,
    notebooks: {
      allByUser: `${uranus}${version}/notebooks`,
      index: `${uranus}${version}/notebooks/:notebookId`,
      create: `${uranus}${version}/notebooks`,
      allVirtualPapers: `${uranus}${version}/notebooks/:notebookId/virtualPapers`,
    },

    virtualPapers: {
      index: `${uranus}${version}/virtualPapers/:vPaperId`,
      create: `${uranus}${version}/notebooks/:notebookId/virtualPapers`,
    },

    boards: {
      create: `${uranus}${version}/boards`,
      allByUser: `${uranus}${version}/boards`,
      index: `${uranus}${version}/boards/:userId`,
    },

    tasks: {
      create: `${uranus}${version}/boards/:boardId/tasks`,
      allByBoard: `${uranus}${version}/boards/:boardId/tasks`,
    },
  },
};

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RoutesTypes.ROUTES_LOADED:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

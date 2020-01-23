import { Reducer } from "redux";
import { RoutesState, RoutesTypes } from "../actions/routes/types";

const version: string = "/v1";

// const version: string = "/api" + version;

const INITIAL_STATE: RoutesState = {
  api: {
    users: {
      all: version + "/users",
      index: version + "/users/:user_id",
      create: version + "/users"
    },

    notebooks: {
      allByUser: `${version}/notebooks`,
      index: `${version}/notebooks/:notebook_id`,
      create: `${version}/notebooks`,
      allVirtualDocs: `${version}/notebooks/:notebook_id/virtual_docs`,
    },

    virtual_docs: {
      index: `${version}/virtual_docs/:vDoc_id`,
      create: `${version}/notebooks/:notebook_id/virtual_docs`,
    },

    boards: {
      create: version + "/boards",
      allByUser: version + "/boards",
      index: version + "/boards/:user_id"
    },

    tasks: {
      create: version + "/boards/:board_id/tasks",
      allByBoard: version + "/boards/:board_id/tasks"
    }
  }
};

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RoutesTypes.ROUTES_LOADED:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default reducer;

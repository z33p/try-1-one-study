import {
  VirtualDocsTypes,
  IVirtualDocsState
} from "../actions/VirtualDocs/types";
import { Reducer } from "redux";

const INITIAL_STATE: IVirtualDocsState = {
  vdocs: []
};

const reducer: Reducer<IVirtualDocsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VirtualDocsTypes.VDOCS_LOADED:
      return {
        ...state,
        vdocs: action.payload
      };

    case VirtualDocsTypes.VDOC_CREATED:
      return {
        ...state,
        vdocs: [...state.vdocs, action.payload]
      };

    default:
      return state;
  }
};

export default reducer;

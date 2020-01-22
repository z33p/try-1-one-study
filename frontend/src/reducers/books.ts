import {
    BooksActionTypes,
    BooksState
  } from "../actions/Books/types";
  import { Reducer } from "redux";
  
  const INITIAL_STATE: BooksState = {
    books: []
  };
  
  const reducer: Reducer<BooksState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case BooksActionTypes.BOOKS_LOADED:
        return {
          ...state,
          books: action.payload
        };
  
      case BooksActionTypes.BOOK_CREATED:
        return {
          ...state,
          books: [...state.books, action.payload]
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  
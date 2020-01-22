export enum BooksActionTypes {
    // Action
    BOOKS_LOADED = "BOOKS_LOADED",
    BOOKS_LOAD_ERROR = "BOOKS_LOAD_ERROR",
    BOOK_CREATED = "BOOKS_CREATED",
    BOOK_CREATE_ERROR = "BOOKS_CREATE_ERROR",
  
    // Sagas
    LOADING_BOOKS = "LOADING_BOOKS",
    CREATING_BOOK = "CREATING_BOOKS"
  }
  
  export interface IBook {
    id: number;
    title: string;
    detail: string;
  }
  
  export interface BooksState {
    books: IBook[];
  }
  
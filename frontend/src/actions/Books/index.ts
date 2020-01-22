import { action } from "typesafe-actions";
import { BooksActionTypes, IBook } from "./types";
import { IBookRequest } from "../../contracts/Requests/IBookRequest";

// Load
export const loadBooks = () => action(BooksActionTypes.LOADING_BOOKS);

export const booksLoaded = (books: IBook[]) =>
  action(BooksActionTypes.BOOKS_LOADED, books);

export const booksLoadError = () => action(BooksActionTypes.BOOKS_LOAD_ERROR);

// Create
export const createBook = (book: IBookRequest) =>
  action(BooksActionTypes.CREATING_BOOK, book);

export const bookCreated = (book: IBook) =>
  action(BooksActionTypes.BOOK_CREATED, book);

export const bookCreateError = () => action(BooksActionTypes.BOOK_CREATE_ERROR);

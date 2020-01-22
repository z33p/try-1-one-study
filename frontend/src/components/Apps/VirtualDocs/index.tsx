import React, { useEffect } from "react";
import { AppState } from "../../../store";
import { connect } from "react-redux";
import CraftBar from "./CraftBar";
import { IBook } from "../../../actions/Books/types";
import { loadBooks } from "../../../actions/Books/index";
import BookView from "./BookView";

interface StateProps {
  books: IBook[];
}

interface DispatchProps {
  loadBooks(): void;
}

type Props = StateProps & DispatchProps;

const Books: React.FC<Props> = ({ loadBooks, books }) => {
  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  return (
    <div>
      <h3>Books App</h3>
      <CraftBar />
      <nav className="flex justify-around p-4">
        {books.map(book => <BookView key={book.id} book={book} />)}
      </nav>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  books: state.books.books
});

export default connect(mapStateToProps, { loadBooks })(Books);

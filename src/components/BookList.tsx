/* eslint-disable react/no-unused-prop-types */
import * as React from "react";

type IProps = {
  books: Array<{ name: string; id: number }>;
  error: boolean;
  loading: boolean;
};

function BookList({ loading, error, books }: IProps) {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error...</p>;
  }
  return (
    <div data-test="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <h2 className="title">{book.name}</h2>
        </div>
      ))}
    </div>
  );
}
export default BookList;

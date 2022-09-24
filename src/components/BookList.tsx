import * as React from "react";

type IProps = {
  books: Array<{ name: string }>;
};

function BookList({ books }: IProps) {
  return (
    <div data-test="book-list">
      {books.map((book) => (
        <div className="book-item">
          <h2 className="title">{book.name}</h2>
        </div>
      ))}
    </div>
  );
}
export default BookList;

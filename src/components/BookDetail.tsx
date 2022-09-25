import React from "react";

import { BookType } from "../models";

type IProps = {
  book: BookType;
};

function BookDetail(props: IProps) {
  const { book } = props;
  return (
    <div className="detail">
      <h2 className="book-title">{book.name}</h2>
      {book.description ? (
        <p className="book-description">{book.description}</p>
      ) : (
        ""
      )}
    </div>
  );
}
export default BookDetail;

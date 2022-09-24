/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { useRemoteService } from "../hooks/useRemoteService";
import BookList from "./BookList";

function BookListContainer() {
  const { data, loading, error } = useRemoteService([]);
  return <BookList books={data} error={error} loading={loading} />;
}
export default BookListContainer;

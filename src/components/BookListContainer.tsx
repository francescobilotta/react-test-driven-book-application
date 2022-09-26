import React, { useEffect, useState } from "react";

import { useRemoteService } from "../hooks/useRemoteService";
import BookList from "./BookList";
import SearchBox from "./SearchBox";

function BookListContainer() {
  const [term, setTerm] = useState("");
  const { data, loading, error, setUrl } = useRemoteService(
    "http://localhost:8080/books",
    []
  );
  useEffect(() => {
    setUrl(`http://localhost:8080/books?q=${term}`);
  }, [term]);
  const onSearch = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setTerm(event.target.value);
  return (
    <>
      <SearchBox term={term} onSearch={onSearch} />
      <BookList books={data} error={error} loading={loading} />;
    </>
  );
}
export default BookListContainer;

import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get("http://localhost:8080/books");
      setBooks(res.data);
    };
    fetchBooks();
  }, []);
  return (
    <div>
      <Typography component="h2" data-test="heading" variant="h2">
        Hello world
      </Typography>
      <BookList books={books} />
    </div>
  );
}

export default App;

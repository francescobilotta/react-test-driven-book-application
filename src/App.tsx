import { Typography } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

import BookDetailContainer from "./components/BookDetailContainer";
import BookListContainer from "./components/BookListContainer";

function App() {
  return (
    <div>
      <Typography component="h2" data-test="heading" variant="h2">
        Hello world
      </Typography>
      <Routes>
        <Route element={<BookListContainer />} path="/" />
        <Route element={<BookDetailContainer />} path="/books/:id" />
      </Routes>
    </div>
  );
}

export default App;

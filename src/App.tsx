import { Typography } from "@mui/material";
import React from "react";

import BookList from "./components/BookList";

function App() {
  const books = [{ name: "Refactoring" }, { name: "Domain-driven design" }];

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

import { Typography } from "@mui/material";
import React from "react";

import BookListContainer from "./components/BookListContainer";

function App() {
  return (
    <div>
      <Typography component="h2" data-test="heading" variant="h2">
        Hello world
      </Typography>
      <BookListContainer />
    </div>
  );
}

export default App;

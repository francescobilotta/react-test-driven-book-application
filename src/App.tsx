import { Typography } from "@mui/material";
import React from "react";

function App() {
  return (
    <div>
      <Typography component="h2" data-test="heading" variant="h2">
        Hello world
      </Typography>
      <div data-test="book-list">
        <div className="book-item" />
        <div className="book-item" />
      </div>
    </div>
  );
}

export default App;

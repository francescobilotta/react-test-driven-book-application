import { TextField } from "@mui/material";
import React from "react";

type Props = {
  onSearch: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  term: string;
};
function SearchBox({ term, onSearch }: Props) {
  return (
    <TextField
      data-test="search"
      label="Search"
      margin="normal"
      value={term}
      variant="outlined"
      onChange={onSearch}
    />
  );
}

export default SearchBox;

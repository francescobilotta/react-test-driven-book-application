import { render } from "@testing-library/react";
import React from "react";

import { BookType } from "../models";
import BookDetail from "./BookDetail";

describe("BookDetail", () => {
  it("renders title", () => {
    const props = {
      book: {
        name: "Refactoring",
      } as BookType,
    };
    const { container } = render(<BookDetail {...props} />);
    const title = container.querySelector(".book-title");
    expect(title!.innerHTML).toEqual(props.book.name);
  });
  it("renders description", () => {
    const props = {
      book: {
        description:
          "Martin Fowler's Refactoring defined core ideas and techniques " +
          "that hundreds of thousands of developers have used to improve " +
          "their software.",
        name: "Refactoring",
      } as BookType,
    };
    const { container } = render(<BookDetail {...props} />);
    const description = container.querySelector("p.book-description");
    expect(description!.innerHTML).toEqual(props.book.description);
  });
});

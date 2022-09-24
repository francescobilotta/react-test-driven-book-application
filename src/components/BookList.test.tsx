import { render } from "@testing-library/react";
import React from "react";

import BookList from "./BookList";

describe("BookList", () => {
  it("error", () => {
    const props = {
      books: [],
      error: true,
      loading: false,
    };
    const { container } = render(<BookList {...props} />);
    const content = container.querySelector("p");
    expect(content!.innerHTML).toContain("Error");
  });

  it("loading", () => {
    const props = {
      books: [],
      error: false,
      loading: true,
    };
    const { container } = render(<BookList {...props} />);
    const content = container.querySelector("p");
    expect(content!.innerHTML).toContain("Loading");
  });

  it("data", () => {
    const props = {
      books: [
        { id: 1, name: "Refactoring" },
        { id: 2, name: "Domain-driven design" },
      ],
      error: false,
      loading: false,
    };
    const { container } = render(<BookList {...props} />);
    const titles = [...container.querySelectorAll("h2")].map(
      (x) => x.innerHTML
    );
    expect(titles).toEqual(["Refactoring", "Domain-driven design"]);
  });
});

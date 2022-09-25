import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter as Router } from "react-router-dom";

import BookDetail from "./BookDetail";
import BookList from "./BookList";

const renderWithRouter = (component: any) => {
  return { ...render(<Router>{component}</Router>) };
};

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

  it("render books", () => {
    const props = {
      books: [
        {
          description:
            "Martin Fowler's Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.",
          id: 1,
          name: "Refactoring",
        },
        {
          description:
            "Explains how to incorporate effective domain modeling into the software development process.",
          id: 2,
          name: "Domain-driven design",
        },
      ],
      error: false,
      loading: false,
    };
    const { container } = renderWithRouter(<BookList {...props} />);
    const titles = [...container.querySelectorAll("h5")].map(
      (x) => x.innerHTML
    );
    expect(titles).toEqual(["Refactoring", "Domain-driven design"]);
  });

  it("displays the book name when no description was given", () => {
    const props = {
      book: {
        id: 1,
        name: "Refactoring",
      },
    };
    const { container } = render(<BookDetail {...props} />);
    const description = container.querySelector("p.book-description");
    expect(description).toBeNull();
  });
});

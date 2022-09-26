import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import SearchBox from "./SearchBox";

describe("SearchBox", () => {
  it("renders input", () => {
    const props = {
      onSearch: jest.fn(),
      term: "",
    };
    const { container } = render(<SearchBox {...props} />);
    const input = container.querySelector('input[type="text"]');
    userEvent.type(input, "domain");
    expect(props.onSearch).toHaveBeenCalled();
  });
});

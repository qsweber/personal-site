import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders nav bar link to portfolio", () => {
  render(<App />);
  const linkElement = screen.getByText(/portfolio/i);
  expect(linkElement).toBeInTheDocument();
});

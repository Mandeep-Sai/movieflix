import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders spinner and home", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId("spinner");
  expect(linkElement).toBeInTheDocument();
  const home = await screen.findByTestId("home");
  expect(home).toBeInTheDocument();
});

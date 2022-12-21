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
// it("renders movie data", async () => {
//   // jest.mock("axios");
//   // const mockedAxios = axios as jest.Mocked<typeof axios>;
//   // mockedAxios.get.mockResolvedValue({ data: response });
//   axios.get = jest.fn().mockResolvedValue({ data: response });
//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
//   const linkElement = screen.getByTestId("spinner");
//   expect(linkElement).toBeInTheDocument();
//   const home = await screen.findByTestId("home");
//   expect(home).toBeInTheDocument();
// });

// it("renders no movies", async () => {
//   // jest.mock("axios");
//   // const mockedAxios = axios as jest.Mocked<typeof axios>;
//   // mockedAxios.get.mockResolvedValue({ data: response });
//   axios.get = jest.fn().mockRejectedValue(new Error("Error"));
//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
//   const linkElement = screen.getByTestId("spinner");
//   expect(linkElement).toBeInTheDocument();
//   const home = await screen.findByTestId("home");
//   expect(home).toBeInTheDocument();
// });

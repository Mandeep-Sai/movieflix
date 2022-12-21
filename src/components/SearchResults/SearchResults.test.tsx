import { render, screen } from "@testing-library/react";
import SearchResults from "./SearchResults";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

const moviesData = [
  {
    backdrop:
      "https://wookie.codesubmit.io/static/backdrops/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    classification: "13+",
    director: "Christopher Nolan",
    genres: ["Action", "Crime", "Drama"],
    id: "d6822b7b-48bb-4b78-ad5e-9ba04c517ec8",
    imdb_rating: 9.0,
    length: "2h 32min",
    overview:
      "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    poster:
      "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
    released_on: new Date("2008-07-16T00:00:00"),
    slug: "the-dark-knight-2008",
    title: "The Dark Knight",
  },
  {
    backdrop:
      "https://wookie.codesubmit.io/static/backdrops/a9d94d6e-4cab-44a9-8eec-d44ad6332b6d.jpg",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    classification: "18+",
    director: "Quentin Tarantino",
    genres: ["Crime", "Drama"],
    id: "a9d94d6e-4cab-44a9-8eec-d44ad6332b6d",
    imdb_rating: 8.9,
    length: "2h 34min",
    overview:
      "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    poster:
      "https://wookie.codesubmit.io/static/posters/a9d94d6e-4cab-44a9-8eec-d44ad6332b6d.jpg",
    released_on: new Date("1994-09-10T00:00:00"),
    slug: "pulp-fiction-1994",
    title: "Pulp Fiction",
  },
];

const response = {
  data: {
    movies: moviesData,
  },
};

it("renders search results", async () => {
  // jest.mock("axios");
  // const mockedAxios = axios as jest.Mocked<typeof axios>;
  // mockedAxios.get.mockResolvedValue({ data: response });
  axios.get = jest.fn().mockResolvedValue(response);
  render(
    <BrowserRouter>
      <SearchResults />
    </BrowserRouter>
  );

  const results = await screen.findByTestId("results");
  expect(results).toBeInTheDocument();
});

it("renders no movies found", async () => {
  axios.get = jest.fn().mockRejectedValue(new Error("Error"));
  render(
    <BrowserRouter>
      <SearchResults />
    </BrowserRouter>
  );

  const noMovies = await screen.findByTestId("no_movies");
  expect(noMovies).toBeInTheDocument();
});

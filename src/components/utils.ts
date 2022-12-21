import axios from "axios";
import { Movie } from "./types";

export const getMoviesCategories = (movies: Movie[]) => {
  let categories: string[] = [];
  movies.forEach((m) => {
    m.genres.forEach((genre) => {
      if (!categories.includes(genre)) {
        categories.push(genre);
      }
    });
  });
  return categories;
};

export const transformDateToYear = (date: Date) => {
  let d = new Date(date);
  return d.getFullYear();
};

export const fetchMovies = async (url: string): Promise<Movie[]> => {
  return await axios
    .get(url, {
      headers: {
        Authorization: "Bearer Wookie2021",
      },
    })
    .then((response) => response.data.movies)
    .catch((error) => console.log(`Error : ${error}`));
};

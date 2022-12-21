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

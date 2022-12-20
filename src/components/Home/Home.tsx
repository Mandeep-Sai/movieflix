import axios from "axios";
import { useEffect, useState } from "react";
import { Movie } from "../types";

const Home = (): JSX.Element => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const fetchMovies = async (url: string): Promise<Movie[]> => {
    return await axios
      .get(url, {
        headers: {
          Authorization: "Bearer Wookie2021",
        },
      })
      .then((response) => response.data.movies)
      .catch((error) => console.log(`Error : ${error}`));
  };

  const getMoviesCategories = (movies: Movie[]) => {
    let categories: string[] = [];
    movies.forEach((m) => {
      m.genres.forEach((genre) => {
        if (!categories.includes(genre)) {
          categories.push(genre);
        }
      });
    });
    setCategories(categories);
  };

  useEffect(() => {
    fetchMovies("https://wookie.codesubmit.io/movies").then((movies) => {
      setMovies(movies);
      getMoviesCategories(movies);
    });
  }, []);
  return (
    <>
      {categories.map((category, index) => {
        return <h1 key={index}>{category}</h1>;
      })}
    </>
  );
};

export default Home;

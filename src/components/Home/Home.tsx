import axios from "axios";
import { useEffect, useState } from "react";
import { Movie } from "../types";

const Home = (): JSX.Element => {
  const [movies, setMovies] = useState<Movie[]>([]);

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

  useEffect(() => {
    fetchMovies("https://wookie.codesubmit.io/movies").then((movies) =>
      setMovies(movies)
    );
  }, []);
  return (
    <>
      <h1>Number of movies : {movies.length}</h1>
    </>
  );
};

export default Home;

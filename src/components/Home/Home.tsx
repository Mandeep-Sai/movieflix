import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Gallery from "../Gallery/Gallery";
import { Movie } from "../types";

const Home = (): JSX.Element => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
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
    setLoading(true);
    fetchMovies("https://wookie.codesubmit.io/movies").then((movies) => {
      if (movies) {
        setMovies(movies);
        getMoviesCategories(movies);
      }
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading ? (
        <Spinner
          animation="border"
          variant="dark"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        />
      ) : (
        <>
          {movies.length > 0 ? (
            <>
              {categories.map((category, index) => {
                return (
                  <Gallery
                    key={index}
                    category={category}
                    movies={movies}
                  ></Gallery>
                );
              })}
            </>
          ) : (
            <h1>No Movies</h1>
          )}
        </>
      )}
    </>
  );
};

export default Home;

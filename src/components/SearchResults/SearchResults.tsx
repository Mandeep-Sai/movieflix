import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Movie } from "../types";
import "./SearchResults.css";
const SearchResults = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const { query } = useParams();

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
    setLoading(true);
    fetchMovies(`https://wookie.codesubmit.io/movies?q=${query}`).then(
      (movies) => {
        if (movies) {
          setMovies(movies);
        }
        setLoading(false);
      }
    );
  }, [query]);
  return (
    <>
      {loading ? (
        <Spinner
          animation="border"
          variant="light"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        />
      ) : (
        <div className="results">
          <h4> Search Results for "{query}"</h4>
          {movies.length > 0 ? (
            <div className="movies">
              {movies.map((movie, index) => {
                return (
                  <div key={index} className="movie">
                    <img src={movie.poster} alt="" />
                    <p>{movie.title}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10%",
              }}
            >
              No Movies found
            </h2>
          )}
        </div>
      )}
    </>
  );
};

export default SearchResults;

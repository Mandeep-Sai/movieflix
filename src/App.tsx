import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Movie from "./components/Movie/Movie";
import Navigation from "./components/Navigation/Navigation";
import { Movie as MovieType } from "./components/types";

function App() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMovies = async (url: string): Promise<MovieType[]> => {
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
    fetchMovies("https://wookie.codesubmit.io/movies").then((movies) => {
      if (movies) {
        setMovies(movies);
      }
      setLoading(false);
    });
  }, []);
  return (
    <div className="App">
      <Navigation></Navigation>
      {loading ? (
        <Spinner
          animation="border"
          variant="light"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        />
      ) : (
        <Routes>
          <Route path="/" element={<Home data={movies} />} />
          <Route path="/movie/:id" element={<Movie data={movies} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

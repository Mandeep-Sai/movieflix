import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import { Movie as MovieType, MovieAndHomeProps } from "../types";
import "./Movie.css";

const Movie = ({ data }: MovieAndHomeProps): JSX.Element => {
  const [movieData, setMovieData] = useState<MovieType>();
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  const transformDateToYear = (date: Date) => {
    let d = new Date(date);
    return d.getFullYear();
  };

  useEffect(() => {
    setLoading(true);
    setMovieData(data.find((movie) => movie.id === id));
    setLoading(false);
  }, [data]);
  return (
    <>
      {loading ? (
        <Spinner
          animation="border"
          variant="light"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        />
      ) : (
        <div className="movie_container">
          <div>
            <img src={movieData?.poster} alt="" />
          </div>
          <div className="info">
            <div className="title_container">
              <div className="title">
                <h4>{movieData?.title}</h4>
                <h4>({movieData?.imdb_rating}/10)</h4>
              </div>
              <div className="rating">
                {movieData?.imdb_rating && (
                  <StarRating rating={movieData?.imdb_rating} />
                )}
              </div>
            </div>

            <p className="date">
              {movieData?.released_on &&
                transformDateToYear(movieData?.released_on)}{" "}
              | {movieData?.director} | {movieData?.length}
            </p>
            <p className="cast">Cast : {movieData?.cast.join(" , ")}</p>
            <p>
              <b>Description: </b>
              {movieData?.overview}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default Movie;

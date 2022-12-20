import { useEffect, useState } from "react";
import { GalleryProps, Movie } from "../types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Gallery.css";

const Gallery = ({ category, movies }: GalleryProps): JSX.Element => {
  const [genreMovies, setGenreMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const filteredMovies = movies.filter((movie) =>
      movie.genres.includes(category)
    );
    setGenreMovies(filteredMovies);
  }, [movies, category]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1500 },
      items: 6,
    },
    largeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1500, min: 1300 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="gallery">
      <h3>{category}</h3>
      <Carousel responsive={responsive}>
        {genreMovies.map((movie) => {
          return (
            <div>
              <img
                src={movie.poster}
                style={{ height: "350px", width: "250px" }}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Gallery;

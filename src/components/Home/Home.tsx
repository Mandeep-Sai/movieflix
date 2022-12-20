import { useEffect, useState } from "react";
import Gallery from "../Gallery/Gallery";
import { MovieAndHomeProps, Movie } from "../types";

const Home = ({ data }: MovieAndHomeProps): JSX.Element => {
  const [categories, setCategories] = useState<string[]>([]);

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
    if (data.length > 0) {
      getMoviesCategories(data);
    }
  }, [data]);
  return (
    <>
      {data.length > 0 ? (
        <>
          {categories.map((category, index) => {
            return (
              <Gallery key={index} category={category} movies={data}></Gallery>
            );
          })}
        </>
      ) : (
        <h1>No Movies</h1>
      )}
    </>
  );
};

export default Home;

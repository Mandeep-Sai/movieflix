import { useEffect, useState } from "react";
import Gallery from "../Gallery/Gallery";
import { MovieAndHomeProps } from "../types";
import { getMoviesCategories } from "../utils";

const Home = ({ data }: MovieAndHomeProps): JSX.Element => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (data.length > 0) {
      let categories = getMoviesCategories(data);
      setCategories(categories);
    }
  }, [data]);
  return (
    <div data-testid="home">
      {data.length > 0 ? (
        <div data-testid="movies">
          {categories.map((category, index) => {
            return (
              <Gallery key={index} category={category} movies={data}></Gallery>
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
          data-testid="no_movies"
        >
          No Movies
        </h2>
      )}
    </div>
  );
};

export default Home;

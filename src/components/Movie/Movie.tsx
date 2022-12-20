import { MovieAndHomeProps } from "../types";

const Movie = ({ data }: MovieAndHomeProps): JSX.Element => {
  return (
    <>
      <h1>{data.length}</h1>
    </>
  );
};
export default Movie;

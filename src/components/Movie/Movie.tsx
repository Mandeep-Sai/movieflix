import { Movie as MovieType } from "../types";

interface MovieProps {
  data: MovieType[];
}
const Movie = ({ data }: MovieProps): JSX.Element => {
  return (
    <>
      <h1>{data.length}</h1>
    </>
  );
};
export default Movie;

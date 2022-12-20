import { GalleryProps } from "../types";

const Gallery = ({ category, movies }: GalleryProps): JSX.Element => {
  return (
    <>
      <h1>
        {category}
        {movies.length}
      </h1>
    </>
  );
};

export default Gallery;

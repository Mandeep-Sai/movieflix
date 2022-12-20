export interface Movie {
  backdrop: string;
  cast: string[];
  classification: string;
  director: string[] | string;
  genres: string[];
  id: string;
  imdb_rating: number;
  length: string;
  overview: string;
  poster: string;
  released_on: Date;
  slug: string;
  title: string;
}

export interface GalleryProps {
  category: string;
  movies: Movie[];
}

export interface MovieAndHomeProps {
  data: Movie[];
}

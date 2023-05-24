export interface TrendingMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string | null;
  name?: string;
}

export interface TrendingMoviesProps {
  trendingMovies?: TrendingMovie[] | null;
  recommendedMovies?: TrendingMovie[] | null;
  upcomingMovies?: TrendingMovie[] | null;
  tvshows?: TrendingMovie[] | null;
  movieList?: TrendingMovie | null;
}

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: boolean;
  first_air_date: string;
  original_name: string;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  imdb_id: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {}[];
  production_countries: {}[];
  release_date: string;
  revenue: string;
  runtime: string;
  spoken_languages: {}[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetailList {
  movieDetail: MovieDetail;
}

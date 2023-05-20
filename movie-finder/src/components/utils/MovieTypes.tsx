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

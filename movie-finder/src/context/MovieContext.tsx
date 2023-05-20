import React, { createContext, useState, useEffect } from "react";
import { TrendingMovie } from "../components/utils/MovieTypes";

interface MovieContextProps {
  trendingMovies: TrendingMovie[] | null;
  upcomingMovies: TrendingMovie[] | null;
  recommendedMovies: TrendingMovie[] | null;
  nowPlayingMovies: TrendingMovie[] | null;
  tvshows: TrendingMovie[] | null;
}

export const MovieContext = createContext<MovieContextProps>({
  trendingMovies: null,
  upcomingMovies: null,
  recommendedMovies: null,
  nowPlayingMovies: null,
  tvshows: null,
});

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [trendingMovies, setTrendingMovies] = useState<TrendingMovie[] | null>(
    null
  );
  const [upcomingMovies, setupcomingMovies] = useState<TrendingMovie[] | null>(
    null
  );
  const [tvshows, setTvShows] = useState<TrendingMovie[] | null>(null);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<
    TrendingMovie[] | null
  >(null);
  const [recommendedMovies, setRecommendedMovies] = useState<
    TrendingMovie[] | null
  >(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=329a0e3872ae492cffe5b6e67f30e4ab&language=en-US"
      );
      const data = await res.json();
      setTrendingMovies(data.results);
    };

    const fetchRecommendedMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=329a0e3872ae492cffe5b6e67f30e4ab&language=en-US&page=1"
      );

      const data = await res.json();

      setRecommendedMovies(data.results);
    };

    const fetchUpcomingMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=329a0e3872ae492cffe5b6e67f30e4ab&language=en-US&page=1"
      );

      const data = await res.json();

      setupcomingMovies(data.results);
    };

    const fetchNowPlayingMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=329a0e3872ae492cffe5b6e67f30e4ab&language=en-US&page=1"
      );

      const data = await res.json();

      setNowPlayingMovies(data.results);
    };

    const fetchTvShows = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/tv/popular?api_key=329a0e3872ae492cffe5b6e67f30e4ab&language=en-US"
      );

      const data = await res.json();

      setTvShows(data.results);
    };

    fetchTrendingMovies();
    fetchRecommendedMovies();
    fetchUpcomingMovies();
    fetchNowPlayingMovies();
    fetchTvShows();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        trendingMovies,
        upcomingMovies,
        recommendedMovies,
        nowPlayingMovies,
        tvshows,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

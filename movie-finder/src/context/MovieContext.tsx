import React, { createContext, useState, useEffect } from "react";
import { TrendingMovie } from "../components/utils/MovieTypes";
import { MovieDetail } from "../components/utils/MovieTypes";

interface MovieContextProps {
  trendingMovies: TrendingMovie[] | null;
  upcomingMovies: TrendingMovie[] | null;
  recommendedMovies: TrendingMovie[] | null;
  nowPlayingMovies: TrendingMovie[] | null;
  tvshows: TrendingMovie[] | null;
  movieSearch: TrendingMovie[] | null;
  movieDetail: MovieDetail | null;
  tvDetail: MovieDetail | null;
  searchByName: (movieName: string | undefined) => void;
  fetchMovieDetails: (id: undefined | string) => void;
  fetchTvDetails: (id: undefined | string) => void;
  error: string;
}

export const MovieContext = createContext<MovieContextProps>({
  trendingMovies: null,
  upcomingMovies: null,
  recommendedMovies: null,
  nowPlayingMovies: null,
  tvshows: null,
  movieSearch: null,
  movieDetail: null,
  tvDetail: null,
  searchByName: () => {},
  fetchMovieDetails: () => {},
  fetchTvDetails: () => {},
  error: "",
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
  const [movieSearch, setMovieSearch] = useState<TrendingMovie[] | null>(null);

  const [movieDetail, setMovieDetail] = useState<MovieDetail | null>(null);
  const [tvDetail, setTvDetail] = useState<MovieDetail | null>(null);

  const [error, setError] = useState<string>("");

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

  const searchByName = async (movieName: string | undefined) => {
    try {
      const apiBaseUrl = "https://api.themoviedb.org/3";
      const apiKey = "329a0e3872ae492cffe5b6e67f30e4ab";

      if (!movieName) {
        // Handle the case where movieName is undefined
        console.log("Movie doesn't exists");
      }

      const searchMovieUrl = `${apiBaseUrl}/search/movie?query=${movieName}&api_key=${apiKey}&language=en-US&page=1&include_adult=false`;
      const searchTvShowUrl = `${apiBaseUrl}/search/tv?query=${movieName}&api_key=${apiKey}&language=en-US&page=1&include_adult=false`;

      const [movieResponse, tvShowResponse] = await Promise.all([
        fetch(searchMovieUrl),
        fetch(searchTvShowUrl),
      ]);

      const [movieData, tvShowData] = await Promise.all([
        movieResponse.json(),
        tvShowResponse.json(),
      ]);

      const movieResults = movieData.results || [];
      const tvShowResults = tvShowData.results || [];

      const combinedResults = [...tvShowResults, ...movieResults];
      if (combinedResults.length === 0) {
        setMovieSearch(null);
        setError("There is not a movie or tv show with this name!");
        return;
      }
      setError("");
      setMovieSearch(combinedResults);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovieDetails = async (id: undefined | string) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=329a0e3872ae492cffe5b6e67f30e4ab&language=en-US`
    );

    const data = await res.json();
    setMovieDetail(data);
  };

  const fetchTvDetails = async (id: undefined | string) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=329a0e3872ae492cffe5b6e67f30e4ab&language=en-US`
    );
    const data = await res.json();
    setTvDetail(data);
  };

  return (
    <MovieContext.Provider
      value={{
        trendingMovies,
        upcomingMovies,
        recommendedMovies,
        nowPlayingMovies,
        tvshows,
        movieSearch,
        searchByName,
        error,
        fetchMovieDetails,
        movieDetail,
        tvDetail,
        fetchTvDetails,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

import React, { useContext, useMemo } from "react";

import MovieCard from "../components/MovieCard";
import MovieGrid from "../components/MovieGrid";

import useUser from "../hooks/useUser";
import { getImgUrl } from "../utils";
import { useDispatch, useSelector } from "react-redux";

const MovieListBase = ({ movieList }) => {
  // const { favData, setFavData } = useContext(FavoriteInfoContext);
  const dispatch = useDispatch();

  // const { user } = useUser();

  return (
    <MovieGrid>
      {movieList.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            id={movie.id}
            imgSrc={getImgUrl(movie.poster_path)}
            title={movie.title}
            rating={movie.vote_average}
          />
        );
      })}
    </MovieGrid>
  );
};

export default MovieListBase;

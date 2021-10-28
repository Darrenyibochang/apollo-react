import React, { Fragment, useContext, useEffect, useState } from "react";
import { getMovieDetail, rateMovie } from "../apiServices";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

import useUser from "../hooks/useUser";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../components/Alert";

const MovieDetailsPage = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const movieId = params.movieId;
  const dipatch = useDispatch();
  const { ratedData } = useSelector((state) => {
    return state.ratedData;
  });
  useEffect(() => {
    getMovieDetail(movieId).then((data) => {
      setMovie(data);
    });
  }, [params]);

  return (
    <Fragment>
      <Alert openSnakeBar={open} setOpenSnakeBar={setOpen} title="success" />
      <MovieDetail movie={movie} myRate={ratedData[movieId]} />
    </Fragment>
  );
};

export default MovieDetailsPage;

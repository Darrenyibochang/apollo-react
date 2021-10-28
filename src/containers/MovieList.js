import { Box, CircularProgress } from "@material-ui/core";
import React, { Fragment, useEffect, useMemo } from "react";
import CategorySelect from "../components/CategorySelect";
import Pagination from "../components/Pagination";
import { CATEGORIES } from "../constant";
import MovieListBase from "./MovieListBase";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMovieDataAction,
  setCategoryAction,
  setCurrentPageAction,
} from "../actions/movieListActions";

const MovieList = () => {
  return <div></div>;
};

export default MovieList;

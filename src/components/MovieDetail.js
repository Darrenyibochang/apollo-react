import {
  Box,
  Button,
  Chip,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import _ from "lodash";
import { useState } from "react";
import { getImgUrl } from "../utils";

const MovieDetail = ({ movie, myRate, onRate }) => {
  const [rateValue, setRateValue] = useState(1);
  const handleRate = () => {
    onRate(rateValue);
  };
  return (
    <Box display="flex">
      <img
        src={getImgUrl(movie.poster_path)}
        alt={movie.title}
        style={{ width: "400px", flexBasis: "50%" }}
      />
    </Box>
  );
};

export default MovieDetail;

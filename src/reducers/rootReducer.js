import { combineReducers } from "redux";
import userReducer from "./userInfoReducer";
import movieListReducer from "./movieListReducer";

const rootReducer = combineReducers({
  user: userReducer,
  movieList: movieListReducer,
});

export default rootReducer;

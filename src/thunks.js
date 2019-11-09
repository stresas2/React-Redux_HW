import axios from "axios";
import {
  setGenres,
  setMovieByGenreID,
  unlikeAction,
  likeAction
} from "./actions";
import { endpoints } from "./config";

export const getGenres = () => dispatch => {
  axios.get(endpoints.genres()).then(data => {
    dispatch(setGenres(data.data.genres));
  });
};

export const getGenreMovieByID = id => (dispatch, getState) => {
  const state = getState();
  const genres = state.genres.genres;
  axios.get(endpoints.genreMovies(id)).then(data => {
    dispatch(setMovieByGenreID(id, data.data.results, genres));
  });
};

export const unlike = id => (dispatch, getState) => {
  const state = getState();
  const movies = state.genreID.movieList;
  dispatch(unlikeAction(id, movies));
};

export const like = id => (dispatch, getState) => {
  const state = getState();
  const movies = state.genreID.movieList;
  dispatch(likeAction(id, movies));
};

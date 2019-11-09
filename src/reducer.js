import { combineReducers } from "redux";

const initialStateGennres = {
  genres: []
};

const genres = (state = initialStateGennres, action) => {
  switch (action.type) {
    case "setGenres":
      return {
        ...state,
        genres: action.list
      };
    default:
      return state;
  }
};

const initialStateGenreID = {
  id: 27,
  movieList: []
};

const genreID = (state = initialStateGenreID, action) => {
  switch (action.type) {
    case "setGenreID":
      return {
        ...state,
        id: action.id,
        movieList: action.list
      };
    default:
      return state;
  }
};

const list = {
  list: []
};

const favouriteList = (state = list, action) => {
  switch (action.type) {
    case "insertNewID":
      let newState;

      if (!state["list"].includes(action.id)) {
        newState = state["list"].concat(action.id);
      } else {
        newState = state["list"].filter(id => id !== action.id);
      }

      return { ...state, list: newState };
    default:
      return state;
  }
};

const getDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

const initialStatelogs = {
  logs: []
};

const logs = (state = initialStatelogs, action) => {
  let date;
  let result;
  let logs;
  let movie;
  switch (action.type) {
    case "mounted":
      date = getDate();
      result = {
        [date]: `Aplikacija uzkrauta`
      };
      logs = state.logs.concat([], result);
      return { ...state, logs };

    case "setGenreID":
      if (action.genres.length === 0) {
        return {
          ...state
        };
      }
      date = getDate();
      const genre = action.genres.find(({ id }) => id === action.id);
      result = {
        [date]: `Pakeistas zanras i ${genre["name"]}`
      };
      logs = state.logs.concat([], result);
      return { ...state, logs };

    case "unlike":
      date = getDate();
      movie = action.movies.find(({ id }) => id === action.id);
      result = {
        [date]: `Nuimta sirdele filmui ${movie["title"]}`
      };
      logs = state.logs.concat([], result);
      return { ...state, logs };

    case "like":
      date = getDate();
      movie = action.movies.find(({ id }) => id === action.id);
      result = {
        [date]: `Uzdeta sirdele filmui ${movie["title"]}`
      };
      logs = state.logs.concat([], result);
      return { ...state, logs };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  genres,
  genreID,
  favouriteList,
  logs
});

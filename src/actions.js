export const setGenres = list => ({
  type: "setGenres",
  list
});

export const setMovieByGenreID = (id, list, genres) => ({
  type: "setGenreID",
  id,
  list,
  genres
});

export const favouriteList = id => ({
  type: "insertNewID",
  id
});

export const mounted = () => ({
  type: "mounted"
});

export const unlikeAction = (id, movies) => ({
  type: "unlike",
  id,
  movies
});

export const likeAction = (id, movies) => ({
  type: "like",
  id,
  movies
});

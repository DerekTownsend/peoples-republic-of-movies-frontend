import {FETCH_MOVIES, SET_PAGE, DECREMENT_PAGE, INCREMENT_PAGE, SET_PAGE_MAX, FIRST_PAGE, LAST_PAGE, SHOW_MOVIE, SHOW_ACTOR, SHOW_GENRE} from './types'

export function fetchMovies(movies) {
  return {
    type: FETCH_MOVIES,
    movies
  }
}

export function setPage(pageNumber) {
  return {
    type: SET_PAGE,
    pageNumber
  }
}

export function incrementPage(pageNumber) {
  return {
    type: INCREMENT_PAGE,
    pageNumber
  }
}
export function decrementPage(pageNumber) {
  return {
    type: DECREMENT_PAGE,
    pageNumber
  }
}

export function setPageMax(pageNumber) {
  return {
    type: SET_PAGE_MAX,
    pageNumber
  }
}


export function firstPage(pageNumber) {
  return {
    type: FIRST_PAGE,
    pageNumber
  }
}

export function lastPage(pageNumber) {
  return {
    type: LAST_PAGE,
    pageNumber
  }
}

export function showMovie(movie) {
  return {
    type: SHOW_MOVIE,
    movie
  }
}

export function showActor(actor) {
  return {
    type: SHOW_ACTOR,
    actor
  }
}
export function showGenre(genre) {
  return {
    type: SHOW_GENRE,
    genre
  }
}

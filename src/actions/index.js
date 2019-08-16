import {FETCH_MOVIES, SET_PAGE, DECREMENT_PAGE, INCREMENT_PAGE, SET_PAGE_MAX, FIRST_PAGE, LAST_PAGE, SHOW_MOVIE, SHOW_ACTOR, SHOW_GENRE, FETCH_USER, LOGOUT_USER, FETCH_COMMENTS, ADD_COMMENT, LIKE, UNLIKE, EDIT_COMMENT, DELETE_COMMENT, FETCH_RATINGS} from './types'

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

export function fetchUser(user) {
  return {
    type: FETCH_USER,
    user
  }
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  }
}

export function fetchComments(comments) {
  return {
    type: FETCH_COMMENTS,
    comments
  }
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function likeComment(like) {
  return {
    type: LIKE,
    like
  }
}

export function unlikeComment(like) {
  return {
    type: UNLIKE,
    like
  }
}

export function editComment(comment) {
  return {
    type: EDIT_COMMENT,
    comment
  }
}

export function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    id
  }
}

export function fetchRatings(ratings) {
  return {
    type: FETCH_RATINGS,
    ratings
  }
}

import {FETCH_MOVIES} from '../actions/types'

export default function moviesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.movies
    default:
      return state;
  }
}

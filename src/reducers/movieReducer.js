import {SHOW_MOVIE} from '../actions/types'

export default function movieReducer(state = {}, action) {
  switch (action.type) {
    case SHOW_MOVIE:
      return action.movie
    default:
      return state;
  }
}

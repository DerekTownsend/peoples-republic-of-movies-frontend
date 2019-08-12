import {SHOW_GENRE} from '../actions/types'

export default function genreReducer(state = {}, action) {
  switch (action.type) {
    case SHOW_GENRE:
      return action.genre
    // case SHOW_GENRE:
    //   return action.genre
    default:
      return state;
  }
}

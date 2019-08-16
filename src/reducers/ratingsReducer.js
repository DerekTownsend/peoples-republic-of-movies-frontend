import {FETCH_RATINGS} from '../actions/types'

export default function ratingsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_RATINGS:
      return action.ratings
    default:
      return state;
  }
}

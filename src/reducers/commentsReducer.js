import {FETCH_COMMENTS, ADD_COMMENT} from '../actions/types'

export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.comments
    case ADD_COMMENT:
      return [...state, action.comment]
    default:
      return state;
  }
}

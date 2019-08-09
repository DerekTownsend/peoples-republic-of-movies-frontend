import {SET_PAGE_MAX} from '../actions/types'

export default function maxPagesReducer(state = 1, action) {
  switch (action.type) {
    case SET_PAGE_MAX:
      return action.pageNumber
    default:
      return state;
  }
}

import {SET_PAGE, DECREMENT_PAGE, INCREMENT_PAGE, FIRST_PAGE, LAST_PAGE} from '../actions/types'

export default function pagesReducer(state = 1, action) {
  switch (action.type) {
    case SET_PAGE:
      return action.pageNumber
    case DECREMENT_PAGE:
    const newPage = action.pageNumber -1
      if (newPage === 0) {
        return 1
      }else {
        return newPage
      }
    case INCREMENT_PAGE:
      return action.pageNumber + 1

    case FIRST_PAGE:
      return action.pageNumber
      
    case LAST_PAGE:
      return action.pageNumber

    default:
      return state;
  }
}

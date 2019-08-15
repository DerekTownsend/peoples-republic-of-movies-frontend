import {FETCH_USER, LOGOUT_USER} from '../actions/types'

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.user
    case LOGOUT_USER:
      return {}
    default:
      return state;
  }
}

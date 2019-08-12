import {SHOW_ACTOR} from '../actions/types'

export default function actorReducer(state = {}, action) {
  switch (action.type) {
    case SHOW_ACTOR:
      return action.actor
    default:
      return state;
  }
}

import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from 'redux';
import moviesReducer from './moviesReducer';
import usersReducer from './usersReducer';
import pagesReducer from './pagesReducer';
import maxPagesReducer from './maxPagesReducer';
import movieReducer from './movieReducer';
import actorReducer from './actorReducer';
import genreReducer from './genreReducer';
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  movies: moviesReducer,
  users: usersReducer,
  page: pagesReducer,
  maxPages: maxPagesReducer,
  movie: movieReducer,
  actor: actorReducer,
  genre: genreReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// applyMiddleware(thunk)

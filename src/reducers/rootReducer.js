import { combineReducers } from "redux";
// import { createStore, applyMiddleware, compose } from 'redux';
import { createStore } from 'redux';
import moviesReducer from './moviesReducer';
import usersReducer from './usersReducer';
import pagesReducer from './pagesReducer';
import maxPagesReducer from './maxPagesReducer';
import movieReducer from './movieReducer';
import actorReducer from './actorReducer';
import genreReducer from './genreReducer';
import commentsReducer from './commentsReducer';
import ratingsReducer from './ratingsReducer';

// import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  movies: moviesReducer,
  user: usersReducer,
  page: pagesReducer,
  maxPages: maxPagesReducer,
  movie: movieReducer,
  actor: actorReducer,
  genre: genreReducer,
  comments: commentsReducer,
  ratings: ratingsReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// applyMiddleware(thunk)

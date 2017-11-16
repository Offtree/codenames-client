import { MasterCard, PlayerGrid, Coordinate, SubmittedGuess } from './../interfaces';
import { createStore, combineReducers, Middleware, applyMiddleware } from 'redux';
import SocketMiddleware from './redux-socket';
import { SOCKET_ACTIONS, socketReducer } from './constants';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  inRoom: socketReducer(false, SOCKET_ACTIONS.IN_PARTY_STATUS),
  game: socketReducer(
    {
      notInitialized: true,
      playerGrid: [] as PlayerGrid,
      masterCard: {} as MasterCard,
      stagedGuess: [undefined, undefined] as Coordinate,
      submittedGuesses: [] as SubmittedGuess[]
    },
    SOCKET_ACTIONS.GAME_STATE_CHANGED
  )
});

export const generateStore = () => {
  const url = process.env.NODE_ENV === 'production' ?
    'wss://online-codenames.herokuapp.com/' :
    'http://localhost:3000/';

  const middleware: Middleware[] = [
    SocketMiddleware(url, [
      SOCKET_ACTIONS.IN_PARTY_STATUS,
      SOCKET_ACTIONS.GAME_STATE_CHANGED
    ])
  ];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
  }

  return createStore(
    rootReducer,
    applyMiddleware(...middleware)
  );
};

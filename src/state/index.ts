import { MasterCard, PlayerGrid, PlayerStatus, Coordinate, SubmittedGuess } from './../interfaces';
import { createStore, combineReducers, Middleware, applyMiddleware } from 'redux';
import SocketMiddleware from './redux-socket';
import { SOCKET_ACTIONS, socketReducer } from './constants';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  inRoom: socketReducer(null, SOCKET_ACTIONS.IN_PARTY_STATUS),
  players: socketReducer(
    [] as PlayerStatus[],
    SOCKET_ACTIONS.PLAYERS_UPDATED
  ),
  game: socketReducer(
    {
      inProgress: false,
      isMaster: false,
      playerGrid: [] as PlayerGrid,
      masterCard: undefined as MasterCard | undefined,
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
      SOCKET_ACTIONS.GAME_STATE_CHANGED,
      SOCKET_ACTIONS.PLAYERS_UPDATED
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

import { SocketOnAction, ON } from './redux-socket/index';

export enum SOCKET_ACTIONS {
  MAKE_PARTY = 'makeParty',
  JOIN_PARTY = 'joinParty',
  IN_PARTY_STATUS = 'inPartyStatus',
  NEW_GAME = 'newGame',
  GAME_STATE_CHANGED = 'gameChanged',
  SUBMIT_GUESS = 'submitGuess',
  STAGE_GUESS = 'stageGuess',
  CHANGE_VIEW = 'changeView',
  PLAYERS_UPDATED = 'playersChanged'
}

// tslint:disable-next-line:no-any
export const socketReducer = (initialState: any, key: SOCKET_ACTIONS) => {
  return (state = initialState, action: SocketOnAction) => {
    if (action.type === ON) {
      return action.payload.listener === key ? action.payload.data : state;
    }
    return state;
  };
};

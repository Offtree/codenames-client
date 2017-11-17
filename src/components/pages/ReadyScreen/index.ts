import { compose } from 'recompose';
import { connect } from 'react-redux';
import { EmitAction } from './../../../state/redux-socket';
import { SOCKET_ACTIONS } from './../../../state/constants';
import { default as ReadyScreen } from './ReadyScreen';
import { PlayerStatus } from '../../../interfaces';
import { find } from 'lodash';

export default compose(
  connect<
    {
      self: PlayerStatus|undefined,
      players: PlayerStatus[],
    },
    {},
    {}
  >(
    (state, ownProps) => ({
      players: state.players,
      self: find(state.players, { id: state.inRoom })
    }),
    (dispatch) => ({
      toggleReady(ownPlayer: PlayerStatus) {
        dispatch(EmitAction({
          event: SOCKET_ACTIONS.PLAYERS_UPDATED,
          args: {
            isReady: !ownPlayer.isReady,
            isMaster: ownPlayer.isMaster
          }
        }));
      },
      toggleIsMaster(ownPlayer: PlayerStatus) {
        dispatch(EmitAction({
          event: SOCKET_ACTIONS.PLAYERS_UPDATED,
          args: {
            isReady: ownPlayer.isReady,
            isMaster: !ownPlayer.isMaster
          }
        }));
      }
    })
  )
)(ReadyScreen);

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { EmitAction } from './../../../state/redux-socket';
import { SOCKET_ACTIONS } from './../../../state/constants';
import { default as PlayerGrid } from './PlayerGrid';
import { Coordinate } from '../../../interfaces';

export default compose(
  connect<
    {},
    {},
    {}
  >(
    (state, ownProps) => (state.game),
    (dispatch, ownProps) => ({
      stageGuess(coords: Coordinate) {
        dispatch(EmitAction({
          event: SOCKET_ACTIONS.STAGE_GUESS,
          args: coords
        }));
      },
      submitGuess(coords: Coordinate) {
        dispatch(EmitAction({
          event: SOCKET_ACTIONS.SUBMIT_GUESS,
          args: coords
        }));
      }
    })
  )
)(PlayerGrid);

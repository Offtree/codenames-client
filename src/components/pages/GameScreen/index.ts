import { compose } from 'recompose';
import { connect } from 'react-redux';
import { EmitAction } from './../../../state/redux-socket';
import { SOCKET_ACTIONS } from './../../../state/constants';
import { default as GameScreen } from './GameScreen';

export default compose(
  connect<
    {},
    {},
    {}
  >(
    (state, ownProps) => (state.game),
    (dispatch, ownProps) => ({
      newGame() {
        dispatch(EmitAction({
          event: SOCKET_ACTIONS.NEW_GAME,
          args: undefined
        }));
      }
    })
  )
)(GameScreen);

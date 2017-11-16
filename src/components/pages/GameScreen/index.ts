import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { EmitAction } from './../../../state/redux-socket';
import { SOCKET_ACTIONS } from './../../../state/constants';
import { default as GameScreen } from './GameScreen';

export default compose(
  withStateHandlers<
    { isMaster: boolean },
    { toggleIsMaster: () => void },
    {}
  >(
    {
      isMaster: false,
    },
    {
      toggleIsMaster: ({ isMaster }) => () => ({
        isMaster: !isMaster,
      }),
    }
  ),
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
      },
      toggleView(id: string) {
        dispatch(EmitAction({
          event: SOCKET_ACTIONS.CHANGE_VIEW,
          args: id
        }));
      }
    })
  )
)(GameScreen);

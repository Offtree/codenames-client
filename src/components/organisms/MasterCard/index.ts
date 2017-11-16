import { compose } from 'recompose';
import { connect } from 'react-redux';
import { EmitAction } from './../../../state/redux-socket';
import { SOCKET_ACTIONS } from './../../../state/constants';
import { default as MasterCard } from './MasterCard';

export default compose(
  connect<
    {},
    {},
    {}
  >(
    (state, ownProps) => (state.game),
    (dispatch, ownProps) => ({
      stageGuess(id: string) {
        dispatch(EmitAction({
          event: SOCKET_ACTIONS.SUBMIT_GUESS,
          args: id
        }));
      },
      submitGuess(id: string) {
        dispatch(EmitAction({
          event: SOCKET_ACTIONS.SUBMIT_GUESS,
          args: id
        }));
      }
    })
  )
)(MasterCard);

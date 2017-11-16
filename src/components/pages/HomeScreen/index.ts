import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { EmitAction } from './../../../state/redux-socket';
import { SOCKET_ACTIONS } from './../../../state/constants';
import { default as HomeScreen } from './HomeScreen';

export default compose(
  withStateHandlers<
    { createPartyValue: string, joinPartyValue: string },
    { updateCreatePartyValue: (a: string) => void, updateJoinPartyValue: (a: string) => void },
    {}
  >(
  {
    createPartyValue: '',
    joinPartyValue: ''
  },
  {
    updateCreatePartyValue: ({ createPartyValue, ...state }) => (a: string) => ({
      ...state,
      createPartyValue: a,
    }),
    updateJoinPartyValue: ({ joinPartyValue, ...state }) => (a: string) => ({
      ...state,
      joinPartyValue: a,
    })
  }),
  connect<
    {},
    { submitCreateParty: () => void, submitJoinParty: () => void },
    { createPartyValue: string, joinPartyValue: string }
  >(
    undefined,
    (dispatch, ownProps) => ({
      submitCreateParty() {
        dispatch(EmitAction({
          event: SOCKET_ACTIONS.MAKE_PARTY,
          args: ownProps.createPartyValue
        }));
      },
      submitJoinParty() {
        dispatch(EmitAction({
          event: SOCKET_ACTIONS.JOIN_PARTY,
          args: ownProps.joinPartyValue
        }));
      }
    })
  )
)(HomeScreen);

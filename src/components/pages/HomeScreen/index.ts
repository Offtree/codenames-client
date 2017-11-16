import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { EmitAction } from './../../../state/redux-socket';
import { SOCKET_ACTIONS } from './../../../state/constants';
import { default as HomeScreen } from './HomeScreen';

export default compose(
  withStateHandlers<
    { createPartyValue: string, joinPartyValue: string, nicknameValue: string },
    {
      updateCreatePartyValue: (a: string) => void,
      updateJoinPartyValue: (a: string) => void,
      updateNicknameValue: (a: string) => void
    },
    {}
  >(
  {
    createPartyValue: '',
    joinPartyValue: '',
    nicknameValue: ''
  },
  {
    updateCreatePartyValue: ({ createPartyValue, ...state }) => (a: string) => ({
      ...state,
      createPartyValue: a,
    }),
    updateJoinPartyValue: ({ joinPartyValue, ...state }) => (a: string) => ({
      ...state,
      joinPartyValue: a,
    }),
    updateNicknameValue: ({ nicknameValue, ...state }) => (a: string) => ({
      ...state,
      nicknameValue: a,
    })
  }),
  connect<
    {},
    { submitCreateParty: () => void, submitJoinParty: () => void },
    { createPartyValue: string, joinPartyValue: string, nicknameValue: string }
  >(
    undefined,
    (dispatch, ownProps) => ({
      submitCreateParty() {
        // Todo Add name
        dispatch(EmitAction({
          event: SOCKET_ACTIONS.MAKE_PARTY,
          args: [ownProps.createPartyValue, ownProps.nicknameValue]
        }));
      },
      submitJoinParty() {
        // Todo Add name
        dispatch(EmitAction({
          event: SOCKET_ACTIONS.JOIN_PARTY,
          args: [ownProps.joinPartyValue, ownProps.nicknameValue]
        }));
      }
    })
  )
)(HomeScreen);

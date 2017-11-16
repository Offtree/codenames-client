import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';
import { GameScreen, HomeScreen } from '../index';

export default compose(
  connect<
    { inRoom: boolean },
    {},
    {}
  >(
    (state, ownProps) => ({
      inRoom: state.inRoom
    }),
  ),
  branch<{inRoom: boolean}>(
    (ownProps => !ownProps.inRoom),
    renderComponent(HomeScreen)
  )
)(GameScreen);

import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';
import { ReadyScreen, GameScreen } from '../index';

export default compose(
  connect<
    { inProgress: boolean },
    {},
    {}
  >(
    (state, ownProps) => ({
      inProgress: state.game.inProgress
    }),
  ),
  branch<{ inProgress: boolean }>(
    (ownProps => ownProps.inProgress),
    renderComponent(GameScreen)
  )
)(ReadyScreen);

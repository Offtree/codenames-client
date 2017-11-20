import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { getBorderColor, getPlayerColor } from '../../../utils';
import { MasterCard, Players } from '../../../interfaces';

interface Props {
  newGame: () => void;
  toggleIsMaster: () => void;
  isMaster: boolean;
  inProgress: boolean;
  masterCard: MasterCard;
  children?: React.ReactNode;
}

const GameBar: React.SFC<Props> = (props: Props) => (
  <Grid container={true} style={{ paddingBottom: 8 }}>
    <AppBar
      position="static"
      style={{
        backgroundColor: props.masterCard ? getBorderColor(props.masterCard) : getPlayerColor(Players.NOONE),
        boxShadow: props.masterCard ? 'none' : undefined
      }}
    >
      <Toolbar>
        <Typography
          type="title"
          color={props.masterCard ? 'inherit' : undefined}
          style={{ flex: 1 }}
        >
          {props.isMaster ? 'Master Card' : 'Player Grid'}
        </Typography>
        <Button
          color={props.masterCard ? 'contrast' : undefined}
          aria-label="New Game"
          onClick={props.newGame}
        >
          New Game
        </Button>
      </Toolbar>
    </AppBar>
  </Grid>
);

export default GameBar;

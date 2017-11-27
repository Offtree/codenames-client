import * as React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { Players } from '../../../interfaces';
import { getPlayerColor } from '../../../utils';

interface Props {
  stageGuess: () => void;
  submitGuess: () => void;
  isStaged: boolean;
  word: string;
  ownedBy?: Players;
  children?: React.ReactNode;
}

const MasterTile: React.SFC<Props> = (props: Props) => {
  let color: undefined|string = 'white';
  color = props.isStaged ? undefined : color;
  color = props.ownedBy ? getPlayerColor(props.ownedBy) : color;
  return (
    <Paper
      style={{
        border: `5px solid ${color}`,
        height: '100%',
        paddingTop: 8,
        paddingBottom: 8,
        boxSizing: 'border-box',
        textAlign: 'center'
      }}
    >
      <Grid container={true} alignItems="center" justify="center" style={{height: '100%'}}>
        <Grid item={true} xs={true}>
          <Typography noWrap={true} style={{ fontSize: '2.75vw' }}>{props.word}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MasterTile;

import * as React from 'react';
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
        paddingTop: 8,
        paddingBottom: 8,
        textAlign: 'center'
      }}
    >
      <Typography type="caption" noWrap={true}>{props.word}</Typography>
    </Paper>
  );
};

export default MasterTile;

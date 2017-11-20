import * as React from 'react';
import Button from 'material-ui/Button';
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

const WordTile: React.SFC<Props> = (props: Props) => {
  let color: undefined|string = 'white';
  color = props.isStaged ? undefined : color;
  color = props.ownedBy ? getPlayerColor(props.ownedBy) : color;
  return (
    <Button
      raised={true}
      style={{
        backgroundColor: color,
        whiteSpace: 'nowrap',
        width: '100%',
        height: '100%'
      }}
      onClick={() => {
        props.isStaged ? props.submitGuess() : props.stageGuess();
      }}
      title={props.word}
    >
      {props.word}
    </Button>
  );
};

export default WordTile;

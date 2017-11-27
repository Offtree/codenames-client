import * as React from 'react';
import Button from 'material-ui/Button';
import { Players } from '../../../interfaces';
import { getPlayerColor } from '../../../utils';

const SPY = require('../../../assets/secret-agent.svg');
const BOMB = require('../../../assets/bomb.svg');
const FREE = require('../../../assets/man-user.svg');

const svgMap = {
  [Players.BLUE]: SPY,
  [Players.RED]: SPY,
  [Players.BOMB]: BOMB,
  [Players.NOONE]: FREE,
};
const getSelectedProps = (owner: Players) => ({
  background: `url(${svgMap[owner]}) center`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain'
});

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
        ...(props.ownedBy ? getSelectedProps(props.ownedBy as Players) : {}),
        backgroundColor: color,
        whiteSpace: 'nowrap',
        width: '100%',
        height: '100%',
        fontSize: '2.8vw'
      }}
      onClick={() => {
        props.isStaged ? props.submitGuess() : props.stageGuess();
      }}
      title={props.word}
    >
      {props.ownedBy ? '' : props.word}
    </Button>
  );
};

export default WordTile;

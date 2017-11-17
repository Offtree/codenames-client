import * as React from 'react';
import { PlayerGrid, MasterCard } from '../../organisms';

interface Props {
  newGame: () => void;
  toggleIsMaster: () => void;
  isMaster: boolean;
  inProgress: boolean;
  children?: React.ReactNode;
}

const GameScreen: React.SFC<Props> = (props: Props) => (
  <div>
    {props.isMaster ? 
      <MasterCard /> :
      <PlayerGrid />
    }
    <button onClick={props.newGame}>New Game</button>
  </div>
);

export default GameScreen;

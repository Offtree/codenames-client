import * as React from 'react';
import { PlayerGrid, MasterCard } from '../../organisms';

interface Props {
  newGame: () => void;
  toggleIsMaster: () => void;
  isMaster: boolean;
  notInitialized: boolean;
  children?: React.ReactNode;
}

const GameScreen: React.SFC<Props> = (props: Props) => {
  if (props.notInitialized !== undefined) {
    return (
      <div>WAIT</div>
    );
  }
  return (
    <div>
      {props.isMaster ? 
        <MasterCard /> :
        <PlayerGrid />
      }
      <button onClick={props.newGame}>New Game</button>
      <button onClick={props.toggleIsMaster}>Change View</button>
    </div>
  );
};

export default GameScreen;

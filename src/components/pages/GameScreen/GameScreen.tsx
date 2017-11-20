import * as React from 'react';
import { PlayerGrid, MasterCard, GameBar } from '../../organisms';

interface Props {
  newGame: () => void;
  toggleIsMaster: () => void;
  isMaster: boolean;
  inProgress: boolean;
  children?: React.ReactNode;
}

const GameScreen: React.SFC<Props> = (props: Props) => (
  <div>
    <GameBar />
    {props.isMaster ? 
      <MasterCard /> :
      <PlayerGrid />
    }
  </div>
);

export default GameScreen;

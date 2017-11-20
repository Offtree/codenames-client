import * as React from 'react';
import Grid from 'material-ui/Grid';
import { PlayerGrid, Coordinate, SubmittedGuess } from '../../../interfaces';
import { isStagedGuess, ownerOfTile } from '../../../utils';
import { WordTile } from '../../molecules';

interface Props {
  stageGuess: (a: Coordinate) => void;
  submitGuess: (a: Coordinate) => void;
  playerGrid: PlayerGrid;
  stagedGuess: Coordinate;
  submittedGuesses: SubmittedGuess[];
  children?: React.ReactNode;
}

const PlayerGrid: React.SFC<Props> = (props: Props) => (
  <Grid
    container={true}
    style={{
      height: '100vh'
    }}
  >
    {props.playerGrid.map(((row, index) => (
      <Grid item={true} xs={12} key={index}>
        <Grid container={true} alignItems={'stretch'} justify={'space-between'}>
        {row.map((col, colIndex) =>
          <Grid item={true} style={{ width: '20%'}} key={col}>
          <WordTile
            word={col}
            isStaged={isStagedGuess(props.stagedGuess, [index, colIndex])}
            ownedBy={ownerOfTile([index, colIndex], props.submittedGuesses)}
            stageGuess={() => props.stageGuess([index, colIndex])}
            submitGuess={() => props.submitGuess([index, colIndex])}
          />
          </Grid>
        )}
        </Grid>
      </Grid>
    )))}
  </Grid>
);

export default PlayerGrid;

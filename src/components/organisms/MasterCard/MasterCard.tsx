import * as React from 'react';
import { MasterCard, PlayerGrid } from '../../../interfaces';
import Grid from 'material-ui/Grid';
import { getBorderColor, getTileOwner } from '../../../utils';
import { WordTile } from '../../molecules';
interface Props {
  stageGuess: () => void;
  submitGuess: () => void;
  masterCard: MasterCard;
  playerGrid: PlayerGrid;
  children?: React.ReactNode;
}

const MasterCard: React.SFC = (props: Props) => (
  <div
    style={{
      boxShadow: `0px 0px 15px ${getBorderColor(props.masterCard)}`,
      padding: 8,
      marginBottom: 12
    }}
  >
    {props.masterCard.placements !== undefined ?
      <Grid container={true}>
        {props.playerGrid.map((row, rowIndex) => (
          <Grid item={true} xs={12} key={row.join('-')}>
            <Grid container={true} alignItems={'stretch'} justify={'space-around'}>
              {row.map((col, colIndex) =>
                <Grid item={true} style={{ width: '20%' }} key={col}>
                  <WordTile
                    isStaged={false}
                    ownedBy={getTileOwner([rowIndex, colIndex], props.masterCard)}
                    word={col}
                    // tslint:disable-next-line:no-empty
                    stageGuess={() => {}}
                    // tslint:disable-next-line:no-empty
                    submitGuess={() => {}}
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
        ))}
      </Grid> :
      null}
  </div>
);

export default MasterCard;

import * as React from 'react';
import { MasterCard, PlayerGrid } from '../../../interfaces';
import Grid from 'material-ui/Grid';
import { getBorderColor, getTileOwner } from '../../../utils';
import { MasterTile } from '../../molecules';
interface Props {
  stageGuess: () => void;
  submitGuess: () => void;
  masterCard: MasterCard;
  playerGrid: PlayerGrid;
  children?: React.ReactNode;
}

const MasterCard: React.SFC = (props: Props) => (
  <div>
    {props.masterCard.placements !== undefined ?
      <Grid
        container={true}
        justify="center"
        alignItems="stretch"
        style={{
          border: `5px solid ${getBorderColor(props.masterCard)}`,
          height: '100vh'
        }}
      >
        {props.playerGrid.map((row, rowIndex) => (
          <Grid item={true} xs={12} key={row.join('-')}>
            <Grid container={true} alignItems={'stretch'} justify={'space-around'} style={{ height: '100%' }}>
              {row.map((col, colIndex) =>
                <Grid item={true} xs={true} key={col}>
                  <MasterTile
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

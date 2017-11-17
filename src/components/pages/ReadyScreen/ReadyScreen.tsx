import * as React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

import Done from 'material-ui-icons/Done';
import NotReady from 'material-ui-icons/NotInterested';
import { PlayerStatus } from '../../../interfaces';

interface Props {
  toggleIsMaster: (a: PlayerStatus) => void;
  toggleReady: (a: PlayerStatus) => void;
  self: PlayerStatus;
  players: PlayerStatus[];
  children?: React.ReactNode;
}

const ReadyScreen: React.SFC<Props> = (props: Props) => {
  return (
    <Grid
      container={true}
      direction={'row'}
      justify={'center'}
      alignItems={'center'}
      style={{ height: '100vh', backgroundColor: '#f5f5f5', overflowY: 'hidden' }}
    >
      <Grid item={true}>
        <Paper style={{ minWidth: 275, paddingTop: 16 }}>
          <List>
            <ListSubheader>
              <Typography type="title" gutterBottom={true}>
                Starting New Game
              </Typography>
            </ListSubheader>
            <ListItem>
                <Button style={{ whiteSpace: 'nowrap' }} onClick={() => props.toggleIsMaster(props.self)}>
                  {props.self.isMaster ? 'Master View' : 'Player View'}
                </Button>
                <Button style={{ whiteSpace: 'nowrap' }} onClick={() => props.toggleReady(props.self)}>
                  {props.self.isReady ? 'Unready' : 'Ready up'}
                </Button>
            </ListItem>
            <Divider />
            <ListSubheader>
              {props.players.length > 0 ? 'Players' : 'Waiting for others...'}
            </ListSubheader>
            {props.players.map(player => (
              <ListItem key={player.id}>
                <ListItemIcon>
                  <Avatar>
                    {player.isMaster ? 'M' : 'P'}
                  </Avatar>
                </ListItemIcon>
                <ListItemText inset={true} primary={player.username} />
                <ListItemIcon>
                  {player.isReady ? <Done /> : <NotReady />}
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ReadyScreen;

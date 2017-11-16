import * as React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Button from 'material-ui/Button';
import { FormControl } from 'material-ui/Form';

interface Props {
  createPartyValue: string;
  joinPartyValue: string;
  nicknameValue: string;
  updateCreatePartyValue: (a: string) => void;
  updateJoinPartyValue: (a: string) => void;
  updateNicknameValue: (a: string) => void;
  submitCreateParty: () => void;
  submitJoinParty: () => void;
  children?: React.ReactNode;
}

const HomeScreen: React.SFC<Props> = (props: Props) => (
  <Grid
    container={true}
    direction={'row'}
    justify={'center'}
    alignItems={'center'}
    style={{ height: '100vh', backgroundColor: '#f5f5f5', overflowY: 'hidden' }}
  >
    <Grid item={true}>
    <Paper
      style={{ padding: 16 }}
    >
      <div style={{ textAlign: 'center' }}>
        <Typography type="title" gutterBottom={true}>
          Codenames Online
        </Typography>
      </div>
      <div style={{ textAlign: 'center', paddingTop: 16 }}>
          <FormControl
            fullWidth={true}
            error={props.nicknameValue === '' && (props.createPartyValue !== '' || props.joinPartyValue !== '')}
          >
            <InputLabel htmlFor="join">Nickname*</InputLabel>
            <Input
              fullWidth={true}
              id="join"
              type={'text'}
              value={props.nicknameValue}
              onChange={(event) => props.updateNicknameValue(event.target.value)}
              placeholder={'Nickname'}
            />
          </FormControl>
      </div>
      <div style={{ textAlign: 'center', paddingTop: 16 }}>
        <FormControl>
          <InputLabel htmlFor="join">Join Party</InputLabel>
          <Input
            id="join"
            type={'text'}
            placeholder={'Party Name'}
            onChange={(event) => props.updateJoinPartyValue(event.target.value)}
            endAdornment={(
              <InputAdornment position="end">
                <Button
                  onClick={props.submitJoinParty}
                  disabled={props.joinPartyValue === '' || props.nicknameValue === ''}
                >
                  Join
                </Button>
              </InputAdornment>
            )}
          />
        </FormControl>
      </div>
      <div style={{ textAlign: 'center', paddingTop: 32 }}>
        <FormControl>
          <InputLabel htmlFor="start">Start Party</InputLabel>
          <Input
            id="start"
            type={'text'}
            placeholder={'Party Name'}
            value={props.createPartyValue}
            onChange={(event) => props.updateCreatePartyValue(event.target.value)}
            endAdornment={(
              <InputAdornment position="end">
                <Button
                  onClick={props.submitCreateParty}
                  disabled={props.createPartyValue === '' || props.nicknameValue === ''}
                >
                  Create
                </Button>
              </InputAdornment>
            )}
          />
        </FormControl>
      </div>
    </Paper>
    </Grid>
  </Grid>
);

export default HomeScreen;

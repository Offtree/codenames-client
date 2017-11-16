import * as React from 'react';

interface Props {
  createPartyValue: string;
  joinPartyValue: string;
  updateCreatePartyValue: (a: string) => void;
  updateJoinPartyValue: (a: string) => void;
  submitCreateParty: () => void;
  submitJoinParty: () => void;
  children?: React.ReactNode;
}

const HomeScreen: React.SFC = (props: Props) => (
  <div>
    <div>
      <input
        value={props.createPartyValue}
        onChange={(event) => props.updateCreatePartyValue(event.target.value)}
        type={'text'}
        placeholder={'Party Name'}
      />
      <button onClick={props.submitCreateParty}>Create Party</button>
    </div>
    <div>
      <input
        value={props.joinPartyValue}
        onChange={(event) => props.updateJoinPartyValue(event.target.value)}
        type={'text'}
        placeholder={'Party Name'}
      />
      <button onClick={props.submitJoinParty}>Join Party</button>
    </div>
  </div>
);

export default HomeScreen;

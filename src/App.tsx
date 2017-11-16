import * as React from 'react';
import { Provider } from 'react-redux';

import { generateStore } from './state';
import { PartyGuard } from './components/pages';

const App: React.SFC = () => {
  const store = generateStore();
  return (
    <Provider store={store}>
      <PartyGuard />
    </Provider>
  );
};

export default App;
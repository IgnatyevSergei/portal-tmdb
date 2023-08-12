import React from 'react';
import { Provider } from 'react-redux';

import './app.scss';
import store from '../../store';
import Container from '../container';
import Router from '../appHeader/router';

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Router />
      </Container>
    </Provider>
  );
};

export default App;

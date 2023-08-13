import React from 'react';
import { Provider } from 'react-redux';

import './app.scss';
import store from '../../store';
import Container from '../container';
import Router from '../appHeader/router';
import ErrorBoundary from '../error-boundary/error-boundary';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Container>
          <Router />
        </Container>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import client from './apollo/client';
import store from './store/store';

// styles root:
import './styles/styles.scss';

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>, 
  document.getElementById('root')
);
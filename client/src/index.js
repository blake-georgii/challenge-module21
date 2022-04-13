import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {client, App } from './App';
import { ApolloProvider } from '@apollo/client';


ReactDOM.render(
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>,
  document.getElementById('root'),
);
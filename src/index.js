import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import { Provider } from 'react-redux';
import App from './components/App/AppContainer';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
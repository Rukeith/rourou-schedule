import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '../common/containers/App';
import configureStore from './store/configureStore';
import './styles/main.scss';

const preloadedState = window.PRELOADED_STATE;
const store = configureStore(preloadedState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

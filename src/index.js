import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Nav from './components/Nav';
// import App from './containers/App';
import configureStore from './store/configureStore';
// import './styles/main.scss';

const preloadedState = window.PRELOADED_STATE;
const store = configureStore(preloadedState);

render(
  <Provider store={store}>
    <div>
      <Nav />
      {/* <App /> */}
    </div>
  </Provider>,
  document.getElementById('root'),
);

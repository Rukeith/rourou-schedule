import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import App from '../common/containers/App';
// import Nav from '../common/containers/Nav';
// import Board from '../common/containers/Board';
// import Counter from '../common/containers/Counter';
import configureStore from '../common/store/configureStore';
import '../common/assets/index.css';

const preloadedState = window.PRELOADED_STATE;
const store = configureStore(preloadedState);

render(
  <Provider store={store}>
    <div>
      {/* <Nav /> */}
      {/* <Board /> */}
      <App />
      {/* <Counter /> */}
    </div>
  </Provider>,
  document.getElementById('root'),
);

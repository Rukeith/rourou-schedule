import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute } from "react-router";
import 'bootstrap/dist/css/bootstrap.css';
import App from "../common/components/App";
import HomePage from "../common/components/HomePage";
import configureStore from '../common/store/configureStore';
import '../common/assets/index.css';

const preloadedState = window.PRELOADED_STATE;
const store = configureStore(preloadedState);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

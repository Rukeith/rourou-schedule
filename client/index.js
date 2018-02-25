import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from '../common/containers/App';
// import App from "../common/components/App";
// import HomePage from "../common/components/HomePage";
import configureStore from '../common/store/configureStore';
import '../common/assets/index.css';

const preloadedState = window.PRELOADED_STATE;
const store = configureStore(preloadedState);
const history = createBrowserHistory();

render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Route exact path="/" component={App} />
      {/* <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
      </Route> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

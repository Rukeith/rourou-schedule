require('bootstrap/dist/css/bootstrap.css');
require('./styles/main.scss');
const React = require('react');
const { createStore } = require('redux');
const { render } = require('react-dom');
const { Provider } = require('react-redux');
// import todoApp from './store/reducers'
import App from './App.jsx';

// const store = createStore();

render(
  <Provider>
  {/* <Provider store={store}> */}
    <App />
  </Provider>,
  document.getElementById('root')
);

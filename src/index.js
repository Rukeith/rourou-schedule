require('bootstrap/dist/css/bootstrap.css');
require('./styles/main.scss');
const React = require('react');
const { Provider } = require('react-redux');
const ReactDOM = require('react-dom');
import App from './App.jsx';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
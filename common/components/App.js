import React from "react";
import PropTypes from "prop-types";
// import Nav from '../containers/Nav';

const App = ({ children }) => (
  <div className="container-fluid">
    <div>
      Demo
    </div>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
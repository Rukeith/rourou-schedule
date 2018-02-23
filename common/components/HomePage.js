import React from 'react';
import { Link } from 'react-router';

const HomePage = () => (
  <div className="jumbotron">
    <h1>Udemy Admin</h1>
    <p>React, Redux, and React Router in ES6 for a super cool web app</p>
    <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
  </div>
);

export default HomePage;
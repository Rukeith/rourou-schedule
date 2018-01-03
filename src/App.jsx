import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Group from './components/Group/Group.jsx'
export default class App extends Component {
  render() {
    return (
      <div>
        <Group/>
        <Button color="primary">Test</Button>
      </div>
    );
  }
}

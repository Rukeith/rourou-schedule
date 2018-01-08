import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import Group from './components/Group/Group.jsx'
export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: 'Test'
    };
  }

  render() {
    return (
      <Container fluid={true}>
        <Group/>
        <Button color="danger">{this.state.name}</Button>
      </Container>
    );
  }
}

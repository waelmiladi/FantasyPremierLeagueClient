import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    fetch('http://localhost:8080/fpl', {
      method: 'POST',
      body: '{ teams { id, name } }',
    }).then((response) => {
      response.json().then(data => data);
    });
  }
  render() {
    return <div>Test</div>;
  }
}

export default App;

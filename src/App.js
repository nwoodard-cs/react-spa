// Import React
import React, { Component } from 'react';


import 'bootstrap/dist/css/bootstrap.css';

import Home from './Home'
class App extends Component {

  constructor() {
      super()
      this.state = {
        user: 'Nicole'
      }
  }
  render() {
    return (
      <Home />
    );
  }
}

export default App;

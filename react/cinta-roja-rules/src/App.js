import React, { Component } from 'react';
import DadComponent from './components/MyFirstComponent';

class App extends Component {
  render() { //render tiene que estar en toda clase de objeto que renderiza todo lo que esta dentro para verlo
    return (
      <div>
          <DadComponent />
      </div>
    );
  }
}

export default App;

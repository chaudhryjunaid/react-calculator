import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator 
          height={600}
          width={600}
        />
      </div>
    );
  }
}

export default App;

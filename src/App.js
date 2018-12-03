import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLayout: {
        memory: {
          height: 1
        },
        result: {
          height: 2
        }
      },
      buttonLayout: [{
        text: 'C',
        x: 0,
        y: 0,
        width: 1,
        height: 1
      }, {
        text: '+/-',
        x: 1,
        y: 0,
        width: 1,
        height: 1
      }, {
        text: '%',
        x: 2,
        y: 0,
        width: 1,
        height: 1
      }, {
        text: '/',
        x: 3,
        y: 0,
        width: 1,
        height: 1
      }, {
        text: '7',
        x: 0,
        y: 1,
        width: 1,
        height: 1
      }, {
        text: '8',
        x: 1,
        y: 1,
        width: 1,
        height: 1
      }, {
        text: '9',
        x: 2,
        y: 1,
        width: 1,
        height: 1
      }, {
        text: '*',
        x: 3,
        y: 1,
        width: 1,
        height: 1
      }, {
        text: '4',
        x: 0,
        y: 2,
        width: 1,
        height: 1
      }, {
        text: '5',
        x: 1,
        y: 2,
        width: 1,
        height: 1
      }, {
        text: '6',
        x: 2,
        y: 2,
        width: 1,
        height: 1
      }, {
        text: '-',
        x: 3,
        y: 2,
        width: 1,
        height: 1
      }, {
        text: '1',
        x: 0,
        y: 3,
        width: 1,
        height: 1
      }, {
        text: '2',
        x: 1,
        y: 3,
        width: 1,
        height: 1
      }, {
        text: '3',
        x: 2,
        y: 3,
        width: 1,
        height: 1
      }, {
        text: '+',
        x: 3,
        y: 3,
        width: 1,
        height: 1
      }, {
        text: '0',
        x: 0,
        y: 4,
        width: 2,
        height: 1
      }, {
        text: '.',
        x: 2,
        y: 4,
        width: 1,
        height: 1
      }, {
        text: '=',
        x: 3,
        y: 4,
        width: 1,
        height: 1
      }]
    };
  }
  render() {
    return (
      <div className="App">
        <Calculator 
          height={400}
          width={400}
          displayLayout={this.state.displayLayout}
          buttonLayout={this.state.buttonLayout}
        />
      </div>
    );
  }
}

export default App;

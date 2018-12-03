import React, { Component } from 'react';
import _ from 'lodash';

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.getGridSize = this.getGridSize.bind(this);
		this.getUnitSize = this.getUnitSize.bind(this);
		this.getCSS = this.getCSS.bind(this);

		this.state = {
			layoutDefaults: {
				height: 1,
				width: 1,
				backgroundColor: 'cyan',
				className: 'button'
			},
			layout: [{
				text: 'Expression',
				x: 0,
				y: 0,
				width: 4,
				className: 'displayPanel',
				backgroundColor: 'gray'
			}, {
        text: 'Result',
        x: 0,
        y: 1,
        width: 4,
        height: 2,
        className: 'displayPanel',
				backgroundColor: 'yellow'
      }, {
        text: 'C',
        x: 0,
        y: 3,
				backgroundColor: 'green'
      }, {
        text: '+/-',
        x: 1,
        y: 3,
				backgroundColor: 'green'
      }, {
        text: '%',
        x: 2,
        y: 3,
				backgroundColor: 'green'
      }, {
        text: '/',
        x: 3,
        y: 3,
				backgroundColor: 'orange'
      }, {
        text: '7',
        x: 0,
        y: 4
      }, {
        text: '8',
        x: 1,
        y: 4
      }, {
        text: '9',
        x: 2,
        y: 4
      }, {
        text: '*',
        x: 3,
        y: 4,
				backgroundColor: 'orange'
      }, {
        text: '4',
        x: 0,
        y: 5
      }, {
        text: '5',
        x: 1,
        y: 5
      }, {
        text: '6',
        x: 2,
        y: 5
      }, {
        text: '-',
        x: 3,
        y: 5,
				backgroundColor: 'orange'
      }, {
        text: '1',
        x: 0,
        y: 6
      }, {
        text: '2',
        x: 1,
        y: 6
      }, {
        text: '3',
        x: 2,
        y: 6
      }, {
        text: '+',
        x: 3,
        y: 6,
				backgroundColor: 'orange'
      }, {
        text: '0',
        x: 0,
        y: 7,
        width: 2
      }, {
        text: '.',
        x: 2,
        y: 7
      }, {
        text: '=',
        x: 3,
        y: 7,
				backgroundColor: 'orange'
      }]
    };
	}
	getGridSize() {
		let maxX = _.reduce(this.state.layout, (max, button) => {
			button = _.defaults({}, button, this.state.layoutDefaults);
			let currentValue = button.x + button.width;
			return max > currentValue ? max : currentValue;
		}, 0);
		let maxY = _.reduce(this.state.layout, (max, button) => {
			button = _.defaults({}, button, this.state.layoutDefaults);
			let currentValue = button.y + button.height;
			return max > currentValue ? max : currentValue;
		}, 0);

		return {cols: maxX, rows: maxY};
	}
	getUnitSize() {
		let gridSize = this.getGridSize();
		return {
			height: this.props.height / gridSize.rows,
			width: this.props.width / gridSize.cols
		};
	}
	getCSS({x, y, height, width, backgroundColor, text}) {
		let unitSize = this.getUnitSize();
		let textFactor = text.length > 10 ? text.length * 0.05 + 1 : 1;
		return {
			position: 'absolute',
			top: `${unitSize.height * y}px`,
			left: `${unitSize.width * x}px`,
			height: `${unitSize.height * height}px`,
			width: `${unitSize.width * width}px`,
			fontSize: `${unitSize.height * height * 0.05 / textFactor}em`,
			backgroundColor
		};
	}
  render() {
  	return (
      <div className="Calculator" style={{height: this.props.height, width: this.props.width}}>
        {this.state.layout.map((item, key) => {
        	let fatItem = _.defaults({}, item, this.state.layoutDefaults);
        	return (
        		<div key={key} className={fatItem.className} style={{
	        		...this.getCSS(fatItem)
	        	}}>{fatItem.text}</div>
        	)}
        )}
      </div>
    );
  }
}

export default Calculator;

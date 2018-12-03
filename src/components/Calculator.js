import React, { Component } from 'react';
import _ from 'lodash';

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.getDisplayHeight = this.getDisplayHeight.bind(this);
		this.getGridSize = this.getGridSize.bind(this);
		this.getUnitSize = this.getUnitSize.bind(this);
		this.translateButtonCoordinates = this.translateButtonCoordinates.bind(this);
	}
	getDisplayHeight() {
		let displayMemoryHeight = this.props.displayLayout.memory.height;
		let displayResultHeight = this.props.displayLayout.result.height;
		return displayMemoryHeight + displayResultHeight;
	}
	getGridSize() {
		let displayRows = this.getDisplayHeight();
		let maxButtonX = _.reduce(this.props.buttonLayout, (max, button) => {
			console.log('$$', button);
			let currentValue = button.x + button.width;
			return max > currentValue ? max : currentValue;
		}, 0);
		let maxButtonY = _.reduce(this.props.buttonLayout, (max, button) => {
			let currentValue = button.y + button.height;
			return max > currentValue ? max : currentValue;
		}, 0);

		return {columns: maxButtonX, rows: maxButtonY + displayRows};
	}
	getUnitSize() {
		let gridSize = this.getGridSize();
		return {
			height: this.props.height / gridSize.rows,
			width: this.props.width / gridSize.columns
		};
	}
	translateButtonCoordinates(button) {
		let displayHeight = this.getDisplayHeight();
		return {
			x: button.x,
			y: button.y + displayHeight,
			height: button.height,
			width: button.width
		}
	}
	getCSSPosition({x, y, height, width}) {
		let unitSize = this.getUnitSize();
		return {
			top: `${unitSize.height * y}px`,
			left: `${unitSize.width * x}px`,
			height: `${unitSize.height * height}px`,
			width: `${unitSize.width * width}px`
		};
	}
  render() {
  	let gridSize = this.getGridSize();
    return (
      <div className="Calculator" style={{height: this.props.height, width: this.props.width}}>
        <div className="displayPanel" style={{backgroundColor: 'yellow', position: 'absolute', ...this.getCSSPosition({
        	x: 0,
        	y: 0, 
        	height: this.props.displayLayout.memory.height,
        	width: gridSize.columns
        })}}>Memory</div>
        <div className="displayPanel" style={{backgroundColor: 'green', position: 'absolute', ...this.getCSSPosition({
        	x: 0,
        	y: this.props.displayLayout.memory.height, 
        	height: this.props.displayLayout.result.height,
        	width: gridSize.columns
        })}}>Result</div>
        {this.props.buttonLayout.map(button => (
        	<div className="button" style={{backgroundColor: 'cyan', position: 'absolute', ...this.getCSSPosition({
        		x: button.x,
        		y: button.y + this.getDisplayHeight(), 
        		height: button.height,
        		width: button.width
        	})}}>{button.text}</div>
        ))}
      </div>
    );
  }
}

export default Calculator;

import React, { Component } from 'react';
import _ from 'lodash';

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleUnaryOperation = this.handleUnaryOperation.bind(this);
		this.handleBinaryOperation = this.handleBinaryOperation.bind(this);
		this.state = {
			result: '0',
			operator: '',
			context: null
    };
	}
	isUnary(operator) {
		return ['+/-', '%'].includes(operator);
	}
	handleUnaryOperation(a, op) {
		a = parseFloat(a);
		let result = '0';
		switch(op) {
			case '+/-':
				result = a * -1;
				break;
			case '%':
				result = a * 0.01;
				break;
			default:
				result = a;
		}
		return result.toString();
	}
	handleBinaryOperation(a, b, op) {
		a = parseFloat(a);
		b = parseFloat(b);
		let result = '0';
		switch(op) {
			case '+':
				result = a + b;
				break;
			case '-':
				result = a - b;
				break;
			case '*':
				result = a * b;
				break;
			case '/':
				result = b === 0 ? 0 : a / b;
				break;
			default:
				result = b;
		}
		return result.toString();
	}
	handleClick($event) {
		let action = $event.target.innerHTML;
		if (action === 'AC') {
			return this.setState({
				result: '0',
				operator: '',
				context: null
			});
		}
		if (action === '=') {
			if (this.state.operator) {
				return this.setState({
					result: this.handleBinaryOperation(this.state.context, this.state.result, this.state.operator),
					operator: '',
					context: null
				});	
			}
		}
		if (isNaN(action) && action !== '.') {
			if (this.isUnary(action)) {
				return this.setState({
			 		result: this.handleUnaryOperation(this.state.result, action)
				});
			}
			if(this.state.context && this.state.operator) {
				return this.setState({
				operator: action,
				context: this.handleBinaryOperation(this.state.context, this.state.result, this.state.operator),
				result: '0'
			});
			}
			return this.setState({
				operator: action,
				context: this.state.result,
				result: '0'
			});
		}
		if (action === '.' && this.state.result.includes('.')) {
			return;
		} 
		return this.setState({
			result: this.state.result === '0' && action !== '.' ? action : this.state.result + action
		});
	}
  render() {
  	return (
      <div className="Calculator" style={{
      	height: this.props.height,
      	width: this.props.width,
      	fontSize: `${this.props.width / 12}px`
      }}>
        <div className="contextPanel">{this.state.context ? this.state.context : 'READY'} {this.state.operator}</div>
        <div className="resultPanel">{this.state.result}</div>
        <div className="button white" onClick={this.handleClick}>AC</div>
        <div className="button orange" onClick={this.handleClick}>+/-</div>
        <div className="button orange" onClick={this.handleClick}>%</div>
        <div className="button orange right-side-button" onClick={this.handleClick}>/</div>
        <div className="button" onClick={this.handleClick}>7</div>
        <div className="button" onClick={this.handleClick}>8</div>
        <div className="button" onClick={this.handleClick}>9</div>
        <div className="button orange right-side-button" onClick={this.handleClick}>*</div>
        <div className="button" onClick={this.handleClick}>4</div>
        <div className="button" onClick={this.handleClick}>5</div>
        <div className="button" onClick={this.handleClick}>6</div>
        <div className="button orange right-side-button" onClick={this.handleClick}>-</div>
        <div className="button" onClick={this.handleClick}>1</div>
        <div className="button" onClick={this.handleClick}>2</div>
        <div className="button" onClick={this.handleClick}>3</div>
        <div className="button orange right-side-button" onClick={this.handleClick}>+</div>
        <div className="button zero bottom-button" onClick={this.handleClick}>0</div>
        <div className="button bottom-button" onClick={this.handleClick}>.</div>
        <div className="button white right-side-button bottom-button" 
        	onClick={this.handleClick}>=</div>
      </div>
    );
  }
}

export default Calculator;

import React, { Component } from 'react';
import _ from 'lodash';

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: null	
    };
	}
  render() {
  	return (
      <div className="Calculator" style={{height: this.props.height, width: this.props.width}}>
        <div class="contextPanel" >CONTEXT</div>
        <div class="resultPanel" >RESULT</div>
        <div class="button white" >C</div>
        <div class="button orange" >+/-</div>
        <div class="button orange" >%</div>
        <div class="button orange right-side-button" >/</div>
        <div class="button" >7</div>
        <div class="button" >8</div>
        <div class="button" >9</div>
        <div class="button orange right-side-button" >*</div>
        <div class="button" >4</div>
        <div class="button" >5</div>
        <div class="button" >6</div>
        <div class="button orange right-side-button" >-</div>
        <div class="button" >1</div>
        <div class="button" >2</div>
        <div class="button" >3</div>
        <div class="button orange right-side-button" >+</div>
        <div class="button zero bottom-button" >0</div>
        <div class="button bottom-button" >.</div>
        <div class="button white right-side-button bottom-button" >=</div>
      </div>
    );
  }
}

export default Calculator;

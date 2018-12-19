import React, { Component, Fragment } from 'react';
import Btn from './btn';

export default class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      input : '',
      array : [89, 30, 25, 32, 72]
    }
  }
  componentDidMount(){
    this.setState({
      array : this.state.array.sort()
    })
  }

  onChange(e){
    this.setState({
      input : e.target.value
    })
  }
  render() {
    return (
      <Fragment>
        <div>
         {this.state.array.join(', ')}
        </div>
        <input placeholder="Search for a Number" onChange={(e) => this.onChange(e)}></input>
        <Btn name='linear-search' input={this.state.input} arr={this.state.array}/> {/* linear search btn */}
        <Btn name='binary-search' input={this.state.input} arr={this.state.array}/> {/* binary search btn */}
      </Fragment>
    );
  }
}


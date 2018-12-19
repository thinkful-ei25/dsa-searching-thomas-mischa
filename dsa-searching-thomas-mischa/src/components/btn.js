import React, { Component, Fragment } from 'react';


export default class Btn extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     input : '',
  //     array : [89, 30, 25, 32, 72]
  //   }
  // }

  linearSearch(value){
    value = parseInt(value, 10);
    let count = 0;
    for(let i = 0; i < this.props.arr.length; i++){
      console.log(this.props.arr);
      count ++;
      if(this.props.arr[i] === value){
        return `Found your value in ${count} steps`
      }
    }
    return `Your value does not exist. Took ${count} steps to figure that out`;
  }

  onClick(inputValue){
    if(this.props.name === 'linear-search'){
      console.log(this.linearSearch(inputValue));
    }else{
      this.binarySearch(inputValue);
    }
  }
  render() {
    return (
      <Fragment>
        <button onClick={()=>{this.onClick(this.props.input)}}>{this.props.name}</button>
      </Fragment>
    );
  }
}


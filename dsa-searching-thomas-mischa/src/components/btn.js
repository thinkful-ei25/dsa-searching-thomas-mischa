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

  binarySearch(value, start = 0, end = this.props.arr.length - 1, count = 0) {
    value = parseInt(value, 10);
    let arr = this.props.arr;
    let middle = Math.floor((end + start) / 2);

    if (value < arr[start] || value > arr[end]) {
      count++;
      return `Your value does not exist. Took ${count} steps to figure that out`;
    }
    
    if (arr[middle] === value) {
      count++;
      return `Found ${value} in ${count} steps`;
    }

    if (value > arr[middle]) {
      start = middle + 1;
      count++;
      return this.binarySearch(value, start, end, count);
    }

    if (value < arr[middle]) {
      end = middle - 1;
      count++;
      return this.binarySearch(value, start, end, count);
    }

    if (start > end) {
      count++;
      return `Your value does not exist. Took ${count} steps to figure that out`;
    }
  }

  onClick(inputValue){
    if(this.props.name === 'linear-search'){
      console.log(this.linearSearch(inputValue));
    }else{
      console.log(this.binarySearch(inputValue));
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


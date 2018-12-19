'use strict';

class BinarySearchTree{
  constructor(key=null, value=null, parent=null){
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  insert(key, value, parent=null){
    //if parent is null add as root
    if(this.key === null){
      this.key = key;
      this.value = value;
      //if parent is larger than key add to left
    }else if(this.key > key){
      //if we're at the leaf, add new tree
      if(!this.left){
        this.left = new BinarySearchTree(key, value, this);
      }else{
        return this.left.insert(key, value);
      }
    }else{  //if parent is smaller than add to right
      if(!this.right){
        this.right = new BinarySearchTree(key, value, this);
      }else{
        return this.right.insert(key, value, this);
      }
    }
  }

  find(key){
    if(this.key === key){
      return this.value;
    }
    if(this.key > key){
      if(this.left){
        return this.left.find(key);
      }else{
        throw new Error('key not found in tree!');
      }
    }else{
      if(this.right){
        return this.right.find(key);
      }else{
        throw new Error('key not found in tree!');
      }
    }
  }
  //find min of right tree (bottom left) (this.right.find_Min)
  //replace key with this.right.find_Min --> parent of min = this.right.find_min 
  // min.parent.left = null

  remove(key){
    if(this.key === key){
      //if key has two children
      if(this.right && this.left){
        const minRight = this.right._findMin();
        this.key = minRight.key;
        this.value = minRight.value;
        minRight.remove(minRight.key);
        minRight.parent.left = null;
      }else if(this.right){
        this._replaceWith(this.right);
      }else if(this.left){
        this._replaceWith(this.left);
      }else{
        this._replaceWith(null);
      }
    }else if(key < this.key && this.left){
      this.left.remove(key);
    }else if(key > this.key && this.right){
      this.right.remove(key);
    }else{
      throw new Error('Key not in tree!');
    }
  }

  _replaceWith(node){
    if(this.parent){
      if(this === this.parent.left){
        this.parent.left = node;
      }else if(this === this.parent.right){
        this.parent.right = node;
      }
      if(node){
        node.parent = this.parent;
      }
    }else{
      if(node){
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
        //else if we're removing a leaf
      }else{
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
    
  }
  _findMin(){
    if(!this.left){
      return this;
    }else{
      return this.left._findMin();
    }
  }
  // function preOrder(bst){
  //   console.log(bst);
  //   console.log(bst.key);
  //   if(bst.left){
  //     return preOrder(bst.left);
  //   }
  //   if(bst.right){
  //     return preOrder(bst.right);
  //   }
  //   return;
  // }

  //prints node first then left then right
  preOrder(){
    console.log(this.key);
    if(this.left){
      this.left.preOrder();
    }
    if(this.right){
      this.right.preOrder();
    }
  }
  //post order prints children then node / parent
  postOrder(){
    
    if(this.left){
      this.left.postOrder();
    }
    if(this.right){
      this.right.postOrder();
    }
    console.log(this.key);
  }

  //prints left first then node then right
  inOrder(){
    if(this.left){
      this.left.inOrder();
    }
    console.log(this.key);

    if(this.right){
      this.right.inOrder();
    }
  
  }
}

function preOrder(bst){
  console.log(bst.key);
  if(bst.left){
    preOrder(bst.left);
  }
  if(bst.right){
    preOrder(bst.right);
  }
}

const profits = new BinarySearchTree();
profits.insert(25);
profits.insert(15);
profits.insert(50);
profits.insert(10);
profits.insert(24);
profits.insert(35);
profits.insert(70);
profits.insert(4);
profits.insert(12);
profits.insert(18);
profits.insert(31);
profits.insert(44);
profits.insert(66);
profits.insert(90);
profits.insert(22);
preOrder(profits);
// profits.preOrder();
// profits.inOrder();
// profits.postOrder();

/* 

25 15 50 10 24
          25
          /\
         15 50 
         /\
        10 24
        

pre-order: 25 15 10 24 50
      */


//pre-order





/* MAX PROFIT */
/*               - - - - - -               */
let days = [128, 97, 121, 123, 98, 97, 105];
// let min = 0;
// let max = days.length - 1;
// let tempMin;
// let tempMax;
// let profit = tempMax - tempMin;

// if (days[min] > days[max]) {
//   min = max;
// }

function maxProfit(days) {
  // let min = 0;
  // let max = 0;
  // let tempProfit = 0;
  // let tempMin = 0;
  // let tempMax = 0;
  // let profit = 0;

// solves for question - max profit;
//   for (let i = min; i < days.length - 1; i++) {
//     console.log('min: ', days[i]);
//     max++;
//     for (let j = max; j < days.length; j++) {
//       if(days[j] - days[i] > profit) {
//         profit = days[j] - days[i];
//       }
//       console.log(`max: -- ${days[j]} -- profit: ${profit}`);
//     }
//   }
// }

  // for (let i = tempMin; i < days.length - 1; i++) {
  //   console.log('min: ', days[i]);
  //   tempMax++;
  //   for (let j = tempMax; j < days.length; j++) {
  //     if(days[j] - days[i] > profit) {
  //       profit = days[j] - days[i];
  //       min = i;
  //       max = j;
  //     }
  //     console.log(`max: -- ${days[j]} -- profit: ${profit}`);
  //   }
  // }
  // return `The day to buy is day ${min + 1} and the day to sell is day ${max + 1} for a profit of $${profit}`;
  
  
  // [128, 97, 121, 123, 98, 97, 105]
  let buy = days[0];
  let sell = days[0]; 
  let profit = 0;
  for (let i = 1; i < days.length; i++) {
    sell = days[i];
    if (sell < buy) {
      buy = days[i];
    } 
    if (sell > buy && sell - buy > profit) {
      profit = sell - buy;
    }
  }
  return `Maximum profit is $${profit}`;
}

console.log(maxProfit(days));


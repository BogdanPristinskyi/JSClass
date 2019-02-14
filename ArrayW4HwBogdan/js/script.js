'use strict';
let myArray =[];
let newArray = [];
let newArray1= [];
let newArray2= [];
function push(){
  let value = document
    .querySelector('#myId')
    .value;
    myArray.push(value);
//console.log(myArray);
showArray();// call a function
document.querySelector('#myId').focus();// Clear and focus on input after push
}

function slice(){
        if (myArray.length % 2){
          myArray.unshift('0');
          newArray1 = myArray.slice(0, myArray.length/2);
          newArray1.shift();
          newArray2 = myArray.slice(myArray.length/2);
          newArray2.shift();
          myArray.shift();
          newArray = newArray1 + ',' + newArray2;
       } else {
          newArray1 = myArray.slice(0, myArray.length/2);
          newArray1.pop();
          newArray2 = myArray.slice(myArray.length/2);
          newArray2.shift();
          newArray = newArray1 + ',' + newArray2;
     }


       showSlice(newArray);
       document.querySelector('#myId').focus();
}



function showArray() {
  document.querySelector('#myList')
  .innerHTML = '[' + myArray.toString() + ']';

}

function showSlice(input){
  document.querySelector('#slice')
  .innerHTML = '[' + input.toString() + ']';
}

// function compareNumbers(a, b) {
// if (a < b) {
// return -1
//   }
//   if (b < a) {
//     return 1
//   }
//   return 0
// }
// showArray();

// function myFancyList (){
//   let text = '';
//   for(let i = 0; i < myArray.length; i++){
//   text += '<li>' + myArray[i] + '</li>';
//   console.log(text);
//
//   }
// document.querySelector('#myFancyList')
//    .innerHTML = text;
//
// }

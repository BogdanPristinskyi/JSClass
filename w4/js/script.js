'use strict';
let myArray =[];
let newArray = [];
function push(){
  let value = document
    .querySelector('#myId')
    .value;
    myArray.push(value);
console.log(myArray);
showArray();// call a function
}

function pop(){
      myArray.pop();
      showArray();// call a function
}
function shift(){
  myArray.shift();
      showArray();// call a function
}

function unshift(){
  let value = document
    .querySelector('#myId')
    .value;
      myArray.unshift(value);
      showArray();// call a function
}

function reverse(){
      myArray.reverse();
      showArray();// call a function
}
function slice(){
       newArray = myArray.slice(1, myArray.length - 1);
       showSlice(newArray);
}

function sort(){
      myArray.sort(compareNumbers);
      showArray();// call a function
}

function showArray() {
  myFancyList();
document.querySelector('#myList')
.innerHTML = '[' + myArray.toString() + ']';

}

function showSlice(input){
  document.querySelector('#slice')
  .innerHTML = input.toString();
}

function compareNumbers(a, b) {
if (a < b) {
return -1
  }
  if (b < a) {
    return 1
  }
  return 0
}
showArray();

function myFancyList1 (){
  let text = '';
  for(let i = 0; i < myArray.length; i++){
  text += '<li>' + myArray[i] + '</li>';
  console.log(text);
  }
document.querySelector('#myFancyList')
   .innerHTML = text;

}
function myFancyList() {
let text ='';
myArray.forEach(function(item){
text +='<li>'  + item + '</li>'
});
document.querySelector('#myFancyList')
   .innerHTML = text;
}

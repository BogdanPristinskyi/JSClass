'use strict';
// let name = 'mom';
// console.log(name);


// function isPalidromic(userInput){
// let spaceFree - userInput.split(' ').join('');
//   let userInputArray = userspaceFree.toLowerCase().split('');
//
//   let reversed = userInputArray.reverse();
//
//   let reversedStr = reversed.join("");
//   return (userInput === reversedStr);
//
// }
function submitForm(){
  let text = document.getElementById('input').value;
  alert(isPalidromic2(text));
}

function isPalidromic2(userInput){
  return (userInput
    .split('')
    .reverse()
    .join('')
    .toLowerCase() === userInput.toLowerCase());}
console.log(isPalidromic2('moM'));

function generateRandom ( min = 0 , max = 1000){
  return Math.floor(Math.random()* (max - min) + min) ;
}
let random = generateRandom ();
console.log(random);

'use strict';
// let name = 'mom';
// console.log(name);


// function isPalidromic(userInput){
//   let userInputArray = userInput.split('');
//
//   let reversed = userInputArray.reverse();
//
//   let reversedStr = reversed.join("");
//   return (userInput === reversedStr);
//
// }


function isPalidromic2(userInput){
  return (userInput
    .split('')
    .reverse()
    .join('') === userInput);}
console.log(isPalidromic2('mom'));

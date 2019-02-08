'use strict';

//  function generateRandom ( min = 0 , max = 1000){
//   return Math.floor(Math.random()* (max - min) + min) ;
//  }
//  let random = generateRandom ();
// console.log(random);

let randomFunction = (min = 0 , max = 1000 ) =>
Math.floor(Math.random()* (max - min) + min) ;  //Arrow function
let random = randomFunction();



// document.getElementById('random').innerHTML = random;
 console.log(random);

let myFunction = () =>
   document.getElementById('random').innerHTML = random;

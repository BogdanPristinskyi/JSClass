'use strict';
let test;//undefined
//console.log(test);

let myObject = new Object();

let myOtherObject = {
    color:'blue',
    size: null,
    authors: ['A','B'],
    address: {
       postalCode: 'H2H1G2',
       streetNumber: 123
        }
    };
    myOtherObject.name = 'Cup';
//console.log('myObject', typeof myObject, myObject);
// console.log( myOtherObject.address.postalCode );
// console.log(myOtherObject.size);
// console.log( myOtherObject['address']);
// console.log(myOtherObject.address);
function printValue(myKey){
console.log(myOtherObject[myKey]);
}
printValue('size');
printValue('address');

function createNewPerson(name){
 let obj ={};
 obj.name = name;
 obj.greeting = function() {
   console.log('Hi, I\'m ' + name);
 }
  return obj;
}

function Person(name){
  this.name = name;
  this.greeting = function() {
    console.log('Hi, I\'m ' + this.name);
  }
}


let p1 = createNewPerson('Sara');
console.log(p1);
p1.greeting();
let p2 = createNewPerson('John');
p2.greeting();
 let p3 = new Person('Bob');
 let p4 = new Person('Mary');
 p3.greeting = function() {
   console.log('I\'m new function');
 }
 p3.greeting();
 console.log(p3);

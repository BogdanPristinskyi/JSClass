"use strict";
function Airport(name, city, code) {
  this.name = name;
  this.city = city;
  this.code = code;
}

let mtlAirport = new Airport ('P.E. Trudau', 'Montreal', 'YUL');
let lndAirport = new Airport ('Heatrew', 'London', 'HWT');
console.log(mtlAirport);
console.log(lndAirport.city);
console.log(lndAirport.code);

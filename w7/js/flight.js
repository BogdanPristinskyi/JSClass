"use strict";
function Flight(airline, depTime, arrTime, stops,
                priceInUSD, from, to, flightClass) {
  this.airline = airline;
  this.depTime = depTime;
  this.arrTime = arrTime;
  this.stops = stops;
  this.priceInUSD = priceInUSD;
  this.from = from;
  this.to = to;
  this.flightClass = flightClass;

  this.numberOfStops = function(){
    return this.stops.length;
  }
  this.priceInCAD = function() {
    return priceInUSD * 1.3;}
  this.duration = function() {
    return (this.arrTime - this.depTime)/(3600000);
  }
  this.overnights = function(){
    return (this.arrTime.getDate() - this.depTime.getDate());
  }

}

let torAirport = new Airport('Peterson', 'Toronto', 'YYZ');

let myFancyFlight = new Flight('Air Canada', new Date("2019-03-17T03:24:00"),
                              new Date("2019-03-20T03:01:00"), [torAirport],
                               8500.58, mtlAirport, lndAirport, 'First Class' );
console.log(myFancyFlight);
console.log(myFancyFlight.priceInUSD);
console.log(myFancyFlight.stops[0].name);
//console.log(myFancyFlight.from.city);
console.log(myFancyFlight.arrTime);
console.log(myFancyFlight.numberOfStops());
console.log(myFancyFlight.priceInCAD());
// let date = moment().subtract(10, 'days').calendar();
// console.log(date);
console.log(myFancyFlight.arrTime.getHours());
console.log(myFancyFlight.duration());
console.log(myFancyFlight.overnights() + ' overnights');

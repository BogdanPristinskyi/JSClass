"use strict";
function findBeer() {
//1. get city from input
let city = document.querySelector('#city').value;
let name = '&by_name=' + document.querySelector('#name').value;
//2. create an url
let url = 'https://api.openbrewerydb.org/breweries?by_city=';
let urlCity = url + city + name ;
//3. sent a XMLHttpRequest
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", urlCity);
oReq.send()
}
//4.console.log the responseText
function reqListener () {

  let objectOfBrewerys =JSON.parse(this.responseText);
  console.log(objectOfBrewerys);
   let text = '';
  objectOfBrewerys.forEach(function(item){
    text += item.name + '<br>';

  });

  document.querySelector('.list').innerHTML = text;
}



// function reqListener () {
//   console.log(this.responseText);
// }
//
//
// function submit() {
//  var req = new XMLHttpRequest();
//  req.addEventListener("load", reqListener);
//  req.open("GET", "https://www.googleapis.com/books/v1/volumes?q=harry");
//  req.send();
// //console.log('after');
// }

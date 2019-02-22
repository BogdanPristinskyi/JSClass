'use strict';

// function printTitles() {
// books.forEach(function(item){
// console.log(item.volumeInfo.title);})
//   console.log();
// }
// printTitles();

function printAuthors() {
  books.forEach(function(item){
    if(item.volumeInfo.authors){
  console.log(item.volumeInfo.authors.join('\n'));}
})
}
printAuthors();
function findShortest() {
    // your code goes here
    return 'TITLE OF THE BOOK';
}

function aboveThree() {
  let result = [];
  //console.log(books[0]);

  return result;
}

aboveThree();

function findAuthors () {
  let result = {};
  /* {
    "Females and Harry Potter" : ["Ruthann Mayes-Elma"],
    "Harry Potter and International Relations":  ["Daniel H. Nexon", "Iver B. Neumann"],
  }*/
  return result;
}
function Book(authors, title, pageCount, averageRating) {
this.authors = authors;
this.title = title;
this.pageCount = pageCount;
this.averageRating = averageRating;
this.isPopular = function() {
if (this.averageRating >= 3)  {
          return true;
        }
      return false;
    }
this.numberOfAuthors = function() {
          // if (this.authors){
          // return this.authors.length;}
          // else { return 0;}
          return this.authors ? this.authors.length : 0;
    }
}

let b1 = new Book (['JK Rowling'],'harry potter', 345, 5);
console.log(b1.isPopular());
let b2 = new Book(books[0].volumeInfo.authors,
                  books[0].volumeInfo.title,
                  books[0].volumeInfo.pageCount,
                  books[0].volumeInfo.averageRating);
let myBooks = [];

books.forEach(function(item){
                    let temp = new Book(item.volumeInfo.authors,
                    item.volumeInfo.title,
                    item.volumeInfo.pageCount,
                    item.volumeInfo.averageRating);
            myBooks.push(temp);
                });
console.log(myBooks);
myBooks.forEach(function(book){
  console.log(book.isPopular());
  console.log(book.numberOfAuthors());
});

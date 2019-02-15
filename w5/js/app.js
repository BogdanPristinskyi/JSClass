let myString;
function calculate(){
    myString = document.querySelector('#input').value;
    countLetters(myString);
}

function countLetters (myString){
   let result = {};
  for (let i = 0; i < myString.length; i++){
    let char = myString.charAt(i);
     if(result[char]=== undefined ){
    result[char] = 1;
  }else { result[char]++}
  }

document.querySelector('#charCount').innerHTML = JSON.stringify(result);
}
// console.log(countLetters('apple'));
// console.log(countLetters('bannana'));

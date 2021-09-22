//19-if
/*
if (condition) {
  //code
}
*/

const array = [0, 1, 2, 3, 4, 5];

array.forEach(item => {
  if (item % 2 === 0) {
    console.log(`O número ${item} é par`);
  } else {
    console.log(`o número ${item} é impar`);
  }
});

//1-esfe-if.js
/*
if (condidtion) {
  //code
} else if (condition) {
  //code
}
*/

const array = [2, 3, 4, 5, 6, 8, 10, 15];

array.forEach(item => {
  if (item % 2 === 0) {
    console.log(`O número ${item} é divisível por 2`);
  } else if(item % 3 === 0) {
    console.log(`o número ${item} é divisível por 3`);
  } else if(item % 5 === 0) {
    console.log(`o número ${item} é divisível por 5`);
  }
});
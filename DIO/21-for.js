/*
for ([expressaoInicial]; [condicao]; [incremento]) {
  //code
}
*/

const array = ['one', 'two', 'three'];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(`Element #${index}: ${element}`);
}
console.log('-----------------------------------');
//for-in-of
let arr = [3, 5, 7];
arr.foo = "hello";

//for-in - imprime indices do array
for (let i in arr) {
console.log(i); //0, 1, 2, foo
}
console.log('-----------------------------------');
//for-of - imprime valores do array
for (let i of arr) {
  console.log(i); //3, 5, 7
}
console.log('-----------------------------------');
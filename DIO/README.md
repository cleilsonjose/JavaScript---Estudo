## Currying

**Currying** é o processo de transformar uma função que espera vários argumentos em uma função que espera um único argumento e retorna outra função *curried*.

```javascript
function soma(a){
  return function(b){
    return a + b;
  }
}

const soma2 =  soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));
```

## Escopo
```javascript
// escopo global

{
  //escopo de bloco
}

function test(){
  //escopo de função
}
```


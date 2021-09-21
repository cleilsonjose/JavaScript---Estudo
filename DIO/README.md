## Currying

**Currying** é a técnica de transforma uma função com vários parâmetros em apenas um sendo que para cada parâmetro e retornando outra função.

```javascript
//função natural
function somaFn(a, b) {
  return a + b;
}

//aplicação do currying
function somaCurrying(a) {
  return function(b) {
    return a + b;
  }
}

//chamada função natural
console.log(somaFn(1, 1));

//chamada função currying
const resultSoma = somaCurrying(1);
console.log(resultSoma(1));
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

## Tipos e variáveis

### String

```javascript
// retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log(`\nArray com as posições separadas pelo delimitador: ${splittedText}`);

// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor:', replacedText);

// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string:', lastChar);

const allWithoutLastChar = 'Texto'.slice(0,-1);
console.log('\nValor da primeira letra menos a última:', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última:', secondToEnd);

// Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas letras primeiras letras são:', twoCharsBeforeFirstPos);
```

### Number
  ```javascript
  const myNumber = 12.4032;

  //transformar número para string
  const numberAsString = myNumber.toString();
  console.log('Número trasnformado em string: ', numberAsString, typeof numberAsString);

  //retorna número com um número de casas decimais
  const fixedTwoDecimals = myNumber.toFixed(2);
  console.log('\nNúmero com duas casa decimais: ', fixedTwoDecimals);

  //transforma uma string em float
  console.log('\nString convertida para float: ', parseFloat('13.22'));

  //transforma uma string em int
  console.log('\nString convertida para int: ', parseInt('13.20'));
  ```
* boolean
* null
* undefined
* symbol
* Object
* Function 
* Array




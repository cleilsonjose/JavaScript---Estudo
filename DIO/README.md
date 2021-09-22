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
  ### Null

```javascript
const nullVariable = null;
```

### Boolean

```javascript
const isActive = true;

console.log('Tipo de variável :', typeof isActive)
```

### Undefined

```javascript
const undefinedVariable;

console.log('Tipo de variável :', typeof undefinedVariable)
```

### Symbol

```javascript
const symbol1 = Symbol();
const symbol2 = Symbol();
console.log('symbols1 é igual a symbols2: ', symbol1 === symbol2);

//prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
  [nameSymbol1]: 'Cleilson',
  [nameSymbol2]: 'Outro nome',
  lastName: 'José de Araújo'
}

console.log(user);

//symbols criam propriedades que não são enuberables
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`\nValor da chave ${key}: ${user[key]}`);
  }
}

console.log('Propriedades do objeto user: ', Object.keys(user));
console.log('Valores das propriedades do objeto user: ', Object.values(user));

//exibir symbols de um objeto
console.log('Symbols registrados no objeto user: ', Object.getOwnPropertySymbols(user));

//acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user: ', Reflect.ownKeys(user));

//criar um enum
const directions = {
  UP: Symbol('UP'),
  DOWN: Symbol('DOWN'),
  LEFT: Symbol('LEFT'),
  RIGHT: Symbol('RIGHT')
};
```

### Object

```javascript
let user = {
  name: 'Cleilson'
};

console.log(user);
//alterando a propriedade de um objeto
user.name = 'Outro nome 1';
console.log(user);
user['name'] = 'Outro nome 2';
console.log(user);

const prop = 'name';
user[prop] = 'Outro nome 3';
console.log(user);

//criando uma propriedade
user.lastName = 'José de Araújo';
console.log(user);

//deletando uma propriedade
delete user.name;
console.log(user);
```



```javascript
let user = {
  name: 'Cleilson',
  lastName: 'José de Araújo'
};

//recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

//recupera os valores das chaves do objeto
console.log('\Valores das propriedades do objeto user: ', Object.values(user));

//retorna um array de arrays contendo [nome.prop, valor.prop]
console.log('\Lista de propriedades e valores: ', Object.entries(user));

//merge de propriedades de objetos
Object.assign(user, { fullName: 'Cleilson José de Araújo'});

console.log('\nAdiciona a propriedade fullName no objeto user: ', user);
console.log('\Retorna um novo objeto mergeando dois ou mais objetos: ', 
Object.assign({}, user, {age: 32}));

//previne todas as alterações em um objeto
const newObj = { foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'change';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações: ', newObj);

//permite apenas a alteração de propriedades existetnes em um objeto
const person = { name: 'Daniel' };
Object.seal(person);

person.name = 'Cleilson José de Araújo';
delete person.name;
person.age = 32;

console.log('\nVariável person após as alterações: ', person);
```

### Function 

```javascript
(() => {
this.name = 'Nome no contexto de criação';

const getNameArrowFn = () => this.name;

function getName() {
  return this.name;
}

const user = {
  name: 'Nome no objeto de execução',
  getNameArrowFn,
  getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());
})();
```

```javascript
(() => {
  this.name = 'Nome no contexto de criação';
  
  const getNameArrowFn = () => this.name;
  
  function getName() {
    return this.name;
  }
  
  const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName
  }
  
  console.log(user.getNameArrowFn());
  console.log(user.getName());
  })();
```

### Array

```javascript
```






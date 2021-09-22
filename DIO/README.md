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
const users = ['Cleilson', 'Israel', 'Lívia'];

const gender = { 
  MAN: Symbol('M'),
  WOMAN: Symbol('W')
}

const persons = [
  {
    name: 'Cleilson',
    age: 32,
    gender: gender.MAN
  },
  {
    name: 'Israel',
    age: 29,
    gender: gender.MAN
  },
  {
    name: 'Lívia',
    age: 30,
    gender: gender.WOMAN
  }
];

//retorna a quantidade de itens de um array
console.log('Items: ', persons.length);

//verifica se pertence ao array
console.log('A variável person é um array: ', Array.isArray(persons));

//iterar os itens do array
persons.forEach(person => {
  console.log(`Nome: ${person.name}`);
});

//filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens: ', mens);

//retornar um novo
const personWithCourse = persons.map(person => {
  person.course = 'Introdução ao Javascript';
  return person;
});

console.log('\nPessoal com a adição do curso: ', personWithCourse);

//transformar um array em outro tipo (primeiro param é o novo item, o segundo param é o item do array)
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);

console.log('\nSoma de idade das pessoas: ', totalAge);

//justando operações
const totalEvenAges = persons
    .filter(person => person.age % 2 === 0)
    .reduce((age, person) => {
      age += person.age;
      return age;
    }, 0);

console.log('\nSoma de idade das pessoas que possuem idade par: ', totalEvenAges);
```

```javascript
//18-binarios
//something in somethingItems

//arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;           //retorna true
3 in arvores;           //retorna true
6 in arvores;           //retorna false
"cedro" in arvores      //retorna false (você deve especificar o número do índice),
                        //não o valor naquele índice
"cedro" in arvores[2]   //retorna true
"length" in arvores     //retorna true (length é uma propriedade de Array)


//objetos predefinidos
"PI" in Math;               //retona true
var minhaString = new String("coral");
"length" in minhaString;    //retorna true


//objetos personalizados
var meuCarro = { marca: "Honda", modelo: "Accord", ano: 1998 };
"marca" in meuCarro;        //retorna true
"modelo" in meuCarro        //retorna true


//instanceof
objeto instanceof tipoObjeto

var dia = new Date(2020, 4, 13);

if(dia instanceof Date) {
  //code here
}
```



### Operadores

```javascript
//módulo (%)
//operador binário. retorna o inteiro restante da divisão dos dois operadores
console.log(12 % 5) // retorna 2

//incremento (++) 
++x
x++
//decremento (--)
--x
x--

//negação (-) adição (+)
-3
+"3" //retorna 3
+true //retorna 1
+false //retorna 0
-true //retorna -1

//operador de exponenciação (**)
2 ** 3 //retorna 8
10 ** -1 //retorna 0.1

//operador de agrupamento ()
2 * (3 + 2)
```

### Atribuição

```javascript
//atribuição
x = y

//atribuição de adição
x = x + y //ou
x += y

//atribução de subtração
x = x - y //ou
x -= y

//atribuição de multiplicação
x = x * y //ou
x *= y

//atribuição de divisão
x = x / y //ou
x /= y

//atribuição de resto
x = x % y //ou
x %= y
```

### Condicional

```javascript
//ternário
//condicao ? valor1 : valor2

true ? 'foo' : 'bar' //retorna 'foo'
false ? 'foo' : 'bar' //retorna 'bar'
```

### Comparação

```javascript
//igual (==)
//retorna verdadeiro caso os operandos sejam iguais. 3 == var1
"3" == var1
3 == '3'

//não igual (!=)
//retorna verdadeiro caso os operandos não sejam iguais. var1 != 4
var2 != "3"

//estritamente igual (===)
//retorna verdadeiro caso os operando sejam iguais e do mesmo tipo. Veja támbem Object.
3 === var1

//estritamente não igual (!===)
//retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo
var1 !== "3"
3 !== '3'

//maior que (>)
//retorna verdadeiro caso o operando da esquerda seja maior que o da direita
var2 > var1
"12" > 2

//maior que ou igual (>=)
//retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita
var2 >= var1
var1 >= 3

//menor que (<)
//retorna verdadeiro caso o operando da esquerda seja menor que o da direita.
var1 < var2
"12" < "2"

//menor que ou igual (<=)
//retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita
var1 <= var2
var2 <= 5
```

### Lógicos

```javascript
//E lógico (&&)
//exp1 && exp2;

//AND lógico (&&)
var a1 = true && true       //retorna true
var a2 = true && false      //retorna false
var a3 = false && true      //retorna false
var a4 = false && (3 == 4)  //retorna false
var a5 = "Gato" && "Cão"    //retorna Cão
var a6 = false && "Gato"    //retorna false
var a7 = "Gato" && false    //retorna false

//OU lógico (||)
//exp1 || exp2

var o1 = true || true       //retorna true
var o2 = false || true      //retorna true
var o3 = true || false      //retorna true
var o4 = false || (3 == 4)  //retorna false
var o5 = "Gato" || "Cão"    //retorna Gato
var o6 = false || "Gato"    //retorna Gato
var o7 = "Gato" || false    //retorna Gato

//exemplo para atribuição de variável
//conteudo = conteudo || 'fallback';

//NOT lógico (!)
//!exp1

var n1 = !true      //retorna false
var n2 = !false;    //retorna true
var n3 = !"Gato";   //retorna false (string com valor é verdadeira)

//String com valor e sem valor
//True
" "

//False
""
```

### Spread

```javascript
//spread
var partes = ['ombro', 'joelhos'];
var musica = ['cabeça',...partes, 'e', 'pés'];

function fn(x, y, z){}
var args = [0, 1, 2];
fn(...args);
```

### Unário

```javascript
//deletar algo
delete something;
//determina tipo
typeof something;
```

## Estruturas condicionais e repetição

### if

```javascript
//19
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
```

### else-if

```javascript

//19
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
```

### switch

```javascript
//20
//1-switch.js
/*
switch (expression) {
  case valor1:
    [break;]

  case valorN:
    [break;]

  default:
    [break;]
}
*/

const fruit = 'pera';

switch (fruit) {
  case 'banana':
    console.log('R$ 3,00 / KG')
    break;
  case 'mamão':
  case 'pera':
    console.log('R$ 2,00 / KG')
    break;
  default:
    console.log('Produto não existe no estoque');
    break;
}
```




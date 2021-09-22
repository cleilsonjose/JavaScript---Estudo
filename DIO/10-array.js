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
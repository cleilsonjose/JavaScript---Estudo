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
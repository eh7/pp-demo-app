interface Person {
  name: String;
  age: Number;
}

const spiderman = (person: Person): String => {
  return 'Hello, ' + person.name + "\nyou are " + person.age;
}

//let user = 'Peter Parker';
//let user = 1;
const user = {
  name: 'John',
  age: 19,
}

console.log(spiderman(user));

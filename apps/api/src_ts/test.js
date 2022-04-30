var spiderman = function (person) {
    return 'Hello, ' + person.name + "\nyou are " + person.age;
};
//let user = 'Peter Parker';
//let user = 1;
var user = {
    name: 'John',
    age: 19
};
console.log(spiderman(user));

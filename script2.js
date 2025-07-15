class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
  }
}
const person = new Person("Alice", 25);
person.introduce(); // Hi, I'm Alice, and I'm 25 years old.
// Using let, const, and arrow functions
const names = ["Bob", "Charlie"];
let greetings = names.map((name) => `Hello, ${name}!`);
console.log(greetings);
// Using destructuring
const { name, age } = person;
console.log(`${name} is ${age} years old.`);
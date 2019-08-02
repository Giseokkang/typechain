interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "key",
  age: 20,
  gender: "male"
};

const sayHello = (person: Human): string =>
  `hello ${person.name}, you are ${person.age}, and a ${person.gender}`;

console.log(sayHello(person));

export {};

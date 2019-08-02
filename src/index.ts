const name = "key",
  age = 23,
  gender = "male";

const sayHello = (name: string, age: number, gender: string): string =>
  `hello ${name}, you are ${age}, and a ${gender}`;

console.log(sayHello("key", 23, "female"));

export {};

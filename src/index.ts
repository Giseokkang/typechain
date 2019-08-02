class Humman {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const key = new Humman("key", 123, "male");

const sayHello = (key): string =>
  `hello ${key.name}, you are ${key.age}, and a ${key.gender}`;

console.log(sayHello(key));

export {};

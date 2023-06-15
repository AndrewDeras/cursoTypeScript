export class Person {
  static standardAge = 0;

  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public cpf: string,
  ) {}

  static sayHello(): void {
    console.log('Hello');
  }

  static createPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, Person.standardAge, '000.000.000.11');
  }

  normalMethod(): void {
    console.log(Person.standardAge);
  }
}

const person = new Person('Andrew', 'Deras', 25, '000.000.000-00');
const person1 = Person.createPerson('Vini', 'Jr');
person1.normalMethod();

interface TypePerson {
  name: string;
  lastName: string;
  fullName(): string;
}

export class Person implements TypePerson {
  constructor(public name: string, public lastName: string) {}

  public fullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

const person1 = new Person('Andrew', 'Deras');
console.log(person1.fullName());

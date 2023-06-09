export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  getCPF(): string {
    return `${this.cpf}`;
  }

  getAge(): number {
    return this.age;
  }
}

export class Student extends Person {
  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public room: string,
  ) {
    super(name, lastName, age, cpf);
  }
  getFullName(): string {
    return `Student: ${this.name} ${this.lastName}`;
  }
}

export class Client extends Person {
  getFullName(): string {
    return `Client: ${this.name} ${this.lastName}`;
  }
}

const student = new Student('Andrew', 'Deras', 25, 'hadshjkas', '3002');
// const person = new Person('Andrew', 'Deras', 25, 'hadshjkas');
// const client = new Client('Andrew', 'Deras', 25, 'hadshjkas');
console.log(student);

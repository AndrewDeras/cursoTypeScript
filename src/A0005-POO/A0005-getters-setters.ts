export class Person {
  constructor(
    private name: string,
    private lastName: string,
    private age: number,
    private _cpf: string,
  ) {}

  /* maneira antiga

  setCPF(value: string): void {
    this.cpf = value;
  }

  getCPF(): string {
    return `${this.cpf.replace(/\D/g, '')}`;
  }

  */

  set cpf(value: string) {
    this._cpf = value;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}
const person = new Person('Andrew', 'Deras', 25, '000.000.000-00');
person.cpf = '000.000.000-99';
console.log(person.cpf);

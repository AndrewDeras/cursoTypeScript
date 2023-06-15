interface Person {
  name: string;
}

interface Person {
  readonly lastName: string;
  readonly address: readonly string[];
}

interface Person {
  readonly age?: number;
}

const person1: Person = {
  name: 'Andrew',
  lastName: 'Deras',
  address: ['Est Agua'],
};

console.log(person1);

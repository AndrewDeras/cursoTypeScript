interface PersonProtocol<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

export const person1: PersonProtocol<string, number> = {
  name: 'Andrew',
  lastName: 'Deras',
  age: 25,
};

export const person2: PersonProtocol<number, number> = {
  name: 2121,
  lastName: 3286,
  age: 25,
};

export const person3: PersonProtocol = {
  name: 'Vini',
  lastName: 'Jr',
  age: 25,
};

console.log(person1);
console.log(person2);

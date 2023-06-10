type HasName = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };
type Person = HasName & HasLastName & HasAge;

const person: Person = {
  name: 'Andrew',
  lastName: 'Deras',
  age: 25,
};

console.log(person);

// module mode
export { person };

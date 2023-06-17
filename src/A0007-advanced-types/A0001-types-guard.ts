export function addOrConcat(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

// console.log(addOrConcat(1, 1));
// console.log(addOrConcat('1', '1'));

type Person = {
  type: 'person';
  name: string;
};

type Animal = {
  type: 'animal';
  color: string;
};

type AnimalOrPerson = Person | Animal;

export class Student implements Person {
  //eslint-disable-next-line
  type: 'person' = 'person';
  constructor(public name: string) {}
}

function showName(obj: AnimalOrPerson): void {
  // if ('name' in obj) console.log(obj.name);

  // if (obj instanceof Student) console.log(obj.name);

  switch (obj.type) {
    case 'person':
      console.log(obj.name);
      return;
    case 'animal':
      console.log('Isso é um animal.', obj.color);
      return;
    default:
      break;
  }
}

showName(new Student('Andrew'));
showName({ type: 'animal', color: 'Brown' });

let x;

if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwo = squareOf('1');

if (squareOfTwo === null) {
  console.log('Tipo inválido', squareOfTwo);
} else {
  console.log(squareOfTwo + 1);
}

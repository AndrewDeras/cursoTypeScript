let x = 10;  //eslint-disable-line
x = 0b1010;

const y = 10;

const a = 100;

const person = {
  name: 'Andrew' as const,
  lastName: 'Deras',
};

// person.name = ' khsaj';

function colorPick(color: 'Red' | 'Blue' | 'Purple'): string {
  return color;
}

console.log(colorPick('Purple'));

export default 1;

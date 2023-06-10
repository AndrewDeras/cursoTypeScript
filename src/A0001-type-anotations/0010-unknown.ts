// unknown é mais seguro que o any

let x: unknown;

x = 100;
x = 'Unknown';
x = 99;

const y = 1;

// console.log(x + y);
if (typeof x === 'number') console.log(x + y);

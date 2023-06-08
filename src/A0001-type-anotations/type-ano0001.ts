/*  eslint-disable  */
let nome: string = 'Andrew';
let idade: number = 25;
let adulto: boolean = true;
let simbolo: symbol = Symbol('Qualquer símbolo');
// let big: bigint = 10n

// arrays

let arrayOfNumbers: Array<number> = [1, 2, 3, 4];
let arrayOfStrings: Array<string> = ['a', 'b', 'c'];

// objects

let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Andrew',
  idade: 25,
  adulto: true,
};

//functions

function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

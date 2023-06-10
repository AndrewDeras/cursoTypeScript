// Array<T> - T[]
export function multNumbers(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

export function concatStrings(...args: string[]): string {
  return args.reduce((acc, value) => acc + value, '');
}

const result = multNumbers(2, 2, 2);
const strings = concatStrings('A', 'n', 'd', 'r', 'e', 'w');

console.log(strings);

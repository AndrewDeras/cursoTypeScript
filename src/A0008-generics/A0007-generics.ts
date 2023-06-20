export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

console.log(isNumber('anas'));

export function add<T>(...args: T[]): number {
  const retorno = args.reduce((acc, value) => {
    if (isNumber(acc) && isNumber(value)) {
      return acc + value;
    }

    return acc;
  }, 0);

  return retorno;
}

console.log(add(1, 2, 3));

type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callbackfn(element, i, array)) newArray.push(element);
  }

  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const originalFilterArray = array.filter((value) => value < 7);

const myFilterArray = myFilter(array, (n) => n < 5);

console.log(originalFilterArray);
console.log(myFilterArray);

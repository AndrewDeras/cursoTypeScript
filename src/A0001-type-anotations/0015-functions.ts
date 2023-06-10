type MapStringCallback = (item: string) => string;

export function mapStrings(array: string[], callbackfn: MapStringCallback) {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc: string[] = ['a', 'b', 'c'];

console.log(mapStrings(abc, (letter) => letter.toUpperCase()));
console.log(abc);

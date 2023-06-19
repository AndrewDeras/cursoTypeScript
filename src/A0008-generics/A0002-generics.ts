// array and promisess

type MyType = number;
const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7];

console.log(arrayNumbers);

async function promiseAsync() {
  return 1;
}

function myPromise(): Promise<MyType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(39);
    }, 1000);
  });
}

promiseAsync().then((result) => console.log(result));

myPromise().then((result) => console.log(result));

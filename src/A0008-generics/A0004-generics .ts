// constrains
type GetKeyFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const getKey: GetKeyFn = (obj, chave) => obj[chave];

console.log(getKey({ name: 'Andrew', age: 25 }, 'age'));

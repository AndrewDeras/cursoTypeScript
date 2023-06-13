export function funcao(this: Date, argumneto1: string): void {
  console.log(this);
  console.log(argumneto1);
}

funcao.call(new Date(), 'Andrew');

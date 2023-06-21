@invertNameAndColor('Valor 1', 'Valor 2')
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('I am the class');
  }
}

function invertNameAndColor(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log('Hi from invertNameAndColor function', target);
    console.log(param1, param2);

    return class extends target {
      name: string;
      color: string;
      constructor(...args: any[]) {
        super(...args);
        this.name = this.reverse(args[0]);
        this.color = this.reverse(args[1]);
      }

      reverse(value: string): string {
        return value.split('').reverse().join('');
      }
    };
  };
}

const animal1 = new Animal('Rocky', 'Amarelo');
console.log(animal1);

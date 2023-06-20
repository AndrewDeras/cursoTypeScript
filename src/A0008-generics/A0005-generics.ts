export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

// const person1 = new Person('Andrew', 25);
// const person2 = new Person(['Andrew'], 25);
// const person3 = new Person(['Andrew'], { age: 25 });

// pilha - estrutura de dados

export class Stack<T> {
  private counter = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.counter--;

    const removedElement = this.elements[this.counter];
    delete this.elements[this.counter];

    return removedElement;
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  length(): number {
    return this.counter;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const stack = new Stack<string>();

stack.push('Andrew');
stack.push('Camavinga');
stack.push('Vini Jr');
stack.pop();
stack.showStack();

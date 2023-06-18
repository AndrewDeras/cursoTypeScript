export class Calculator {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  mul(n: number): this {
    this.numero *= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }
}

export class CalculatorTwo extends Calculator {
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calculator = new CalculatorTwo(10);

// calculator.add(10).mul(10).sub(1);
calculator.pow(2);

console.log(calculator);

// builder = GoF

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const newReq = new RequestBuilder();

newReq.setMethod('post').setUrl('http://localhost:3000').send();

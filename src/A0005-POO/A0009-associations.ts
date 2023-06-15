export class Writter {
  private _tool: Tool | null = null;
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log('Cannot write without a tool');
      return;
    }
    this._tool?.write();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}

  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  write(): void {
    console.log(`${this.name} está escrevendo.`);
  }
}

export class Laptop extends Tool {
  write(): void {
    console.log(`${this.name} está digitando.`);
  }
}

const writter = new Writter('Andrew');
const writter2 = new Writter('Andrew2');
const pen = new Pen('Bic');
const laptop = new Laptop('Acer');

// console.log(writter.name);
// console.log(pen.name);
// console.log(laptop.name);

writter.tool = laptop;
writter2.tool = pen;
writter.write();
writter2.write();

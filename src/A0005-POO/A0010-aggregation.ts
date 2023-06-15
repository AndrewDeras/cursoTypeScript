// aggregation

export class Basket {
  private readonly products: Product[] = [];

  addProduct(...products: Product[]): void {
    if (!products) return;
    for (const item of products) {
      this.products.push(item);
    }
  }

  quantityOfProducts(): number {
    return this.products.length;
  }

  total(): number {
    let sum = 0;
    for (const { price } of this.products) {
      sum += price;
    }

    return sum;
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const product1 = new Product('Tenis Nike', 199.99);
const product2 = new Product('Tenis Adidas', 199.99);
const product3 = new Product('Tenis Vans', 199.99);

const basket = new Basket();

basket.addProduct(product1, product2, product3);

console.log(basket.total());

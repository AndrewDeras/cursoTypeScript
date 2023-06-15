export class Car {
  private readonly motor = new Motor();

  turnOn(): void {
    this.motor.turnOn();
  }

  turnOff(): void {
    this.motor.turnOff();
  }

  speedUp(): void {
    this.motor.speedUp();
  }

  slowDown(): void {
    this.motor.slowDown();
  }
}

export class Motor {
  turnOn(): void {
    console.log('Turning on');
  }

  turnOff(): void {
    console.log('Turning off');
  }

  speedUp(): void {
    console.log('Speeding up');
  }

  slowDown(): void {
    console.log('Slowing down');
  }
}

const car = new Car();
car.turnOn();

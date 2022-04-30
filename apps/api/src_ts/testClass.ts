class Car {
  model: String;
  doors: Number;
  isElectric: Boolean;
    
  constructor(model: String, doors: Number, isElectric: Boolean) {
    this.model = model;
    this.doors = doors;
    this.isElectric = isElectric;
  }

  make(): void {
    console.log(`This car is ${this.model} which has ${this.doors} doors` );
  }
}
let newCar = new Car('Innova', 4, false);
newCar.make();

class Car {
  constructor(name){
    this.name = name;
    this.type = 'Car';
  }
  getName(){
    return this.name;
  }
}
let car = new Car("my car");
console.log("car.getName(): " + car.getName());

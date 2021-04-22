let calculator = {
  read() {
    this.x = 10;
    this.y = 10; 
  },
  sum() {
    return this.x + this.y;
  },
  mul() {
    return this.x * this.y;
  }
}
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
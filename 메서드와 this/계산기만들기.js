let calculator = {
  read(){
    this.a = 1;
    this.b = 2;
  },
  sum(){
    return this.a+this.b;
  },
  mul(){
    return this.a*this.b;
  }

}
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
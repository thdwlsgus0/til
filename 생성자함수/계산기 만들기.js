
function Calculator() {
   this.read = function() {
       this.a = 1;
       this.b = 2;
   }
   this.sum = function() {
     return this.a + this.b;
   }
   this.mul = function() {
     return this.a * this.b;
   }
}

let calculator = new Calculator();
calculator.read();
console.log(calculator.sum(1,2));
console.log(calculator.mul(1,2));
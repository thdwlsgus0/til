class Calculator {
  constructor(){
    this.methods ={
      '-': (a,b) => a-b,
      '+': (a,b) => a+b
    };
  }
  
  calculate(str){
    let split = str.split(' ');
    const a = +split[0];
    const op = split[1];
    const b = +split[2];
    if(!this.methods[op] || isNaN(a) || isNaN(b)){
      return NaN;
    }            
    return this.methods[op](a,b); 
  }
  addMethod(name, func){
     this.methods[name] = func;
  }
}
let calc = new Calculator;

calc.addMethod("*", (a,b)=> a*b);
calc.addMethod("/", (a,b)=>a/b);
calc.addMethod("**", (a,b)=>a**b);

console.log(calc.calculate("2 ** 3"));
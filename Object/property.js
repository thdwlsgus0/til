const sumSalaries = (salaries) => {
  return Object.values(salaries).reduce((acc,cur)=> acc+cur,0);
}

let salaries = {
  "John":100,
  "Pete":300,
  "Mary":250
};
console.log(sumSalaries(salaries));
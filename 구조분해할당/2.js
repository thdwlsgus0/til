let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const topSalary = (salaries) => {
  let maxValue = 0;
  let ans = '';
  if(Object.values(salaries).length === 0)return null;

  for(let [key, value] of Object.entries(salaries)){
    if(maxValue < value){
        ans = key;
        maxValue = value;
    } 
  }
  return ans;
}

console.log(topSalary(salaries));
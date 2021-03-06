
let strings = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];
const unique = (arr) => {
  let result = [];
  for(let value of arr){
    if(!arr.includes(value)){
       result.push(value);
    }
  }
  return result;
}
console.log(unique(strings));

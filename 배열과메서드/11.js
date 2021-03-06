let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

const getAverageAge = (arr) => {
  const sum = arr.reduce((acc, cur)=>{
      return acc + cur.age;
  },0);
  return Math.floor(sum/arr.length);
}
console.log(getAverageAge(arr));
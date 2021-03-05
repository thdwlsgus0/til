const sumInput = () => {
  let arr = [1,2,3,4,5,6,7];
  let sum = 0;
  for(let value of arr){
    sum+=value;
  }
  return sum;
}
console.log(sumInput());
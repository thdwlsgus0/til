const getMaxSubSum = (arr) => {
  let sum = 0;
  let partialSum = 0;
  for(let value of arr){
    partialSum+=value;
    sum = Math.max(sum, partialSum);
    if(partialSum<0) partialSum=0;
  }
  return sum;
}
console.log(getMaxSubSum([-1,2,3,-9]));
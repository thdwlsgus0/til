// for 반복문 사용하기
const sumTo = (n) => {
  let sum = 0;
  for(let i=1; i<=n; i++){
     sum+=i;
  }
  return sum;
}
console.log(sumTo(100));
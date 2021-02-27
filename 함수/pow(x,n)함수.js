const pow = (x,n) => {
  let result = 1;
  for(let i=1; i<=n; i++){
    result*=x;
  }
  return result;
}
console.log(pow(3,2));
console.log(pow(3,3));
console.log(pow(1,100));
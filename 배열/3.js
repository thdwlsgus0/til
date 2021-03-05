let arr = ["a", "b"];

arr.push(function(){
  console.log(this);
})
console.log(arr[2]);
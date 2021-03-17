new Promise(function(resolve, reject){
   setTimeout(function(){
       resolve(1);
   }, 2000)
}).then(function(result){
   console.log(result);
   return result + 10;
})
.then(function(result){
  console.log(result);
  return result+20;
})
.then(function(result){
  console.log(result);
})

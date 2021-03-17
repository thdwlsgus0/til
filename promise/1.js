
function getData() {
  return new Promise(function(resolve, reject){
    var data = 100;
    resolve(data);
  })
}

getData().then(function(resolve, reject){
  console.log(resolve);
});
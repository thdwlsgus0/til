(function(){
  "use strict"
  let nonStrictVar = "bar";
  function nonStrictFunc() {}

  delete nonStrictVar;
  delete nonStrictFunc;

  console.log(nonStrictFunc);
  console.log(nonStrictVar);
}());
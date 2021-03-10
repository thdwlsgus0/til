const recursive = (list) => {
  console.log(list.value);
  if(list.next){
     recursive(list.next);
  }
}

let list = {
  value:1,
  next:{
    value:2,
    next:{
      value:3,
      next:{
        value:4,
        next:null
      }
    }
  }
};

console.log(recursive(list));
let schedule = {};
const isEmpty = (obj) => {
  for(let key in obj){
    return false;
  }
  return true;
} 
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

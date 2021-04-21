

const isEmpty = (schedule) => {
  for(let obj in schedule){
    return false;
  }
  return true;
}
let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";

console.log(isEmpty(schedule));
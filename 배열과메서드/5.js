let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => {
  return arr.slice(0).sort();
}
let sorted = copySorted(arr);
console.log(sorted);
console.log(arr);
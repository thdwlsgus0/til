let arr = [5, 3, 8, 1];

const filterRange = (arr, start, end) => {
  return arr.filter((item)=> item>=start && item<=end);
}
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
const aclean = (arr) => {
  let map = new Map();

  
  for(let value of arr){
    let sorted = value.toLowerCase().split('').sort().join('');
    map.set(sorted, value);
  }
  return Array.from(map.values());
}
console.log(aclean(arr));
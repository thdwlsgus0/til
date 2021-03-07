const unique = (arr) => {
   let set = new Set();
   arr.map((v)=>{
     set.add(v);
   })
   return Array.from(set);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));
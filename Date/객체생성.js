// let now = new Date();
// console.log(now);

// let Jan01_1970 = new Date(0);
// console.log(Jan01_1970);

// let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log(Jan02_1970);

// let date = new Date("2017-01-26");
// console.log(date);

// let date = new Date(2011, 0, 1, 0, 0, 0, 0);
// console.log(date);

// let today = new Date();
// today.setHours(0);
// console.log(today);

// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 3);
// console.log(date);

let start = new Date(); // 측정 시작

for(let i=0; i<1000000; i++){
  let doSomething = i * i * i;
}
let end = new Date(); // 측정 종료

console.log(`for 반복문을 모두 도는데 ${end - start}`);

let start1 = new Date();

const v = Array(1000000).fill(0);
v.map((v, i)=>{
  let doSomething = i * i * i;
});

let end1 = new Date();

console.log(`map을 모두 도는데 ${end1 - start1}`);

let start2 = new Date();

v.forEach((v,i)=>{
  let doSomething = i * i * i;
})

let end2 = new Date();

console.log(`forEach을 모두 도는데 ${end2 - start2}`);

let start3 = new Date();

v.reduce((v,i)=>{
  let doSomething = i * i * i;
});

let end3 = new Date();

console.log(`reduce을 모두 도는데 ${end3 - start3}`);


let start4 = new Date();

v.filter((v,i)=>{
  let doSomething = i * i * i;
})

let end4 = new Date();

console.log(`filter을 모두 도는데 ${end4 - start4}`);
const promiseTest = param => new Promise((resolve, reject)=> {
  setTimeout(()=>{
    if(param){
      resolve("해결 완료")
    }else{
      reject(Error("실패!!"))
    }
  },1000)
})

const a = promiseTest(true);
console.log(a);

setTimeout(()=>{
  console.log(a);
},500);
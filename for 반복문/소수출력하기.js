const primeNumber = (n) => {

  for(let i=2; i<=n; i++){
    let check = false;
    for(let j=2; j<i; j++){
        if(i%j===0){
          check = true;
          break;
        }
    }
    if(!check){
       console.log(i);
    }
  }
}
primeNumber(10);
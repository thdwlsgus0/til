let visited = Array(120).fill(0);

for(let i=2; i<=120; i++){
  for(let j=i+i; j<=120; j+=i){
    visited[j] = 1;
  }
}

for(let i=2; i<=120; i++){
  if(!visited[i])console.log(i);
}
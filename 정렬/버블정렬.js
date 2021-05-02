const array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

const bubbleSort = () => {
  for(let i=0; i<10; i++){
    for(let j=0; j<9-i; j++){
      if(array[j] > array[j+1]){
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
}

bubbleSort();
console.log(array);
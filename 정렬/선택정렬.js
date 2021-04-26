const arr = [1,10,5,8,7,6,4,3,2,9];

const selectionSort = () => {
  let i,j;
  for(i=0; i<10; i++){
    let minIndex = i;
    for(j=i+1; j<10; j++){
      if(arr[minIndex]> arr[j]){
         minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
}
selectionSort();

console.log(arr);
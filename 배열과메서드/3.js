let arr = [5, 3, 8, 1];


const filterRangeInPlace = (arr, start, end) => {
  for(let i=0; i<arr.length; i++){
    if(arr[i]<start || arr[i]>end){
        arr.splice(i,1);
        i--;
    }
  }
}
filterRangeInPlace(arr, 1, 4);
console.log(arr);
class Heap {
  constructor(){
    this.heap = [];
    this.heap.push(0);
  }
  insert(value){
    this.heap.push(value);
    let cur = this.heap.length-1;
   
    while(cur>1 && this.heap[cur] < this.heap[Math.floor((cur)/2)]){
      this.swap(cur, Math.floor((cur)/2));
      cur = Math.floor((cur)/2);
    }
  }
  swap(a,b){
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}
const heap = new Heap();
heap.insert(4);
console.log(heap.heap);
heap.insert(3);
console.log(heap.heap);
heap.insert(2);
console.log(heap.heap);
heap.insert(1);
console.log(heap.heap);


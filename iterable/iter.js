function* generator() {
  yield 1
  yield 2
  yield 3
}
const gene = generator();
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
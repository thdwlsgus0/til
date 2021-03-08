let user = {
  name: 'John',
  age:30
};
const count = (obj) => {
   return Object.entries(obj).length;
}
console.log(count(user));
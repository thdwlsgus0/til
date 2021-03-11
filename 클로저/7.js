function byField(fieldName){
  return (a,b) => a[fieldName] > b[fieldName]? 1: -1;
}
let users = [
  {name : 'John', age:20, surname:'Johnson'},
  {name : 'Pete', age:18, surname: 'Peterson'},
  {name : 'Ann', age:19, surname: 'Hathaway'}
];

users.sort(byField('name'));
users.sort(byField('age'));

console.log(users);
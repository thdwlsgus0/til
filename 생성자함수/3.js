function User(name) {
  if(!new.target){
    return new User(name);
  }

  this.name = name;
}

let user = new User('John');
let data = User('Joon');
console.log(data.name);
console.log(user.name);
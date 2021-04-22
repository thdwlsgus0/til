function User(name) {
  this.name = name;

  this.sayHi = function() {
    console.log("my name is: " + this.name);
  };
}

let john = new User("John");
john.sayHi();
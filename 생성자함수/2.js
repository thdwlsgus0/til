function User() {
  console.log(new.target);
}

User();

new User();
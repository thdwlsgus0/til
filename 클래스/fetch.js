const fetch = require('node-fetch');
const loadUsers = async () => {
  const response = await fetch('http://localhost:3000/api/best');
  const rank = await response.json();
  console.log(rank);
}

loadUsers();
console.log(1);
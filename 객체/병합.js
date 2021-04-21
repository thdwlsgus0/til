let user = {name: "John"};

let permissions1 = {canView: true};
let permissions2 = {canEdit: true};

Object.assign(user, permissions1, permissions2);

console.log(user);
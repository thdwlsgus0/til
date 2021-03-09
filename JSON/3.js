let room = {
  number: 23 
};

let meetup = {
  title: "Conference",
  participants:  [{name:"John"}, {name:"Alice"}],
  place:room
};

room.occupiedBy = meetup;
console.log(JSON.stringify(meetup, ['title', 'participants']))
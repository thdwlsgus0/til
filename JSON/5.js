let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);

console.log(numbers[3]);

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value){
   if (key === 'date') return new Date(value);
   return value;
});
console.log(meetup.date.getDate());
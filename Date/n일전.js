const getDateAgo = (date, day) => {
  date.setDate(date.getDate() - day);
  return date.getDate();
}
let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1));

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
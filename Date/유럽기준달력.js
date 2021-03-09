const getLocalDay = (date) => {
  let day = date.getDay();
  if(day === 0)day = 7;
  return day;
}

let date = new Date(2019, 11, 5);
console.log(getLocalDay(date));

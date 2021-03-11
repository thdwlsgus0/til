const showName = (firstName, lastName, ...titles) => {
  console.log(firstName + ' ' + lastName);

  console.log(titles[0]);
  console.log(titles[1]);
  console.log(titles.length);
}
showName("Julius", "Caesar", "Consul", "Imperator");
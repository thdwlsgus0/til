const f = () => {
  let showArg = () => console.log(arguments[0]);
  showArg();
}
f(1);
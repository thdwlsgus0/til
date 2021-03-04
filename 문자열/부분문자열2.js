let str = 'As sly as a fox, as strong as an ox';
let target = 'as';

let pos = 0;
while(true){
  let foundPos = str.indexOf(target, pos);
  if(foundPos === -1) break;
  console.log(foundPos);
  pos = foundPos + 1;

}
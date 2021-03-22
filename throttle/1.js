let timer; 
document.querySelector('#input').addEventListener('input',(e)=>{
  if(!timer){
    timer = setTimeout(function(){
        timer = null;
        console.log('여기에 ajax 요청', e.target.value);
    },2000);
  }
});
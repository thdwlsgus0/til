
const ballElement = document.querySelector('.ball');

ballElement.addEventListener('mousedown', (e) =>{
   
  let shiftX = e.clientX - ballElement.getBoundingClientRect().left;
  let shiftY = e.clientY - ballElement.getBoundingClientRect().top;
  
   ballElement.style.position= 'absolute';
   ballElement.style.zIndex = 1;

   const moveAt = (pageX, pageY) => {
     ballElement.style.left = pageX - shiftX - ballElement.offsetWidth/2 + 'px';
     ballElement.style.top = pageY - shiftY - ballElement.offsetHeight/2 + 'px';
   }

   const onMouseMove = (e) => {
     moveAt(e.pageX, e.pageY);
   }
   const onMouseRemove = (e) => {
     document.removeEventListener('mousemove', onMouseMove(e));
   }
   document.addEventListener('mousemove', e => onMouseMove(e));
   document.addEventListener('mouseup', e => onMouseRemove(e));
});

document.querySelector('.container').addEventListener('mousemove', function(e){
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},153)`;
     console.log(e.offsetX, e.offsetY);
   console.log('You triggered mouse move event')
})
// selecting elements

const btn = document.querySelector('.play');
const btn2 = document.querySelector('.pause');
const vdo = document.querySelector('.vdo');
const imgbb = document.querySelector('.img-bb');







btn.addEventListener('click',() =>{
    if(btn.classList.contains('hover')){
        btn.classList.remove('hover')
    }else{
        btn.classList.add('hover');
        btn2.classList.remove('hover');
        vdo.play();
    }
});

btn2.addEventListener('click',() =>{
    if(btn2.classList.contains('hover')){
        btn2.classList.remove('hover')
    }else{
        btn2.classList.add('hover');
        btn.classList.remove('hover');
        vdo.pause();
    }
})
window.addEventListener('load',() =>{
    imgbb.classList.add('img-bc');
})



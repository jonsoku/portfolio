const slider = document.querySelector('.slider');
const sliderUl = document.querySelector('.slide ul');
const sliderLi = document.querySelectorAll('.slider li');
const length = sliderLi.length;


const width = 500;
const height = 400;

for(let i = 0 ; i < length ; i++){
    var item = sliderLi.item(i);
    item.style.width = width + "px";
    item.style.height = height + "px";
}

for(let i = 0 ; i < length ; i++){
    const btn = document.createElement('div');
    dot.appendChild(btn);
    btn.classList.add('dots');
}

const dots = document.querySelectorAll('.dots');

for(let i = 0 ; i < length ; i++){
    dots[i].addEventListener('click', function(){
        moveTo(i);
        page = i; 
    })
}


function moveTo(index){
    for(let i = 0 ; i < length ; i++){
        for(let j = 0 ; j < length ; j++){
            sliderLi[j].classList.contains = "on";
            sliderLi[j].classList.remove('on');
        }
        sliderLi[index].classList.add('on');
    }
}

function init(){
    moveTo(0);
}

init();
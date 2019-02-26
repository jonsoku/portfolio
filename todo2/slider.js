const slider = document.querySelector('.slider');
const sliderUl = slider.querySelector('ul');
const sliderLi = sliderUl.querySelectorAll('li');
const length = sliderLi.length;

const width = 450;
const height = 300;

const dot = document.getElementById('dot');

const rightArrow = document.querySelector('.rightArrow');
const leftArrow = document.querySelector('.leftArrow');

let page = 0;

slider.style.width = width + "px";
slider.style.height = height + "px";
slider.style.overflow = "hidden";

sliderUl.style.width = width * length +"px";


for(let i = 0 ; i < length ; i++){
    const item = sliderLi.item(i);
    item.style.width = width +"px";
    item.style.height = height +"px";
    item.style.cssFloat = "left";
    
    const btn = document.createElement('button');
    dot.appendChild(btn);
    btn.classList.add('dots');
}


const dots = document.querySelectorAll('.dots');

for(let i = 0 ; i < length ; i++){
    dots[i].addEventListener('click',function(){
        moveSlider(i);
        //이 부분이 !!!!!!
        page = i;
    });
}



rightArrow.addEventListener("click", function(){
    if(page === length){
        page = 0;
    }
    slideRight();
})



leftArrow.addEventListener("click", function(){
    if(page < 1){
        page = length;
    }
    slideLeft();
})


function slideRight(){
    moveSlider(page+1);
    page++;
}

function slideLeft(){
    moveSlider(page-1);
    page--;
}



function moveSlider(index){
    
    index = index || 0;
    index = index % length;

    sliderUl.style.marginLeft = "-" + width * index + "px";
    for(let i = 0 ; i < length ; i++){
        for(let j = 0 ; j < length ; j++){
            if(dots[j].classList.contains('active')){
                dots[j].classList.remove('active');
            }
        }
        dots[index].classList.add('active');
    }  

}

function init(){
    moveSlider(0);
    setInterval(function(){
        moveSlider(page+1);
        if(page === length){
            page = 0;
        }
        page += 1;
    }, 1000 * 2)
}
init();


const slider = document.querySelector('.slider');
const sliderUl = document.querySelector('.slider ul');
const sliderLi = document.querySelectorAll('.slider li');
const dot = document.querySelector('#dot');

const width = 600;
const height = 450;
const length = sliderLi.length;

const rightArrow = document.querySelector('.rightArrow');
const leftArrow = document.querySelector('.leftArrow')

const title = document.querySelectorAll('.slider span');

let page = 0;

// slider 
slider.style.width = width + "px";
slider.style.height = height + "px";
slider.style.overflow = "hidden";

//slider ul 
sliderUl.style.width = width * length + "px";

//slider li 
for(let i = 0 ; i < length ; i++){
    const item = sliderLi.item(i);
    item.style.width = width + "px";
    item.style.height = height + "px";
    item.style.cssFloat = "left";
}

//li span
for(let i = 0 ; i < length ; i++){
    const item = title.item(i);
    item.innerText = `${i+1}번 이벤트`;

}

//dots
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


rightArrow.addEventListener('click', function(){
    if(page === length){
        page = 0;
    }
    sliderRight();
})
leftArrow.addEventListener('click', function(){
    if(page < 1 ){
        page = length;
    }
    sliderLeft();
    console.log(page);

})

function sliderRight(){
    moveTo(page+1);
    page++;
    console.log(page);
}
function sliderLeft(){
    moveTo(page-1);
    page--;
}

function moveTo(index){

    index = index || 0;
    index = index % length;

    sliderUl.style.marginLeft = "-" + width * index + "px";
    for(let i = 0 ; i < length ; i++){
        for(let j = 0 ; j < length ; j++){
            if(dots[j].classList.contains = "active"){
                dots[j].classList.remove("active");
            }
        }
        dots[index].classList.add("active");
    }
}

function init(){
    moveTo(0);
    setInterval(function(){
        moveTo(page+1);
        page += 1;
        if(page === length){
            page = 0;
        }
    }, 1000*2)
}
init();

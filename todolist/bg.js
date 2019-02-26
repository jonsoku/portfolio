const body = document.querySelector("body");

const IMG_NUMBER = 6;




function showImage(imgNumber){
    const image = new Image();
    image.src = `img/${imgNumber+1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER) ;
    console.log(number);
    return number;
}

function init(){
    //함수로 숫자 생성
    const randomNumber = genRandom();
    showImage(randomNumber);
}
init();
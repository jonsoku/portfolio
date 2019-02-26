// let a = 221;

// let b = a - 5 ;

// //a를 바꾼다.
// //let을 쓰지 않은 이유는 단지 업데이트기 때문 ! 위에서 선언했기 때문에 따로 적지 않아도 된다.
// a = 4;

// console.log(b, a);

// //const = 변하지 않는 값 (상수)

// //var = varible -> let과 같이 값을 바꿀 수 있다.


// const what =  ??? 변수를 선언할 때는 기본적으로 const를 쓰는 습관을 갖자 !


// // string
// const what_s = "Jongseok";
// console.log(what_s);

// // boolean  (true/false) 텍스트가 아니다 !
// const what_b = true;
// console.log(what_b);

// // Number
// const what_n = 666;
// console.log(what_n);

// //Float
// const what_f = 55.1;
// console.log(what_f);

//camel case 방식으로 변수명을 정해야한다. 

/*


const mon = "Mon"; 
const tue = "Tru"; 
const wed = "Wed"; 
const thu = "Thu"; 
const fri = "Fri"; 

//위 내용들을 하나로 묶을 수 있다.
// [] array..
const dayOfWeek = ["Mon",'Tue','Wed','Thu','Fri','Sat','Sun'];

console.log(dayOfWeek);

//array는 규칙이 있다 . 
console.log(dayOfWeek[2]);

const jongseokInfo = {
    name : "Jongseok",
    age : 27,
    gender : "Male",
    hansome : true,
    //객체에 배열넣는법.
    favMovies: ["안녕","지금만나러갑니다.","연공",],
    //객체 > 배열 > 객체
    favFoods : [
        {
            name : "Kimchi",
            fatty: false
        },
        {
            name : "Cheese Burger",
            fatty: true
        }
    ]
}
console.log(jongseokInfo);
console.log(jongseokInfo.name);

//변경 
console.log('변경 전 : '+jongseokInfo.age);
jongseokInfo.age = 29;
console.log('변경 후 : '+jongseokInfo.age);


//객체에 배열넣는법.
console.log(jongseokInfo.favMovies);
console.log(jongseokInfo.favMovies[1]);

//객체>배열>객체 뽑는법
console.log(jongseokInfo.favFoods[1])
console.log(jongseokInfo.favFoods[1].name)


*/

/*

함수 




//따옴표
function sayHello (age, name){
  console.log(age+'살이 되었네요 , 축하해요 !!!' +name);
}
sayHello(25 , "이종석");


//벡틱 ``
function firstFunction(name, age){
    console.log(`${name}씨 어서요세요. 오늘로 ${age}살이 되었네요 !`)
}
firstFunction("이종석", "28")

//함수를 변수로 만드는 방법 
//함수를 return 시켜야한다. 

function secondFunction(name, age){
    return `${name}씨 어서요세요. 오늘로 ${age}살이 되었네요 !`;
}
const jongSeok = secondFunction("종떡", 28);

console.log(`이것은 백틱을 이용하여 함수를 변수로 만드는 방법입니다. 다음은 함수 출력 내용입니다 ${jongSeok}.`)


const calculator = {

    plus : function(a, b){
        return a+b;
    },
    
    subtract : function(a, b){
        return a-b;
    },

    multiply : function(a, b){
        return a*b;
    },

    division : function(a, b){
        return a/b;
    }

}


const plus = calculator.plus(5,5);
const sub = calculator.subtract(10,5);
const mul = calculator.multiply(5,5);
const div = calculator.division(20,5);



console.log(plus, sub, mul, div);


*/





/*


//DOM Functions (Document Object Model)
const title = document.getElementById("title");
console.log(title);

//id가 title인 태그의 HTML내용을 바꾼다.
title.innerHTML = "Hi! From JS";

//console창에서 title을 제어할 수 있는 많은 방법들을 찾아볼 수 있다.
console.dir(title);

title.style.backgroundColor = "black";
title.style.color = "skyblue";

//title바꾸는것
document.title ="I want you";








//window

// function handleResize(){
//     console.log("I have been resized")
// }

function handleClick(){
    console.log("색이변합니다.");
    title.style.backgroundColor = "blue";
}


// //화면사이즈를 줄이거나 늘릴때 발생한다.
// window.addEventListener("resize", handleResize);

title.addEventListener('click', handleClick);

*/

/*

if("10" === 10){
    console.log('Hi')
}else{
    console.log('Ho!')
}

//&& = and 두개다 true여야만 한다.
if(20 > 5 && "jon" === "jon"){
    console.log("correct")
}else{
    console.log("no")
}

//|| = or 둘 중 하나만 true여도 true를 반환
if(20 > 25 || "jon" === "jon"){
    console.log("correct")
}else{
    console.log("no")
}


// 자 실습을 해보자 !

const age = prompt("니 몇살이고 ~  ?");

if( age >= 18 && age <= 21){
    console.log('you can drink but you should not ~! ');
}else if(age > 21){
    console.log('go ahed')
}else{
    console.log('too young')
}

*/

/*

const title = document.querySelector('#title');

const BASE_COLOR = "black";
const OTHER_COLOR = "yellow";



function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();

*/
/*

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

//className -> 클래스명을 통째로 바꿔준다. 음..바꾸느게 아니라 재정의가 더 정확하려나?
function handleClick(){
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    }else{
        title.className = "";
    }
}

function init(){
    title.addEventListener("click", handleClick);
}
init();

*/




/*

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

//className -> 클래스명을 통째로 바꿔준다. 음..바꾸느게 아니라 재정의가 더 정확하려나?
function handleClick(){
    //"clicked" 가 있으면 hasClass에 넣는다.
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    }else{
        title.classList.add(CLICKED_CLASS);
    }
}

function init(){
    title.addEventListener("click", handleClick);
}
init();

*/



const title = document.getElementById('title');

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS)
}

function init(){
    title.addEventListener("click",handleClick)
}
init();
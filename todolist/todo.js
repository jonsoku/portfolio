const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';



//배열을 만들어준다.
//1. 해야할 일을 생성할 때마다, toDos라는 array에 추가되도록 한다.
let toDos = [];


function deleteToDo(event){
    const Btn = event.target;
    const li = Btn.parentNode;
    toDoList.removeChild(li);

    //filter는 array의 모든 아이템을 통해 함수를 실행하고, 그리고 true인 아이템들만 가지고 새로운 array를 만든다.
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}


function saveToDos(){
    //자바스크립트는 localstorage 에 저장하는 value값은 모두 string으로 저장하려한다.
    //그래서 object를 string으로 변환해야한다.. 
    //JSON.stringify 를 사용한다. (변환하고 싶은 문자열 앞에)
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


function showToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText ="삭제";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const liId = (toDos.length + 1);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    li.id = liId;
    // 2.그러기 위해서는 일단 toDoObj을 만들어야한다.
    const toDoObj = {
        text : text,
        id : liId
    };
    //3. 배열에 toDoObj(객체)를 넣어준다.
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    showToDo(currentValue);
    toDoInput.value = "";
}



function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        console.log(loadedToDos);
        //데이터를 전달할 때, 자바스크립트가 그것을 다룰 수 있도록 object형식으로 바꿔주는 기능
        //자바스크립트의 object <=> string 변환 가능..
        //JSON.parse();
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            showToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();